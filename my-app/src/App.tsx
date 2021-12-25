import React from 'react';
import './App.css';
import Employee from './components/Employee/Employee';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Home/Home';
import CreateEmployee from './components/Employee/CreateEmployee';
import Update from './components/Employee/Update';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div >
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/employee" exact component={Employee} />
            <Route path="/new" exact component={CreateEmployee} />
            <Route path="/update" exact component={Update} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
