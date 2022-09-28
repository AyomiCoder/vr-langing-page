import React from 'react';
import Logo from '../assets/img/logo.svg';
import Nav from './Nav'

import {HiMenu} from 'react-icons/hi'


const Header = () => {
  return <header className='py-6'>
    <div className='container mx-auto'>
          {/* Logo */}
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
          {/* nav */}
          <Nav />
    </div>
  </header>
};

export default Header;
