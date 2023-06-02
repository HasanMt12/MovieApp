import { useState } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

import { FaUserCircle } from "react-icons/fa";

import "./navbar.css";
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
    <section className="lg:mt-4 mt-1">
      <header className = "header #12141E drop-shadow-lg shadow-gray-400" >
        <div className="">
          <a href=""className = "tracking-[2px] text-[#c11253]" >
         <span className="lg:text-4xl text-2xl ">C</span>ineflex
         
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem ">
              <a href="" className="navLink">
                home
              </a>
            </li>
            <li className="navItem ">
              <a href="" className="navLink">
                New 
              </a>
            </li>

            <li className="navItem ">
              <a href="" className="navLink">
                Recommended
              </a>
            </li>

            <li className="navItem ">
              <a href="" className="navLink">
                Upcoming
              </a>
            </li>
            <li className = "navItem a " >
              <a href="" className="navLink">
                Login
              </a>
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
