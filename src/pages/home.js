import React, { Component } from 'react';
import PostContainer from 'components/postContainer';
import 'scss/pages/home.scss';

class Home extends Component {
  render() {
    return (
      <div className="ll-home">
          <h1>HOME</h1>
          <PostContainer/>
          
      </div>
    );
  }
}

export default Home;
