import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'scss/components/header.scss';

class Header extends Component {
  render() {
    return (
      <div className="ll-header">
        <div className="ll-menu">
          <Link to="/" className="ll-items">HOME</Link>
          <Link to="/about" className="ll-items">ABOUT</Link>
          <Link to="/board" className="ll-items">BOARD</Link>
        </div>
      </div>
    );
  }
}

export default Header;
