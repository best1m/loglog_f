import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="ll-postDetail">
          <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default Post;
