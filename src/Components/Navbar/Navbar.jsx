import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { CiLogin , CiShoppingCart  } from "react-icons/ci";
import { useAuth } from '../../Context/AuthContext';


export const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { token , user } = useAuth();



  return (
    <div className="navbar flex justify-between items-center bg-white shadow px-20 py-4">
      <div className="nav-logo flex items-center gap-2">
        <Link to="/">
          <img src={logo} alt="Techomix Logo" className="w-12" />
        </Link>
        <Link to="/" className="text-lg font-semibold text-gray-700">
          Techomix
        </Link>
      </div>
      <ul className="nav-menu flex gap-6 text-gray-700">
        <NavItem title="صفحه اصلی" path="/" menu={menu} setMenu={setMenu} />
      </ul>
      <div className="nav-login-cart flex items-center gap-4">
      
        {token ? (
        <Link to="/profile">
        <button className="flex nav-button items-center border-2 p-2 rounded-md text-cyan-50 bg-cyan-900 font-normal hover:bg-white hover:text-black transition-all">
          پروفایل
          </button>
        </Link>
        ) : (
          <Link to="/login">
            <button className="flex nav-button items-center border-2 p-2 rounded-md text-cyan-50 bg-cyan-900 font-normal hover:bg-white hover:text-black transition-all">
              <CiLogin  className='text-lg ml-1'/>
              ورود|ثبت نام
            </button>
          </Link>
        )}
       
      </div>
    </div>
  );
};

const NavItem = ({ title, path, menu, setMenu }) => {
  const isActive = menu === title.toLowerCase().replace(/\s/g, '');
  
  return (
    <li onClick={() => setMenu(title.toLowerCase().replace(/\s/g, ''))} className="cursor-pointer">
      <Link to={path} className={`relative ${isActive ? 'font-semibold' : ''}`}>
        {title}
        {isActive && <hr className="nav-menu-hr absolute top-8 left-0 w-full h-1 rounded bg-orange-700" />}
      </Link>
    </li>
  );
};
