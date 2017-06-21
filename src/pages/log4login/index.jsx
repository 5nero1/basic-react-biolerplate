import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';

class Log4Login extends Component {
  render() {
    return (
      <div>
        <Header title="登录记录页" />
      </div>
    );
  }
}

ReactDOM.render(
  <Log4Login />,
  document.getElementById('app')
);
