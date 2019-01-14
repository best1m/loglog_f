import React, { Component } from 'react';
import 'scss/header.scss';

class Header extends Component {
  render() {
    return (
      <div className="ll-header">
        <div className="ll-menu">
          <span>Home</span>
          <span>About</span>
          <span>Board</span>
        </div>
      </div>
    );
  }
}

export default Header;
