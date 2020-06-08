import React from 'react';
import { connect } from 'react-redux';
import { RootStore } from '../../Store';
import classes from './FirstTab.module.css';

import Button from '../Button/Button'
import Modal from '../Modal/Modal';


class FirstTab extends React.Component<RootStore> {
    render() {
      return (
        <div className={classes.FirstTab}>
          <Button onClick={this.props.toggleModal} title='Click me'/>
          {this.props.showModal && <Modal toggleModal={ this.props.toggleModal } /> }
        </div>
      )
    }
  }
  
export default connect(
  (state: RootStore) => state,
  dispatch => ({
    toggleModal: () => {
      dispatch({type: 'SHOW_MODAL'})
    }
  })
)(FirstTab);
