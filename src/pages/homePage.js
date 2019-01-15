import React, { Component } from 'react';
import Post from 'components/post';
import 'scss/pages/homePage.scss';

class Home extends Component {

  state = {
    posts : [
        { name : 'kim', id : 1, src : 'https://i.amz.mshcdn.com/f_vczmYwzd2g-Nz0NDe0bQv36Og=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F761538%2Fc891361b-d7c1-4434-b5f7-4d4033adb919.jpg'},
        { name : 'lee', id: 2, src : ''},
        { name : 'park', id : 3, src : ''},
        { name : 'choi' , id : 4, src : ''},
        { name : 'moon', id : 5, src : ''},
        { name : 'bang', id : 6, src : ''},
    ]
}

  render() {
    const {posts} = this.state;
    return (
      <div className="ll-home">
      {posts.map((post, i) => <Post key={i} name={post.name} id={post.id} src={post.src}/>)}
      </div>
    );
  }
}

export default Home;
