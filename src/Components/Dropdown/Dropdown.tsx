import React from 'react';
import classes from './Dropdown.module.css';

interface PropsType {
  files: string[],
  loadData?: (name: string) => void,
}
class Dropdown extends React.Component<PropsType> {
    state = {
      placeholder: 0,
      isDropDownShowing: false
    }

    changePlaceholder(num: number){
      this.setState({placeholder: num})
    }
    toggleDropDown(el: HTMLDivElement) {
      this.setState({isDropDownShowing: !this.state.isDropDownShowing});
    }
    render() {      
      return (
        <div onClick={(e)=>this.toggleDropDown(e.currentTarget)}  className={classes.Dropdown}>
          <div className={classes.DropdownPlaceholder}>
            {this.props.files[this.state.placeholder]}
          </div>
          {this.state.isDropDownShowing ? 
            <div className={classes.DropdownContent}>
              {this.props.files.map((elem, index) => <div id={index.toString()} onClick={(e) => {
                this.props.loadData && this.props.loadData(e.currentTarget.innerText);
                this.changePlaceholder(+e.currentTarget.id);
                this.toggleDropDown(e.currentTarget);
              }}>{elem}</div>)}
            </div> : ''}
        </div>
      )
    }
  }

export default Dropdown;
  