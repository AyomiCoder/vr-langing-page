import React from 'react';


const style ={
  nav:`flex items-center space-x-12 font-secondary`,
}


const Nav = () => {
  return <nav className='hidden lg:flex'>
        <ul className={style.nav}>
          <li className='nav-link'><a href="https://google.com">Home</a></li>
          <li className='nav-link'><a href="https://google.com">Company</a></li>
          <li className='nav-link'><a href="https://google.com">Features</a></li>
          <li className='btn'><a href="https://google.com">Register</a></li>
        </ul>
  </nav>
};

export default Nav;
