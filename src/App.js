import React, { Component } from 'react';
import 'scss/app.scss';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from 'components/header';
import Home from 'pages/home';
import About from 'pages/about';
import Board from 'pages/board';
import Post from 'pages/post';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
              <Header/>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/board" component={Board}/>
              <Route path="/post/:id" component={Post}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
