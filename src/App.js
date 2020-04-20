import React from 'react';
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LangState from './model/lang/langState'

const App = () => {
  return (
    <LangState>
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/projects' component={Projects}/>
          <Redirect exact from="/" to="/home" />
        </Switch>
        <Footer/>
      </div>
    </Router>
    </LangState>
  );
}

export default App;
