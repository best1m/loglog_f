import React, { Component } from 'react';
import '../scss/body.scss'
import CardGroup from './CardGroup';

class Body extends Component {
  render() {
    return (
      <div className="ll-body">
        <CardGroup/>
      </div>
    );
  }
}

export default Body;
