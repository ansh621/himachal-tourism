import React from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NavigationBar = () => {

  


  return (
    <div className='absolute w-full flex justify-between  z-30'>
      <div className='logo ml-2 h-14 w-14 text-white hover:scale-110 ease-in duration-300'>
        <img src="http://hptdc.in/wp-content/uploads/2016/11/himachal-logo-2.png" />
      </div>
      <div className='text-md text-red-500'> Most of Backend Not working Due to some reasons  </div>
      <div className='tracking-tight  navtxt p-2 h-10 w-6/12 flex justify-between text-xl animate-slowFadeIn2'>
        <NavLink
          className={({ isActive }) =>
            `mx-2  text-[#252525] ${isActive ? 'text-teal-50 underline' : 'hover:text-white hover:scale-110 ease-in duration-200 hover:underline'}`}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `mx-2  text-[#252525] ${isActive ? 'text-teal-50 underline' : 'hover:text-white hover:scale-110 ease-in duration-200 hover:underline'}`}
          to='/Destination'
        >
          Destination
        </NavLink>
        
        
        <NavLink
          className={({ isActive }) =>
            `mx-2  text-[#252525] ${isActive ? 'text-teal-50 underline' : 'hover:text-white hover:scale-110 ease-in duration-200 hover:underline'}`}
          to='/Accomodation'
        >
          Accomodation
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            `mx-2  text-[#252525] ${isActive ? 'text-teal-50 underline' : 'hover:text-white hover:scale-110 ease-in duration-200 hover:underline'}`}
          to='/AI'
        >
          AI Advisor
        </NavLink>
        
        <NavLink
          className={({ isActive }) =>
            `mx-2  trac text-[#252525] ${isActive ? 'text-teal-50 underline': 'hover:text-white hover:scale-110 ease-in duration-200 hover:underline ' }`}
          to='/HowToReach'
        >
          How to reach
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `mx-2  text-[#252525] ${isActive ? 'text-teal-50 underline' : 'hover:text-white hover:scale-110 ease-in duration-200 hover:underline'}`}
          to='/NaiManzilNayiRahen'
        >
          Nai Raahen Nai Manzil
        </NavLink>
        

        
      </div>
    </div>
  );
};

export default NavigationBar;
