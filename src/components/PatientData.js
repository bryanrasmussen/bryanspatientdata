import React from 'react';
import Paginate from './Paginate';
import SearchForm from './SearchForm';
import url from 'url';

class PatientData extends React.Component {

  constructor(props) {
    super(props);

    // using this binding due to the same react code running on both client and server
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(event) {
    event.preventDefault();
    const city = event.target.elements.city.value;
    
    this.props.onSubmit(city);
  }

  render() {
    const searchResults = this.props.providerData.map((item, index)=>{
        return <li key={index} className="searchResult">
        <section>
         <p className="ProviderId">Provider {item['Provider Id']} : {item['Provider Name']}</p>
         <div className="ProviderLocation">
            <h3>Located at</h3>
            <p>{item['Provider Street Address']}, {item['Provider City']} - {item['Provider Zip Code']}, {item['Provider State']}</p>
            <p> Referral Region: {item['Hospital Referral Region Description']}</p>
        </div>
         <p className="discharges">Total Discharges: {item['Total Discharges']}</p>
         <p className="covered">Average Covered Charges: {item['Average Covered Charges']}</p>
         <p className="medicate">Average Medicare Payments: {item['Average Medicare Payments']}</p>
         <p className="totalpayments">Average Total Payments: {item['Average Total Payments']}</p>
        </section>
      </li>
    });
    const qs = (this.props.query) ? this.props.query : url.parse(window.location.href, true).query;
    const paginator = <Paginate query={qs}/>;
    return <React.Fragment>
        
        <header>
        <h1>Patient Data</h1>
        </header>
        <SearchForm serverside={this.props.serverside} />
        <main>
          {searchResults.length > 0 &&
           <React.Fragment>
              {paginator}
              <ol>
                {searchResults}
              </ol>
              {paginator}
            </React.Fragment>
          }
          {searchResults.length === 0 &&
            <p>There were no results returned from the search</p>
          }
        </main>
    </React.Fragment>
  }
}



export default PatientData;
