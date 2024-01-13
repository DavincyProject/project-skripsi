"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nilai = [
    {
      id: 1,
      name: "Nilai Murni UTS",
      route: "/",
    },
    {
      id: 2,
      name: "Nilai Murni UAS",
      route: "/",
    },
    {
      id: 3,
      name: "Nilai Ujian Murni",
      route: "/",
    },
    {
      id: 4,
      name: "Nilai Murni HER",
      route: "/",
    },
    {
      id: 5,
      name: "Kartu Hasil Studi",
      route: "/",
    },
    {
      id: 6,
      name: "KHS Semester",
      route: "/",
    },
    {
      id: 7,
      name: "Nilai HER Non OCR Dan Total",
      route: "/",
    },
    {
      id: 8,
      name: "Nilai UAS Non OCR Dan Total",
      route: "/",
    },
  ];

  const pathname = usePathname();

  // const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <>
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

        {/* {isLoggedIn ? ( */}
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
              className="mt-3 z-[1] p-2 shadow menu menu-sm gap-2 dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className={`link no-underline ${
                    pathname === "/surat" ? "active-blue" : ""
                  }`}
                  href="/surat"
                >
                  Pengajuan Surat
                </Link>
              </li>
              <li>
                <details>
                  <summary>Nilai Mahasiswa</summary>
                  <ul>
                    {nilai.map((n: any) => (
                      <li key={n.id} className="my-1">
                        <Link href={n.route}>{n.name}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Data Mahasiswa</summary>
                  <ul>
                    <li className="my-1">
                      <Link href="/">Data Pribadi Mahasiswa</Link>
                    </li>
                    <li className="my-1">
                      <Link href="/">Kartu Rencana Studi</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Info Akademik</summary>
                  <ul>
                    <li className="my-1">
                      <Link href="/">Kalender Akademik</Link>
                    </li>
                    <li className="my-1">
                      <Link href="/">Jadwal Kuliah</Link>
                    </li>
                    <li className="my-1">
                      <Link href="/">Jadwal Mengajar Dosen</Link>
                    </li>
                    <li className="my-1">
                      <Link href="/">Email Program Studi</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <div className="flex gap-1 text-white bg-red-600 hover:bg-red-500 justify-center">
                  <RiLogoutBoxLine />
                  <span>Logout</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* ) : (
          <></>
        )} */}
      </div>
    </>
  );
};

export default Navbar;
