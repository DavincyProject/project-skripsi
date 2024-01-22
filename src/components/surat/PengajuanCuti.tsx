import React from "react";
import Image from "next/image";
import { FaExclamationCircle } from "react-icons/fa";

const PengajuanCuti = () => {
  const note = [
    {
      id: 1,
      description:
        "Gunakan Fasilitas ini dengan sebaik-baiknya dan jangan lupa untuk melakukan transfer pembayaran biaya cuti setelah proses pengajuan cuti akademik ini.",
    },
    {
      id: 2,
      description:
        "Bagi mahasiswa Dual Campus, selain mengajukan Cuti Akademik di D3 BSI WAJIB untuk melakukan pengajuan cuti di S1 Nusamandiri.",
    },
    {
      id: 3,
      description:
        "Hasil Pengajuan data cuti akan disesuaikan dengan data pembayaran yang anda lakukan, surat cuti dapat diunduh di-website mahasiswa pada link surat cuti akademik setelah batas akhir pengajuan cuti.",
    },
    {
      id: 4,
      description:
        "Pengajuan Cuti Yang Tidak Disertai Dengan Pembayaran Cuti, Maka Pengajuan Cuti-nya TIDAK AKAN DIPROSES, Begitupun Pembayaran Yang Tidak Disertai Dengan Pengajuan Cuti.",
      important: "true",
    },
    {
      id: 5,
      description:
        "Pengajuan Cuti Yang Tidak Disertai Dengan Pembayaran Cuti, Maka Pengajuan Cuti-nya TIDAK AKAN DIPROSES, Begitupun Pembayaran Yang Tidak Disertai Dengan Pengajuan Cuti.",
      important: "true",
    },
  ];

  return (
    <div>
      {/* content start here */}
      <div className="flex items-center gap-2">
        <Image
          src={"/surat/home_icon.svg"}
          alt="home icon"
          width={25}
          height={25}
        />
        <span className="font-bold">Pendaftaran Cuti Akademik</span>
      </div>

      <div className="md:ml-8 mt-1">
        <p className="text-justify text-sm sm:text-md md:text-base">
          Selamat Datang{" "}
          <span className="text-red-500 font-bold">Username</span> pada laman
          pengajuan cuti, anda hanya bisa melakukan cuti{" "}
          <span className="font-bold">2 semester</span> dan hanya dapat
          dilakukan satu kali pengajuan cuti.
        </p>

        {/* form to fill up start here */}
        <div className="mt-5 flex flex-col items-end">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Jumlah Cuti Yang Akan Diambil</span>
            </div>
            <input
              type="text"
              placeholder="2 Semester"
              className="input input-bordered w-full text-red-500 font-bold"
              value={"2 Semester"}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Nomor Handphone</span>
            </div>
            <input
              type="text"
              placeholder="Contoh : 0812-xxxx-xxxx"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Contoh : johndoe@mail.com"
              className="input input-bordered w-full"
            />
          </label>
          <button className="mt-2 btn btn-primary text-white">
            Daftar Cuti Akademik
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-5">
          {note.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <FaExclamationCircle size={20} />
              <h1
                className={`flex-1 text-justify text-sm sm:text-md md:text-base ${
                  item.important ? "text-red-500" : ""
                }`}
              >
                {item.description}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PengajuanCuti;
