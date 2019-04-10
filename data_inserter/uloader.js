const csv = require("csvtojson");
const args = require('minimist')(process.argv.slice(2));
const numeral = require('numeral');
const admin = args['admin'];
const pass = args['pass'];
if (!admin || !pass) {
    console.log('you have not provided an admin or password');
    console.log('we will continue with out');
}
const nano = require('nano')((!admin || !pass) ? 
'http://localhost:5984' : 'http://' + admin + ':' + pass + '@localhost:5984');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const dbName = 'patient_data';
const start_Uploading = async () => {
    const csvFile = 'datainput.csv';
    let counter = 0;
    const db = nano.use(dbName);
    let bulk = [];
    let fullCount = NaN;
    let insertionCount = 0;
    let limitReached = false;
    const bulkInserter = (bulkDocs) => {
        db.bulk({docs:bulkDocs}).then(() => {
            insertionCount = insertionCount + bulkDocs.length;
            /*Hate getting too frequent messages, this should print out a message
            every 100 documents first 400 documents, then every 1000 first 4000,
            every 10000 first 40000 then message we will update you every 80000*/
            const digits = insertionCount.toString().length;
            const base = (digits < 4) ? 100 : (digits < 5) ? 1000 : 10000;             
            const baseLimit = ((base * 4) + 1);
            
            if (insertionCount < baseLimit && insertionCount % base === 0) {
                console.log(insertionCount + ' documents inserted so far');
                return;
            }
            if (insertionCount > 40100 && !limitReached) {
                limitReached = true;
                console.log('update you on every 80,000 documents');
            }
            if ((insertionCount % 80000) < 100) {
                console.log('another 80000 documents inserted');
            }
            /*fullcount is set when done happens, however because bulk insertion async
            we can end up being done before everything inserted, not particularly worth fixing problem.*/

            if (fullCount === insertionCount) {
                /*because we used readline to check if we needed to destroy
                 db before creating again, we need to explicitly close it or it will stay open
                 until the user closes it. Todo -  might like to do some cleanup here.
                */
                console.log('All documents inserted');
                readline.close();
            }
        }).catch((err) => {
            console.log('there was a problem with bulk insertion of documents');
            console.log(err);
            console.log(bulkDocs);
        });
    }

    csv().fromFile(csvFile).subscribe((json) => {
        /*for query performance better to save these as numerical values
        when returning data will remove the extra data fields.*/
        json.coveredCharges = numeral(json['Average Covered Charges'])._value;
        json.totalPayments = numeral(json['Average Total Payments'])._value;
        json.medicare = numeral(json['Average Medicare Payments'])._value;
        /*the default csvjson parser converts to string, easier to just
        change this field instead of writing own parser. */
        json['Total Discharges'] = numeral(json['Total Discharges'])._value;
        bulk.push(json);
        /*we need to put counter up before bulkInserter where we pass it the current counter
        because we want the counter to be divisible by 100, this is used to do the evaluation
        of when we need to put a message out to let the user know documents are being put in.*/
        counter++;
        /*because there are a lot of documents and we don't want to miss any we should
         we should do bulk inserts to take some strain off of couchdb. The same principle would 
         obviously apply in any data inserting scenario.
        */
        if (bulk.length === 100) {
              const bulkDocs = [...bulk];
              bulk = [];
              bulkInserter(bulkDocs);
        }
    }).on('done',(err)=>{
        if (err) {
            console.log('There was a CSV to JSON error');
            console.log(err);
            return;
        }
        fullCount = counter;
        if (bulk.length > 0) {
          /*because we don't have a csv perfectly divisible by 100 it follows there 
          will be some documents left over at the end that still need to be placed in the 
          database*/
          bulkInserter(bulk);
        }
    })
}; 
const DbCreator = () => {
    nano.db.create(dbName).then(() => {
        start_Uploading();
    }).catch((err) => {
        console.log('There was an error in creating the Database');
        console.log(err);
    });
}
nano.db.list(function(err, dbs) {
  if (err) {
    console.log('There was a problem finding Databases');
    console.log(err);
  }
  if (dbs.indexOf(dbName) > -1) {
    readline.question(`patient_data database already exists. Should I delete, Y for yes.`, 
    (answer) => {
        if (answer.toUpperCase() === 'Y') {
            console.log('Deleting Database before proceeding');
            nano.db.destroy(dbName).then(() => {
                DbCreator();
            });
        } else {
            readline.close();
        }
    });
    return;
  }
  DbCreator();
  
});
