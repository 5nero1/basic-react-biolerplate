import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 公共组件
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

// 页面组件
import Form from './components/form';

import './style.less'

class Filter extends Component {
  render() {
    return (
      <div>
        <Header title="关键字过滤页" />
        <Sidebar />
        <div className="content">
          <Form />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Filter />,
  document.getElementById('app')
);
