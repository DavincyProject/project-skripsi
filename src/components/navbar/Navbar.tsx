"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") || "";
    setIsLoggedIn(!!loggedIn);
  }, [isLoggedIn]);

  const pathsToHideNavbar = ["/login", "/aktivasi", "/cek"];
  const shouldHideNavbar = pathsToHideNavbar.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    !shouldHideNavbar && (
      <div
        className={`navbar justify-between overflow-x-none sticky z-10 top-0 bg-base-100 transition-all ease-in-out shadow-md ${
          isScrolled && "bg-opacity-30 backdrop-blur-md bg-white"
        }`}
      >
        <div className="navbar-start w-fit min-w-72">
          <Link href="/" className="flex items-center gap-2">
            <div>
              <Image alt="logo bsi" src="logo_bsi.svg" width={45} height={45} />
            </div>
            <div className="text-xs sm:text-sm md:text-md lg:text-base">
              <h1 className="m-0 font-bold">
                SIAKAD STUDENT
                <br />
                <span className="font-normal text-xs sm:text-sm md:text-md lg:text-base">
                  Universitas Bina Sarana Informatika
                </span>
              </h1>
            </div>
          </Link>
        </div>

        {/* Mobile navbar start here */}
        <div className="block lg:hidden">
          <Mobile />
        </div>

        {/* desktop navbar */}
        <div className="hidden lg:block">
          <Desktop />
        </div>
      </div>
    )
  );
};

export default Navbar;
