import React from 'react';
import './style.less';

const Header = (props) => {
  return (
    <div className="header">{props.title}</div>
  );
}

export default Header;
