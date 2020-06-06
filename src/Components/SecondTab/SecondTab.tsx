import React, {Component} from 'react';
import classes from './SecondTab.module.css';

import Dropdown from '../Dropdown/Dropdown'


class SecondTab extends React.Component {
    render() {
      return (
        <div className={classes.SecondTab}>
          <Dropdown placeholder='file1' files={['file1', 'file2']}/>
          <Dropdown placeholder='file1' files={['file1', 'file2']}/>
        </div>
      )
    }
  }
  
  export default SecondTab;