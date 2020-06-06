import React, {Component} from 'react';
import classes from './Dropdown.module.css';

interface PropsType {
  placeholder: string,
  files: string[]
}
class Dropdown extends React.Component<PropsType> {
    state = {
      isDropDownShowing:false
    }

    toggleDropDown() {
      if (this.state.isDropDownShowing) {
        this.setState({isDropDownShowing: false})
      } else {
        this.setState({isDropDownShowing: true})
      }
    }

    render() {
      return (
        <div className={classes.Dropdown}>
          <div onClick={()=>this.toggleDropDown()} className={classes.DropdownPlaceholder}>
            {this.props.placeholder}
          </div>
          {this.state.isDropDownShowing ? 
            <div className={classes.DropdownContent}>
              {this.props.files.map(el => <div>{el}</div>)}
            </div> : ''}
        </div>
      )
    }
  }
  
  export default Dropdown;