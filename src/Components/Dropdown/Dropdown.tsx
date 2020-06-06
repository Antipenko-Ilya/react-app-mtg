import React, {Component} from 'react';
import classes from './Dropdown.module.css';

interface PropsType {
  placeholder: string,
  files: string[]
}
class Dropdown extends React.Component<PropsType> {
    render() {
      return (
        <div className={classes.Dropdown}>
          <div className={classes.DropdownPlaceholder}>
            {this.props.placeholder}
          </div>
          <div className={classes.DropdownContent}>
            {this.props.files.map(el => <li>{el}</li>)}
          </div>
        </div>
      )
    }
  }
  
  export default Dropdown;