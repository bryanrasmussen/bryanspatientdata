'use strict'
require('babel-register')({
    presets: ['es2015', 'react']
});
import express from 'express';
import querystring from 'querystring';
import { renderToString } from 'react-dom/server';
import App from './server/App';
import FrontendRender from './server/FrontendRender';
import Analyzer from './server/Analyzer';
import BackendRender from './server/BackendRender';
import fs from 'fs';
import * as Nano from "nano";

const environment = process.env.NODE_ENV || 'development';

const port = (environment === 'development') ? 3000 : 80;
const server = express();

const loadProviders = (req, cb) => {
  const nano = Nano('http://localhost:5984');
  const db = nano.use('patient_data'); 
  const selectors = {
    max_discharges: {
      field: 'Total Discharges',
      query: {
        "$lte": null,
      }
    },
    min_discharges: {
      field: 'Total Discharges',
      query: {
        "$gte": null,
      }
    }, 
    max_average_covered_charges: {
      field: 'coveredCharges',
      query: {
        "$lte": null,
      }
    },
    min_average_covered_charges: {
      field: 'coveredCharges',
      query: {
        "$gte": null,
      }
    }, 
    max_average_medicare_payments: {
      field: 'medicare',
      query: {
        "$lte": null,
      }
    }, 
    min_average_medicare_payments: {
      field: 'medicare',
      query: {
        "$gte": null,
      }
    }, 
    state: {
      field: 'Provider State',
      query: {
        "$eq": null,
      }
    }

  }
  
  const q = {
      selector: {},
      fields: [ "DRG Definition",
      "Provider Id","Provider Name",
      "Provider Street Address",
      "Provider City",
      "Provider State",
      "Provider Zip Code",
      "Hospital Referral Region Description",
      "Total Discharges",
      "Average Covered Charges",
      "Average Total Payments",
      "Average Medicare Payments"],
      limit: 51
    };
    const fields = Object.keys(req.query);
    const selector = {};
    for (const field of fields) {
      const fieldValue = req.query[field];
      const selectorTemplate = selectors[field];
      if (!selectorTemplate || !fieldValue) {
        continue;
      }
      const query = Object.entries(selectorTemplate.query);
      const currentSelector = selector[selectorTemplate.field] || {};
      for (const item of query) {
        const param = item[0];
        currentSelector[param] = (param === '$eq') ?  fieldValue : Number(fieldValue);
      }
      selector[selectorTemplate.field] = currentSelector;
        
    }
    q.selector = selector;
    /* there is a potential naming confusion here
    I use the nopagination parameter to tell the api to just provide 
    a straight ahead array. But the page parameter can still be used to 
    paginate through results, this is up to the individual api solution to do

    */
    if (req.query.page) {
      q.skip = Number(req.query.page) * 50;
    }
    db.find(q).then((response) => {
      cb(response.docs, q);
    });
}

server.get('/script/*', (req, res) => {
  const requestedScript = req.url.substring('/script/'.length);
  const unallowedScripts = ['server.js']
  if (unallowedScripts.indexOf(requestedScript) === -1) {
    res.type('.js');
    fs.readFile('./dist/' + requestedScript,
      {encoding: 'utf-8'},
      (err, data) => {
        if (!err)
        {
          res.send(data);
        } else {
          res.send('throw "Could not load requested script";');
        }
      }
    );
  }
});

server.get('/providers', (req, res) => {
  loadProviders(req, (result) => {
    res.type('json');
    res.send(result);
  });
});

server.get('/analyzeQuery', (req, res) => {
  loadProviders(req, (result, query) => {
    const message = {query, result};
   
    res.send(
      Analyzer(
        {title, message}
      )
    );
  });
});

server.get('/', (req, res) => {
  const q = querystring.stringify(req.query);
  res.send(
    FrontendRender(
      {q}
    )
  );
  
});

server.get('/serverside', (req, res) => {
  loadProviders(req, (result) => {
    const body = renderToString(App(true, result, req.query));
    res.send(
      BackendRender(
        {body
      }
      )
    );
  });
  
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
