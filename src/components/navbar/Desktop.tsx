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
              <ul>
                {nilai.map((n: any) => (
                  <li key={n.id} className="my-1">
                    <Link
                      className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                        pathname === `${n.route}` ? "active-blue" : ""
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
                      pathname === `/mahasiswa/data_pribadi`
                        ? "active-blue"
                        : ""
                    }`}
                    href="/mahasiswa/data_pribadi"
                  >
                    Data Pribadi Mahasiswa
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                      pathname === `/mahasiswa/krs` ? "active-blue" : ""
                    }`}
                    href="/mahasiswa/krs"
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
                      pathname === `/info/kalender` ? "active-blue" : ""
                    }`}
                    href="/info/kalender"
                  >
                    Kalender Akademik
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                      pathname === `/info/jadwal` ? "active-blue" : ""
                    }`}
                    href="/info/jadwal"
                  >
                    Jadwal Kuliah
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                      pathname === `/info/jadwal_dosen` ? "active-blue" : ""
                    }`}
                    href="/info/jadwal_dosen"
                  >
                    Jadwal Mengajar Dosen
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className={`link hover:bg-[#0f52ba] hover:text-white no-underline ${
                      pathname === `/info/emil_prodi` ? "active-blue" : ""
                    }`}
                    href="/info/email_prodi"
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
