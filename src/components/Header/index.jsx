"use client";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="fixed flex justify-around items-center max-[600px]:justify-between max-[600px]:h-20 h-16 w-screen p-4 md:px-24 bg-[#FCA311] text-white z-50">
      <h1 className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        <Link to="/">WINEGUIDE</Link>
      </h1>
      <ul className="hidden md:flex md:gap-12 uppercase p-2">
        <li className="h-full cursor-pointer relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
          <Link to="/">home</Link>
        </li>
        <li className="h-full cursor-pointer relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
          <Link to="/about">About</Link>
        </li>
        <li className="h-full cursor-pointer relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div onClick={handleExpansion} className="md:hidden">
        {expanded ? <IoClose size={30} /> : <IoMenu size={30} />}
      </div>

      <div
        ref={sidebarRef}
        className={
          expanded
            ? "fixed left-0 top-0 w-[60vw] h-full bg-[#FCA311] border-r border-r-gray-100 ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center justify-center p-4">
          <h1 className="text-3xl font-bold text-white">WINEGUIDE</h1>
        </div>

        <ul className="pt-16 uppercase p-4">
          <li className="p-4 border-b border-b-gray-200">
            <Link
              to="/"
              onClick={() => {
                setExpanded(false);
              }}
            >
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-b-gray-200">
            <Link
              to="/about"
              onClick={() => {
                setExpanded(false);
              }}
            >
              About
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/contact"
              onClick={() => {
                setExpanded(false);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
