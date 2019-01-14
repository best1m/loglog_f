import React, { Component } from 'react';
import Post from 'components/post';
import 'scss/pages/home.scss';

class Home extends Component {

  state = {
    posts : [
        { name : 'kim', id : 1},
        { name : 'lee', id: 2},
        { name : 'park', id : 3},
        { name : 'choi' , id : 4},
        { name : 'moon', id : 5},
        { name : 'bang', id : 6},
    ]
}

  render() {
    const {posts} = this.state;
    return (
      <div className="ll-home">
      {posts.map((post, i) => <Post key={i} name={post.name} id={post.id}/>) }
      </div>
    );
  }
}

export default Home;
