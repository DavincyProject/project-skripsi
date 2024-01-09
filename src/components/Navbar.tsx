"use client";

import Image from "next/image";
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
        className={`navbar overflow-x-none sticky z-10 top-0 bg-base-100 transition-all ease-in-out shadow-md ${
          isScrolled && "bg-opacity-30 backdrop-blur-sm bg-white"
        }`}
      >
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2">
            <div>
              <Image alt="logo bsi" src="logo_bsi.svg" width={50} height={50} />
            </div>
            <div className="w-96 text-xs sm:text-sm md:text-md lg:text-base">
              <h1 className="m-0 font-bold ">
                SIAKAD STUDENT
                <br />
                <span className="font-normal ">
                  Universitas Bina Sarana Informatika
                </span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
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
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
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
              <li>
                <div className="flex gap-1 text-white bg-red-500 justify-center">
                  <RiLogoutBoxLine />
                  <span>Logout</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
