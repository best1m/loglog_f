import React, { Component } from 'react';

class SignUpPage extends Component {
  render() {
    return (
      <div>
          <h1>SignUp</h1>
          NAME : <input type="text"/>
          ID : <input type="text"/>
          PASSWORD : <input type="password"/>
          RE-ENTER : <input type="password"/>
          <button>가입</button>
      </div>
    );
  }
}

export default SignUpPage;
