import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
      <div className='headerTitle'>
        <a href='#'>Be Extra Membership Info</a>
        <h3>{props.headerTitle}</h3>
        <div className='signInBtn'>
          <img src="../public/search.svg"/>
          <a href='#'>Sign in</a>
          <button> Get Started </button>
        </div>
      </div>
    </div>
  )
}

export default Header;
