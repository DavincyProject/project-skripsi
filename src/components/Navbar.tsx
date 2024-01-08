"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`navbar sticky z-10 top-0 bg-base-100 transition-all ease-in-out shadow-md ${
          isScrolled && "bg-opacity-30 backdrop-blur-sm bg-white"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" className="text-xl font-bold">
            Testing Navbar
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-sm md:btn-md bg-red-600 hover:bg-red-500">
            <div className="flex gap-1 text-white">
              <RiLogoutBoxLine />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
