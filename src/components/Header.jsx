import React from 'react';
import Logo from '../assets/img/logo.svg';
import Nav from './Nav'

import {HiMenu} from 'react-icons/hi'

const style = {
  menu:`lg:hidden text-3xl text-white cursor-pointer`
}


const Header = ({setNavMobile}) => {
  return <header className='py-6'>
    <div className='container mx-auto'>
    <div className='flex items-center justify-between'>
          {/* Logo */}
          <a href="https:">
            <img className='h-[30px]' src={Logo} alt="logo" />
          </a>
          {/* nav */}
          <Nav />
          <HiMenu onClick={()=> setNavMobile(false)} className={style.menu}/>
    </div>
    </div>
  </header>
};

export default Header;
