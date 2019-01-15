import React, { Component } from 'react';
import 'scss/app.scss';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from 'components/header';
import HomePage from 'pages/homePage';
import AboutPage from 'pages/aboutPage';
import BoardPage from 'pages/boardPage';
import PostDetailPage from 'pages/postDetailPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="app-inner">
              <Header/>
              <Route exact path="/" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/board" component={BoardPage}/>
              <Route path="/post/:id" component={PostDetailPage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
