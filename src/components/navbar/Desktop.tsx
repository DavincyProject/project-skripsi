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
      {/* <ul>
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
      </ul> */}
    </div>
  );
};

export default Desktop;
