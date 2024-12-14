import React, { useState } from "react";
import pic from "/profile-pic.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5"
import { Link } from "react-scroll";import { FaDisplay } from "react-icons/fa6";
;

const Navbar = () => {
  const [menu, setMenu] = useState(false); // Initialize menu as false (closed)

  const navitems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Contact Us" },
    { id: 4, text: "Portfolio" },
    { id: 5, text: "Experience" },
  ];

  return (
    <div  className="space-x-40 w-screen  body flex bg-slate-50 h-18 shadow-md justify-between  mx-auto px-4 md:px-10">
      {/* Left Section */}
      <div className=" gap-2 flex h-18">
        <div>
          <img
            src={pic}
            className="h-12 pt-1 w-12 rounded-full cursor-pointer"
            alt="logo"
          />
        </div>
        <div>
          <h1 className="font-bold cursor-pointer">
            Noma<span className="text-green-500 text-xl">n</span>
            <p className="font-semibold">web developer</p>
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className=" justify-center flex">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center  items-center space-x-8">
          {navitems.map(({ id, text }) => (
            <li
              className="hover:scale-105 duration-200 cursor-pointer"
              key={id}
            ><Link
            to={text}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
          >
            {text}
          </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div 
          onClick={() => setMenu(!menu)} // Toggle menu state on click
          className="md:hidden"
        >
          {menu ? (
            <IoClose size={28} />
          ) : (
            <IoMenu size={28} className="justify-center items-center mt-3 cursor-pointer"/>
          )}
        </div>

{/* Mobile Navigation */}
{menu && (
  <div className="fixed top-0 left-0 w-full h-screen bg-slate-100">
    {/* Close Icon */}
    <div className="absolute top-4 right-4">
      <IoClose
        size={28}
        className="cursor-pointer hover:scale-110 duration-200"
        onClick={() => setMenu(false)} // Close the menu on click
      />
    </div>

    {/* Navigation Items */}
    <ul className="flex flex-col justify-center items-center h-screen">
      {navitems.map(({ id, text }) => (
        <li
          className="duration-200 cursor-pointer hover:scale-105 font-semibold text-lg py-2"
          key={id}
        ><Link
        onClick={() => setMenu(!menu)}
        to={text}
        smooth={true}
        duration={500}
        offset={-70}
        activeClass="active"
      >
        {text}
      </Link>
        </li>
      ))}
    </ul>
  </div>
)}

      </div>
    </div>
  );
};

export default Navbar;
