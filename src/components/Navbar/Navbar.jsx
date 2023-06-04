import { useState } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

import { FaUserCircle } from "react-icons/fa";

import * as RoutePath from '../../routes/route'

import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  
  //   const [close , setClose] = useState('')

  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section 
    style = {
      {
        position: 'sticky',
        top: 0,
        zIndex: 90
      }
    } >
      <header className = "header #12141E drop-shadow-lg  shadow-gray-400" >
        <div className="">
          <Link to={RoutePath.DASHBOARD } href=""className = "tracking-[2px] text-[#c11253]" >
         <span className="lg:text-4xl text-2xl ">C</span>ineflex
         
          </Link >
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem ">
              <Link to={ RoutePath.DASHBOARD} href="" className="navLink">
                home
              </Link >
            </li>
            <li className="navItem ">
              <Link to={ RoutePath.NEW} href="" className="navLink">
                New 
              </Link >
            </li>

            <li className="navItem ">
              <Link to={ RoutePath.RECOMMENDED} href="" className="navLink">
                Recommended
              </Link >
            </li>

            <li className="navItem ">
              <Link to={RoutePath.UPCOMING } href="" className="navLink">
                Upcoming
              </Link >
            </li>
            <li className = "navItem a " >
              <Link to={ RoutePath.LOGIN} href="" className="navLink">
                Login
              </Link >
            </li>

            <li className="navItem ">
              <FaUserCircle className="text-white text-xl cursor-pointer hover:text-[#c11119]" />
            </li>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
