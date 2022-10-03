import React from 'react';
import { IoCloseCircle } from 'react-icons/io5'

const style={
  close:`text-3xl absolute left-4 top-6 cursor-pointer`,
  nav:`flex items-center justify-center space-x-12 font-secondary flex-col`,
}


const NavMobile = () => {
  return <nav className='lg:hidden bg-[#251f3f] w-full h-full'>
          <IoCloseCircle className={style.close} />
          <ul className={style.nav}>
          <li className='nav-link'><a href="https://google.com">Home</a></li>
          <li className='nav-link'><a href="https://google.com">Company</a></li>
          <li className='nav-link'><a href="https://google.com">Features</a></li>
          <li className='btn'><a href="https://google.com">Register</a></li>
        </ul>
  </nav>
};

export default NavMobile;
