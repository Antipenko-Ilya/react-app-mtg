import React, {Component} from 'react';
import { connect } from 'react-redux';
import { RootStore } from '../../Store';
import { loadData } from '../../Redux/Action';
import classes from './SecondTab.module.css';

import Dropdown from '../Dropdown/Dropdown'


class SecondTab extends React.Component<RootStore> {

  render() {
    return (
      <div className={classes.SecondTab}>
        <Dropdown files={['file1', 'file2']} loadData={this.props.loadData}/>
        <Dropdown files={this.props.dropdonw}/>
      </div>
    )
  }
}
  
  
export default connect(
  (state: RootStore) => state,
  (dispatch: any) => ({
    loadData: (name: string) => {
      dispatch(loadData(name));      
    }
  })
)(SecondTab);