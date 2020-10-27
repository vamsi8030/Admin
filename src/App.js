import React from 'react';
import Dashboard from './components/pages/Dashboard';
import Employer from './components/pages/Employer';
import Register from './components/pages/Register';
import TopQualified from './components/pages/TopQualified';
import JobListing from './components/pages/JobListing';
import Jobseeker from './components/pages/Jobseeker';
import Profile from './components/pages/Profile';
import FrontendQualifiedTable from './components/pages/FrontendQualifiedTable';
import BackendQualifiedTable from './components/pages/BackendQualifiedTable';
import EmbeddedQualifiedTable from './components/pages/EmbeddedQualifiedTable';
import DataScienceQualifiedTable from './components/pages/DataScienceQualifiedTable';
import EmployeeDetails from './components/pages/EmployeeDetails';
import RegisterEmployee from './components/pages/RegisterEmployee';
import UpdateEmployee from './components/pages/UpdateEmployee';
import JobData from './components/pages/Jobdata';
import JobRegister from './components/pages/JobRegister';
import Edit from './components/pages/Edit';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="Acontainer">
        <Dashboard />
        <Switch className="bg-dark">
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Employer" component={Employer} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/RegisterEmployee" component={RegisterEmployee} />
          <Route exact path="/EmployeeDetails" component={EmployeeDetails} />
          <Route exact path="/UpdateEmployee/:id" component={UpdateEmployee} />
          <Route exact path="/Edit/:id" component={Edit} />
          <Route exact path="/FrontendQualifiedTable" component={FrontendQualifiedTable} />
          <Route exact path="/BackendQualifiedTable" component={BackendQualifiedTable} />
          <Route exact path="/EmbeddedQualifiedTable" component={EmbeddedQualifiedTable} />
          <Route exact path="/DataScienceQualifiedTable" component={DataScienceQualifiedTable} />
          <Route exact path="/TopQualified" component={TopQualified} />
          <Route exact path="/jobdata" component={JobData} />
          <Route exact path="/JobRegister" component={JobRegister} />
          <Route exact path="/JobListing" component={JobListing} />
          <Route exact path="/Jobseeker" component={Jobseeker} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
