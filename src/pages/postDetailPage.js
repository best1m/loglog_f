import React, { Component } from 'react';
import 'scss/pages/postDetailPage.scss';

class Post extends Component {

  render() {
    return (
    <div className="ll-postDetail-page">
      <h1>{this.props.match.params.id}</h1>
    </div>
    );
  }
}

export default Post;
