import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';


class Navbar extends React.Component {
    render() {
      return (
        <div className={classes.Navbar}>
          <Link to='/first-tab' className={classes.NavbarText}>First Tab</Link>
          <Link to='/second-tab' className={classes.NavbarText}>Second Tab</Link>
        </div>
      )
    }
  }
  
export default Navbar;