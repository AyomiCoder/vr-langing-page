import React from 'react';
import Avatar1 from '../assets/img/avt1.png'
import Avatar2 from '../assets/img/avt2.png'
import Avatar3 from '../assets/img/avt3.png'
import Avatar4 from '../assets/img/avt4.png'

import { BsFillCircleFill } from 'react-icons/bs'

const style ={
  avatars: `w-12 h-12 rounded-full`,
  avatCont: `flex -space-x-2`,
  container: `flex flex-col justify-center 
              items-center space-x-5 space-y-2
              lg:flex-grow lg:space-y-0 lg:justify-start`,
  circle: `text-xs text-green-500 animate-pulse`
}


const Users = () => {
  return <div className={style.container}>
          <div className={style.avatCont}>
            <div className={style.avatars}>
              <img src={Avatar1} alt="avatar" />
            </div>
            <div className={style.avatars}>
              <img src={Avatar2} alt="avatar" />
            </div>
            <div className={style.avatars}>
              <img src={Avatar3} alt="avatar" />
            </div>
            <div className={style.avatars}>
              <img src={Avatar4} alt="avatar" />
            </div>
            <div>
              <BsFillCircleFill className={style.circle}/>
            </div>
          </div>
  </div>
};

export default Users;
