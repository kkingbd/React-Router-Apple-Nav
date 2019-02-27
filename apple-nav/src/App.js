import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, withRouter, Switch} from "react-router-dom";
import { TransitionGroup,CSSTransition } from "react-transition-group";
import data from "./data";
import Nav from "./components/Nav";
import SubNav from "./components/SubNav";

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
        <Route path = '/' render= {props => <Nav {...props} data = {this.state.data} /> } />
          <Fragment>  
            <TransitionGroup style={{opacity: .95}}>
              <CSSTransition
                  key={this.props.location.pathname}
                  timeout={600}
                  classNames="fade"
                >
                    <Switch location={this.props.location}>
                        <Route path="/:name" render={props => <SubNav {...props} data={this.state.data} />}
                        />
                    </Switch>
              </CSSTransition>
            </TransitionGroup>
        </Fragment>
      </div>
    );
  }
}   
export default withRouter(App);
