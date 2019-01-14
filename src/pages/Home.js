import React, { Component } from 'react';
import CardContainer from 'components/cardContainer';
import 'scss/pages/home.scss';

class Home extends Component {
  render() {
    return (
      <div className="ll-home">
          <h1>HOME</h1>
          <CardContainer/>
          
      </div>
    );
  }
}

export default Home;
