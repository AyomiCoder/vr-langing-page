import React from 'react';
import Users from './Users';
import Image from '../assets/img/banner-img.png'

const style = {
  section: `min-h-[600px] pt-24 pb-12 text-center 
         relative lg:pt-48 lg:pb-0 lg:text-left`,
  container: `container mx-auto`,
  text: `flex flex-col lg:flex-row`,
  heroText: `text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug`,
  altText: `font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0`,
  buttonOne:`flex items-center justify-around space-x-4 max-w-[320px] mx-auto
            mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start`,
  buttonTwo: `border-b-2 border-transparent hover:border-white transition ease-out`

}


const Banner = () => {
  return <section className={style.section}>
            <div className={style.container}>
              <div className={style.text}>
                {/* text */}
              <div>
                <h1 className={style.heroText}>Lets Explore <br />Three dimentional Visually</h1>
                <p className={style.altText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates at ex pariatur quod vero qui ratione fugiat, cupiditate eum dolores.
                </p>
                <div className={style.buttonOne}>
                  <button className='btn'>Get it Now</button>
                  <a href="" className={style.buttonTwo}>Explore Device</a>
                </div>
                <Users />
                </div>
                {/* image */}
                <div>
                  <img src={Image} alt="banner" />
                </div>
              </div>
            </div>
          </section>
};

export default Banner;
