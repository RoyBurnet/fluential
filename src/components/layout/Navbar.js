import React from 'react';

import logo from '../../influencerLogo.svg';
import avatar from '../../avatar.png';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li>
            {' '}
            <Link to="#">Dasboard</Link>
          </li>
          <li>
            {' '}
            <Link to="#">Marketplace</Link>
          </li>
          <li>
            {' '}
            <Link to="#">Campaigns</Link>
          </li>
          <li>
            {' '}
            <Link to="#">Messenger</Link>
          </li>
        </ul>
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
