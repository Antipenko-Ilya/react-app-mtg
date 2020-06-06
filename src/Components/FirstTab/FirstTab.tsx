import React, {Component} from 'react';
import classes from './FirstTab.module.css';

import Button from '../Button/Button'
import Modal from '../Modal/Modal';


class FirstTab extends React.Component {
    state = {
        showModal: false
     };
     toggleModal = () => {
       this.setState(() => ({showModal: !this.state.showModal}))
     }
    render() {
      return (
        <div className={classes.FirstTab}>
          <Button onClick={this.toggleModal} title='Click me'/>
          {this.state.showModal && <Modal toggleModal={ this.toggleModal } /> }
        </div>
      )
    }
  }
  
  export default FirstTab;