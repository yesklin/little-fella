import React from 'react';
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/projects' component={Projects}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
