import React, { Component } from 'react';
import './App.css';
import { Route, withRouter} from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import data from "./data";
import Home from "./components/Home";
// import SubNav from "./components/SubNav";

class App extends Component {
  constructor(){
    super();
    this.state ={
      data : data
    };
  }
  render() {
    return (
      <div className ='App'>
        <Route path = '/' render= {props => <Home {...props} data = {this.state.data} /> } />
      </div>
    );
  }
}   
export default withRouter(App);
