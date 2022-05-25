import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='ui four item menu'>
      <NavLink to='/accordion' className='item'>
        Accordion
      </NavLink>
      <NavLink to='/search' className='item'>
        Search Wikipedia
      </NavLink>
      <NavLink to='/dropdown' className='item'>
        Dropdown
      </NavLink>
      <NavLink to='/translate' className='item'>
        Google Translate
      </NavLink>
    </div>
  );
};

export default Menu;
