import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from './Home'
import Updates from './Updates'
import Docs from './Docs'
import Downloads from './Downloads'

function App() {
  return (
    <div className='app'>
        <Router>
            <NavBar/>
            <Switch>
                <Route path ='/' exact component={Home}/>
                <Route path ='/updates' component={Updates}/>
                <Route path ='/docs' component={Docs}/>
                <Route path ='/downloads' component={Downloads}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;