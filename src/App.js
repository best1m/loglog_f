import React, { Component } from 'react';
import 'scss/app.scss';
import Header from 'Components/Header';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Board from 'pages/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <div>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/board" component={Board}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
