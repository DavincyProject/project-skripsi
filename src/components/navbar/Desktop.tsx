"use client";

import Link from "next/link";
import nilai from "../../utils/nilai.json";
import { usePathname, useRouter } from "next/navigation";
import { RiLogoutBoxLine } from "react-icons/ri";

const Desktop = () => {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <div className="navbar-end ">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
          className="mt-3 z-[1] p-2 shadow menu menu-sm  gap-2 dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <Link
              className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
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
            <button
              onClick={logout}
              className="flex gap-1 text-white bg-red-600 hover:bg-red-500 justify-center"
            >
              <RiLogoutBoxLine />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Desktop;
