import Image from "next/image";
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const UbahBiodata = () => {
  return (
    <div>
      {/* content start here */}
      <div className="flex items-center gap-2">
        <Image
          src={"/surat/doc_icon.svg"}
          alt="doc icon"
          width={25}
          height={25}
        />
        <span className="font-bold">Form Pengajuan Perubahan Biodata</span>
      </div>

      <div className="md:ml-8 mt-1">
        <p className="text-justify text-sm sm:text-md md:text-base">
          Selamat Datang{" "}
          <span className="text-red-500 font-bold">Username</span> pada laman
          Pengajuan Ubah Biodata, Segala aktifitas yang anda lakukan di Ruang
          Mahasiswa ini dicatat secara otomatis oleh Program, gunakan fasilitas
          ini dengan bijaksana.
        </p>

        {/* form to fill up start here */}
        <div className="mt-5 flex flex-col ">
          <h1 className="font-bold">
            Surat Pengantar Riset terdapat dalam 2 versi
          </h1>

          <div className="my-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <FaExclamationCircle size={20} />
                <h1 className="flex-1 font-semibold text-sm text-red-500">
                  Untuk KTP, KK,Akte Kelahiran, KTM file yang diupload harus
                  berupa file scan asli, bukan berupa foto.
                </h1>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <FaExclamationCircle size={20} />
                <h1 className="flex-1 font-semibold text-sm text-red-500">
                  Untuk Ijazah dan Transkrip akhir yang diupload dapat berupa
                  fotokopi yang dilegalisir basah. Demikian informasi ini saya
                  sampaikan.
                </h1>
              </div>
            </div>
          </div>

          <div className="my-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="Email"
                placeholder="email akan ditampilkan disini"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Nomor Telepon</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">
                  Upload Surat Pengajuan Perubahan Biodata
                </span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Upload KTP</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Upload Kartu Keluarga</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Upload Akte Kelahiran</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Upload KTM</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Upload Ijazah</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Upload Transkip Nilai</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
              />
            </label>
          </div>

          <div className="flex gap-2 flex-wrap">
            <button className="w-full md:w-fit mt-2 btn btn-primary text-white">
              Kirim Pengajuan Ubah Biodata
            </button>
            <button className="w-full md:w-fit mt-2 btn btn-warning text-black">
              Cetak Bukti Pengajuan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbahBiodata;
