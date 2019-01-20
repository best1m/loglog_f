import React, { Component } from 'react';
import 'scss/app.scss';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from 'components/header';
import HomePage from 'pages/homePage';
import AboutPage from 'pages/aboutPage';
import BoardPage from 'pages/boardPage';
import PostDetailPage from 'pages/postDetailPage';
import SignUpPage from 'pages/signUpPage';
import SignInPage from 'pages/signInPage';
import PostCreatePage from 'pages/postCreatePage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="ll-router-inner">
              <Header/>
              <div className="ll-body">
                <Route exact path="/" component={HomePage}/>
                <Route path="/aboutPage" component={AboutPage}/>
                <Route path="/boardPage" component={BoardPage}/>
                <Route path="/post/:id" component={PostDetailPage}/>
                <Route path="/signupPage" component={SignUpPage}/>
                <Route path="/signinPage" component={SignInPage}/>
                <Route path="/postCreatePage" component={PostCreatePage}/>
              </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
