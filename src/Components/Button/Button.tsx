import React, {Component} from 'react';
import classes from './Button.module.css';

interface PropsType {
    title: string,
    onClick?: () => void
}

class Button extends React.Component<PropsType> {
    render() {
      return (
        <div onClick={this.props.onClick} className={classes.Button}>
          {this.props.title}
        </div>
      )
    }
  }
  
  export default Button;