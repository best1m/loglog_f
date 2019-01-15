import React, { Component } from 'react';

class Post extends Component {

  render() {
    return (
    <div className="ll-postDetail-page">
      <div className="ll-contentBox">
        <h1>{this.props.match.params.id}</h1>
      </div>
    </div>
    );
  }
}

export default Post;
