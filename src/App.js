import React from 'react';
import Header from './components/Header'
import HomeBody from './components/HomeBody'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <HomeBody/>
      </div>
    </Router>
  );
}

export default App;
