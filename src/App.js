import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Credits from './components/pages/Credits';

import SideBar from './components/sections/SideBar';

import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
              <div className="App" id="App">
                  <Route exact path="/" render={props => (
                      <React.Fragment>
                          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
                          <div id="page-wrap">
                              <CSSTransitionGroup
                                  transitionName="initial"
                                  transitionAppear={true}
                                  transitionAppearTimeout={500}
                                  transitionEnter={false}
                                  transitionLeave={false}
                              >
                                  <Home/>
                                  <About/>
                                  <Skills/>
                                  <Experience/>
                                  <Projects/>
                                  <Contact/>
                              </CSSTransitionGroup>
                          </div>
                      </React.Fragment>
                  )}/>
                  <Route path="/credits" component={Credits}/>
              </div>
            </Router>
        );
    }
}

export default App;
