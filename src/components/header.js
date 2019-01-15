import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'scss/components/header.scss';
import logo from 'images/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="ll-header">
        <Link to="/" className="ll-items">
          <img className="ll-logo" src={logo}/>
        </Link>
        <div className="ll-menu ll-left">
          <Link to="/" className="ll-items">HOME</Link>
          <Link to="/about" className="ll-items">ABOUT</Link>
          <Link to="/board" className="ll-items">BOARD</Link>
        </div>
        <div className="ll-menu ll-right">
          <Link to="/signup" className="ll-items">SIGN UP</Link>
          <Link to="/signin" className="ll-items">SIGN IN</Link>
        </div>
      </div>
    );
  }
}

export default Header;
