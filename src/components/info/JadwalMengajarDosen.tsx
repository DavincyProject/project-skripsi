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
        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder="Cari Nama Dosen..."
          />
        </div>
      </div>

      <div className="md:ml-8 mt-2">
        <div className="overflow-x-auto max-h-[80dvh]">
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
                    <Link href={jadwal.url} className="text-blue-500 font-bold">
                      Lihat Jadwal Mengajar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <nav
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
        </nav>
      </div>
    </div>
  );
};

export default JadwalMengajarDosen;
