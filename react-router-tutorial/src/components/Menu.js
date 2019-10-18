import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

  const activeStyle = {
    color: 'black',
    fontWeight: 600,
    fontSize: '2rem',
    textDecoration: 'none'
  };

  return (
    <div>
      <ul>
        <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
        <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
        <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
        <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
      </ul>
      <hr/>
    </div>
  );
}

export default Menu;