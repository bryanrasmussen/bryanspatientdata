import React from 'react';
import url from 'url';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showSearchForm: true
    }

    this.onToggleSearchForm = this.onToggleSearchForm.bind(this);
  }
  
  onToggleSearchForm() {
    setState({showSearchForm: !this.state.showSearchForm});
  }

  render() {
    /*the show/hide search toggle should only show up in small 
    screens, the idea is that the search form takes up a lot of the screen
    and the user should have the ability to collapse it when they are are not 
    searching.*/
    const showSearchText = (this.state.showSearchForm) ? 'Hide Search' : 'Show Search';
    return <div className="searchForm" role="search">
           <form method="GET" action="/">
           {!this.props.serverSide &&
            <p class="SearchToggler" aria-hidden="true"><button type="button" onClick={this.onToggleSearchForm}>{showSearchText}</button></p>
           }
           <fieldset>
            <legend>Search In Patient Data</legend>
            {this.state.showSearchForm &&
              <div className="formWrapper">
                <h3>Total Discharges</h3>
                <div className="doubleField">
                  <p className="inputfield">
                    <label htmlFor="max_discharges">Maximum</label>
                    <input type="text" name="max_discharges" id="max_discharges" />
                  </p>
                  <p className="inputfield">
                    <label htmlFor="min_discharges">Minimum</label>
                  
                    <input type="text" name="min_discharges" id="min_discharges" />
                  </p>
                </div>
                <h3>Average Covered Charges</h3>
                <div className="doubleField">
                  <p className="inputfield">
                    <label htmlFor="max_average_covered_charges">Maximum</label>
                    <input type="text" name="max_average_covered_charges" id="max_average_covered_charges"/> 
                  </p>
                  <p className="inputfield">
                    <label htmlFor="min_average_covered_charges">Minimum</label>
                    <input type="text" name="min_average_covered_charges" id="min_average_covered_charges"/>
                    </p>
                </div>
                <h3>Average Medicare Payment</h3>
                <div className="doubleField">
                  <p className="inputfield">
                    <label htmlFor="max_average_medicare_payments">Maximum </label>
                    <input type="text" name="max_average_medicare_payments" id="max_average_medicare_payments"/>
                  </p>
                  <p className="inputfield">
                  <label htmlFor="min_average_medicare_payments">Minimum</label>
                    <input type="text" name="min_average_medicare_payments" id="min_average_medicare_payments"/>
                  </p>
                </div>
                  <p>
                    <label htmlFor="state">State</label> 
                    <input type="text" name="state" id="state"/>
                  </p>
                  <input className="submit" type="submit" value="Search" />
                </div>
              }
            </fieldset>
           </form>
        </div>
  }
}



export default SearchForm;
