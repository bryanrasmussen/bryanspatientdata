import React from 'react';
import PatientData from '../components/PatientData';


const App = (serverSide, providerData, query) => {

return <PatientData serverSide={serverSide} providerData={providerData} query={query}/>};

export default App;
