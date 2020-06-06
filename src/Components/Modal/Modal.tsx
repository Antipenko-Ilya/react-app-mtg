import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button/Button';

import classes from './Modal.module.css';

interface PropsType {
  toggleModal?: () => void
}

class Modal extends React.Component<PropsType> {
    render() {
      return ReactDOM.createPortal(
        <div className={classes.Modal}>
          <div onClick={this.props.toggleModal} className={classes.ModalCloseBtn}>&#10006;</div>
          <div className={classes.ModalTitle}>Hello there!</div>
          <div className={classes.ModalButtons}>
              <Button onClick={ () => {
                alert('OK');
                if(this.props.toggleModal)
                  this.props.toggleModal();
                }} title='Ок'/>
              <Button onClick={this.props.toggleModal} title='Отмена'/>
          </div>
        </div>,
         document.getElementById('portal') as HTMLElement
      )
    }
  }
  
  export default Modal;