import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return (
      <Auxiliary>
        <Toolbar clicked={this.sideDrawerToggler}/>
        <SideDrawer 
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxiliary>
    );
  }
}

export default Layout;