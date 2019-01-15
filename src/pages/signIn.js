import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    return (
      <div>
          <h1>SignIn</h1>
          ID : <input type="text"/>
          PASSWORD : <input type="text"/>
          <button>로그인</button>
      </div>
    );
  }
}

export default SignIn;
