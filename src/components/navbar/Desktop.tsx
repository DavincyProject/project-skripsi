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
    <div className="container">
      <div className="flex-none flex-nowrap">
        <ul className="menu menu-horizontal px-1 text-sm gap-1">
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
              <ul className="p-2 bg-base-100 rounded-t-none">
                {nilai.map((n: any) => (
                  <li key={n.id} className="my-1">
                    <Link
                      className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                        pathname === `${n.name}` ? "active-blue" : ""
                      }`}
                      href={n.route}
                    >
                      {n.name}
                    </Link>
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
                  <Link
                    className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                      pathname === `/` ? "active-blue" : ""
                    }`}
                    href="/"
                  >
                    Data Pribadi Mahasiswa
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                      pathname === `/` ? "active-blue" : ""
                    }`}
                    href="/"
                  >
                    Kartu Rencana Studi
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Info Akademik</summary>
              <ul>
                <li className="my-1">
                  <Link
                    className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                      pathname === `/` ? "active-blue" : ""
                    }`}
                    href="/"
                  >
                    Kalender Akademik
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                      pathname === `/` ? "active-blue" : ""
                    }`}
                    href="/"
                  >
                    Jadwal Kuliah
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                      pathname === `/` ? "active-blue" : ""
                    }`}
                    href="/"
                  >
                    Jadwal Mengajar Dosen
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                      pathname === `/` ? "active-blue" : ""
                    }`}
                    href="/"
                  >
                    Email Program Studi
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                pathname === "/verifikasi" ? "active-blue" : ""
              }`}
              href="/verifikasi"
            >
              Verifikasi Data Pribadi
            </Link>
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
