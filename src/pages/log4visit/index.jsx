import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';

class Log4Visit extends Component {
  render() {
    return (
      <div>
        <Header title="访问记录页" />
      </div>
    );
  }
}

ReactDOM.render(
  <Log4Visit />,
  document.getElementById('app')
);
