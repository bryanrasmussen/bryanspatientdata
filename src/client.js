import React from 'react';
import ReactDOM from 'react-dom';
import PatientData from './components/PatientData';
import 'whatwg-fetch'

class Client extends React.Component {
    //Not enough state required here to load redux
    constructor(props) {
        super(props);
        this.state = {
            providerData: null,
            errorMessage: null
        }
        // using this binding due to the same react code running on both client and server
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (!this.state.providerData) {
            const url = (window.location.search) ? '/providers' + window.location.search : '/providers';
            fetch(url)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                  providerData: result
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }
    }

    onSubmit(city) {
        const errorPreamble = 'city ' + city + ' returned ';
        window.fetch('/api?city=' + city)
            .then(response => {
                return response.json()
            }).then(json => {
                if (json.main) {
                  this.setState({weatherData: json, errorMessage: null, city});
                  //it worked to get the data, therefore pushstate if found
                  if (window.history.pushState) {
                      window.history.pushState(this.state.weatherData, 'Meteorology: ' + city, '/?city=' + city);
                  }
                } else {
                  this.setState({errorMessage: errorPreamble + json.message});
                }
            }).catch(err => {
                this.setState({errorMessage: errorPreamble + err});
        });

    }

    render() {
        if (!this.state.providerData) {
            return <div>Still Loading</div>;
        }
        return <PatientData errorMessage={this.state.errorMessage} 
        providerData={this.state.providerData}
        onSubmit={this.onSubmit}/>
    }

}


document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <Client/>,
        document.getElementById('clientSideApp')
      );
 });
