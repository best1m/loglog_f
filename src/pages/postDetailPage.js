import React, { Component } from 'react';
import 'scss/pages/postDetailPage.scss';

class Post extends Component {

  render() {
    return (
    <div className="ll-postDetail-page">
      <div className="ll-postDetail-container">
        <img className="ll-imageBox"/>
        <div>title : {this.props.match.params.id}</div>
        <div>contents : </div>
      </div>
    </div>
    );
  }
}

export default Post;
