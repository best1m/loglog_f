import React, { Component } from 'react';

class Write extends Component {
  render() {
    return (
      <div>
          <h1>Write</h1>
          USERNAME : <input type="text"/>
          TITLE : <input type="text"/>
          CONTENT : <textarea rows="5" cols="20"/>
          IMG_URL : <input type="text"/>
          CREATED :
          <button>Done</button>
      </div>
    );
  }
}

export default Write;
