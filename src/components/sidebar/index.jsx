import React from 'react';
import Menu from 'antd/lib/menu';
import './style.less';

const Item = Menu.Item;

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <Menu mode="inline" style={{ width: '100%', height: '100%' }}>
        <Item>
          <a href="./filter.html">关键字过滤</a>
        </Item>
        <Item>
          <a href="./log4login.html">登录日志</a>
        </Item>
        <Item>
          <a href="./log4visit.html">访问日志</a>
        </Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
