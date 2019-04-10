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
    this.setState({showSearchForm: !this.state.showSearchForm});
  }

  render() {
    /*the show/hide search toggle should only show up in small 
    screens, the idea is that the search form takes up a lot of the screen
    and the user should have the ability to collapse it when they are are not 
    searching.
    the use of target is in the case of serverside rendering
    */
    const showSearchText = (this.state.showSearchForm) ? 'Hide Search' : 'Show Search';
    return <div className="searchForm" role="search">
           <form method="GET" action="/" target="_parent">
           {!this.props.serverSide &&
            <p className="SearchToggler" aria-hidden="true"><button type="button" onClick={this.onToggleSearchForm}>{showSearchText}</button></p>
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
                    <select name="state" id="state">
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
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
