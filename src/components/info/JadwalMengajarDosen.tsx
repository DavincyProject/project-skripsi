import Image from "next/image";
import jadwalMengajar from "../../utils/jadwalmengajardosen.json";
import Link from "next/link";

const JadwalMengajarDosen = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src={"/jadwal/date.svg"}
          alt="date icon"
          width={25}
          height={25}
        />
        <span className="font-bold">Jadwal Mengajar Dosen</span>
      </div>
      <div className="flex items-center justify-end">
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
              </svg>
            </span>
          </div>
          <input
            type="text"
            name="Search Dosen"
            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Cari Nama Dosen..."
          />
        </div>
      </div>

      <div className="md:ml-8 mt-2">
        <div className="overflow-x-auto max-h-[80dvh] custom-scrollbar">
          <table className="table">
            {/* head */}
            <thead className="bg-[#F3F4F6] sticky top-0">
              <tr>
                <th>No.</th>
                <th>Kode Dosen</th>
                <th>Nama Dosen</th>
                <th>Jadwal Mengajar</th>
              </tr>
            </thead>
            <tbody>
              {jadwalMengajar.map((jadwal) => (
                <tr key={jadwal.id} className="hover">
                  <th>{jadwal.id}</th>
                  <td>{jadwal.kodeDosen}</td>
                  <td>{jadwal.dosen}</td>
                  <td>
                    <Link
                      href={`/info/jadwal_dosen/${jadwal.id}`}
                      className="text-blue-500 font-bold"
                    >
                      Lihat Jadwal Mengajar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          aria-label="Pagination"
          className="flex items-center justify-center mt-2 text-gray-600"
        >
          <a className="p-2 mr-4 rounded hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
          <a className="px-4 py-2 rounded hover:bg-gray-100"> 1 </a>
          <a className="px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100">
            {" "}
            2{" "}
          </a>
          <a className="px-4 py-2 rounded hover:bg-gray-100"> 3 </a>
          <a className="px-4 py-2 rounded hover:bg-gray-100"> ... </a>
          <a className="px-4 py-2 rounded hover:bg-gray-100"> 9 </a>
          <a className="p-2 ml-4 rounded hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JadwalMengajarDosen;
