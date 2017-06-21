import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';

class Login extends Component {
  render() {
    return (
      <div>
        <Header title="登录页" />
      </div>
    );
  }
}

ReactDOM.render(
  <Login />,
  document.getElementById('app')
);
