/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen]=useState(false);
  
  return ( 
    <> <div className="navbar bg-black">
    <div className="navbar-start">
      <div className="dropdown ">
        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
          <span
            className="h-5 w-5 text-white text-2xl"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
            <i class="bi bi-list"></i>
          </span>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Bolg</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="navbar-center hidden lg:flex" id="menu-box">
      <ul className="menu menu-horizontal px-1 text-white" id="menu-list">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end"></div>
    <div  className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
        <span
          className="h-5 w-5 text-white text-2xl"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
          
        <i onClick={()=>setOpen(!open)} className="bi bi-justify-right text-white text-2xl"></i>
      
          
        </span>
      </label>
       
    </div>
  </div>
  <div className="flex">
      <div
        
        className={`hidden lg:block h-[500px] bg-slate-400 font-bold ${open ? "block": "hidden" } `}
      >
        
        {/* <i className="bi bi-x"></i> */}
       
        <h1 className="mr-28 mt-4">Sidebar</h1>
        <div className="p-2">
          <select className="w-full">
            <option className="w-24" value="Item 1">
              Item 1
            </option>
            <option value="Item 2">Item A</option>
            <option value="Item-3">Item B</option>
          </select>
          <select className="w-full">
            <option className="w-24" value="Item 1">
              Item 2
            </option>
            <option value="Item 2">Item A</option>
            <option value="Item-3">Item B</option>
          </select>
          <select className="w-full">
            <option className="w-24" value="Item 1">
              Item 3
            </option>
            <option value="Item 2">Item A</option>
            <option value="Item-3">Item B</option>
          </select>
        </div>
      </div>
      <div>
        <header>
          <h1 className="text-3xl font-bold text-center">Main Content</h1>
          <div className="mt-4 leading-8 text-justify text-xl p-10">
            <p>
              My country’s name is Bangladesh. Bangladesh is a very small
              country huge population. It is a medium-developed country in South
              Asia. We have a very good and progressing economy. It has an area
              of 147,570 square kilometers. But it has a population of 164
              million. That is huge than the area.
            </p>
            <p className="mt-4">
              But it is still a very beautiful and peaceful country. People of
              Bangladesh are so friendly with each other. This country has a
              glorious history of independence. We got independence from
              Pakistan in 1971 after nine mothers’ blood-shedding war. More than
              3 million Bangladeshi sacrificed their life in that genocide.
            </p>
            <p className="mt-4">
              But still, we were able to get our independence. After
              independence, the newly born country faced lots of hard times and
              struggles. But it rises very well. Now Bangladesh is one of the
              best countries to live in South Asia. There are so many beautiful
              spots to see in this country.
            </p>
          </div>
        </header>
      </div>
    </div>
  </>
   
  );
};

export default Navbar;
