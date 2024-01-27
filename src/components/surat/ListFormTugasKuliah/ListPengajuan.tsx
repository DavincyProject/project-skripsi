import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsFillPrinterFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const ListPengajuan = () => {
  const list = [
    {
      id: 1,
      date: "19-08-2022",
      time: "19:36:58 PM",
      status: "Cetak Langsung",
    },
    {
      id: 2,
      date: "19-08-2022",
      time: "19:36:58 PM",
      status: "Cetak Langsung",
    },
    {
      id: 3,
      date: "19-08-2022",
      time: "19:36:58 PM",
      status: "Cetak Langsung",
    },
    {
      id: 4,
      date: "19-08-2022",
      time: "19:36:58 PM",
      status: "Cetak Langsung",
    },
    {
      id: 5,
      date: "19-08-2022",
      time: "19:36:58 PM",
      status: "Cetak Langsung",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src={"/surat/doc_icon.svg"}
          alt="doc icon"
          width={25}
          height={25}
        />
        <span className="font-bold">
          Pembuatan Surat Pengantar Riset Tugas Kuliah
        </span>
      </div>

      <div className="md:ml-8 mt-1">
        <p className="text-justify text-sm sm:text-md md:text-base">
          Selamat Datang{" "}
          <span className="text-red-500 font-bold">Username</span> pada laman
          Pembuatan Surat Pengantar Riset Tugas Kuliah. Halaman ini Merupakan
          Halaman dimana semua Surat Pengantar Yang telah anda Ajukan.
        </p>

        {/* form to fill up start here */}
        <div className="mt-5 flex flex-col">
          <h1 className="font-bold">Data Diri Anda</h1>
          <div className="flex max-w-[336px] justify-between gap-5 items-start">
            <div>
              <h1 className="leading-9">NIM</h1>
              <h1 className="leading-9">Nama</h1>
              <h1 className="leading-9">Jurusan</h1>
              <h1 className="leading-9">Kelas</h1>
            </div>
            <div className="flex grow  flex-col items-stretch px-5">
              <div className="text-zinc-900  leading-9">: 17xxxxxx</div>
              <div className="text-zinc-900  leading-9">: Username</div>
              <div className="text-zinc-900  leading-9 whitespace-nowrap">
                : Teknologi Informasi
              </div>
              <div className="text-zinc-900  leading-9 ">: 17.8A.26</div>
            </div>
          </div>

          <h1 className="mt-2 font-bold">
            Surat Pengantar Yang Telah Diajukan
          </h1>

          <div className="overflow-x-auto max-h-[60dvh] custom-scrollbar">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="sticky top-0 bg-white border-b-2">
                  <th>No.</th>
                  <th>Tanggal Pengajuan</th>
                  <th>Jam</th>
                  <th>Proses</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {list.map((table) => (
                  <tr key={table.id} className="hover">
                    <th>{table.id}</th>
                    <td>{table.date}</td>
                    <td>{table.time}</td>
                    <td>
                      <div className="bg-green-500 rounded-md p-1 text-white font-semibold text-center ">
                        {table.status}
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 flex-wrap">
                        <button className="btn btn-primary text-white">
                          Cetak{" "}
                          <span>
                            <BsFillPrinterFill size={20} />
                          </span>
                        </button>
                        <button className="btn btn-danger">
                          <span>Hapus</span>
                          <MdDeleteForever size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center">
            <Link
              href={
                "/surat/pengajuan/surat_riset_tugas/create_riset_tugas_kuliah"
              }
            >
              <button className="mt-2 btn btn-primary text-white">
                <FaPlus size={20} />
                <span>Buat Pengajuan Baru</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPengajuan;
