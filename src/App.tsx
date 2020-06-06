import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';


import Navbar from './Components/Navbar/Navbar';
import FirstTab from './Components/FirstTab/FirstTab';
import SecondTab from './Components/SecondTab/SecondTab';
import Modal from './Components/Modal/Modal';


import classes from './App.module.css';
class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        <Switch>
          <Route  path='/' exact  render={() => <FirstTab/>} />
          <Route  path='/first-tab' exact  render={() => <FirstTab/> } />
          <Route  path='/second-tab' exact  render={() => <SecondTab /> } />
        </Switch>
      </div>
    )
  }
}

export default App;
