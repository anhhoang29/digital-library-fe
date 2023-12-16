import { React, useEffect, useRef, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import UserRoutes from '../routers/UserRouters';
import SidebarComponent from '../siderbar/siderbar';
import Menu from '../menu/menu';


const UserHome = () => {

  return (
    <div className='flex'>
      <div className='mt-20 w-[306px] h-[994px] relative bg-white rounded-tl-[10px] rounded-bl-[10px]'>
        <SidebarComponent />
      </div>
      <div className="w-full">
        <Menu />
      </div>
    </div>
  );

};

export default UserHome;
