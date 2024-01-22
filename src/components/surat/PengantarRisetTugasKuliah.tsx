"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

const PengantarRisetTugasKuliah = () => {
  const template = `Kepada Yth : 
    Humas / Public Relation / SDM 
    Hotel Central 
    Jl. Setia Budi No. 12-15 
    Jakarta Timur 125874
    Gunakan --> <br> <-- untuk berpindah baris (terlihat rapih)`;

  const [surat, setSurat] = useState(template);

  return (
    <div>
      {/* content start here */}
      <div className="flex items-center gap-2">
        <Image
          src={"/surat/doc_icon.svg"}
          alt="home icon"
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
          Pembuatan Surat Pengantar Riset Tugas Kuliah, Segala aktifitas yang
          anda lakukan di Ruang Mahasiswa ini dicatat secara otomatis oleh
          Program, gunakan fasilitas ini dengan bijaksana.
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
                <h1 className="font-bold">Versi Online</h1>
              </div>

              <p className="text-red-500 text-justify text-sm md:text-md ml-8">
                adalah Surat yang dapat di cetak saat ini juga setelah anda
                menekan tombol proses dan sudah dianggap sah oleh Bidang Non
                Akademik BSI (karena menyertakan security print) dan tidak akan
                di proses oleh Bidang Non Akademik dan tidak bisa di ambil di
                kampus setelah 7 hari.
              </p>
            </div>
            <div className="flex flex-col mt-2">
              <div className="flex items-center gap-2">
                <FaExclamationCircle size={20} />
                <h1 className="font-bold">Versi Offline</h1>
              </div>
              <p className="text-red-500 text-justify text-sm md:text-md ml-8">
                adalah data yang anda kirimkan akan di proses dahulu oleh Bidang
                Non Akademik serta bisa di cetak langsung dan surat keterangan
                yang berstempel baru bisa di ambil di kampus masing masing dalam
                jangka waktu 7 hari harap memilih salah satu untuk memudahkan
                proses.
              </p>
            </div>
          </div>

          <div className="my-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">
                  Ketik / Edit Surat pengantar seperti yang tertera di bawah ini
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered min-h-[30dvh]"
                placeholder="Bio"
                value={surat}
                onChange={(e) => setSurat(e.target.value)}
              ></textarea>
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">
                  Masukkan Nama Program / Tugas
                </span>
              </div>
              <input
                type="text"
                placeholder="Contoh : analisa kepuasan pengguna pada website kampus di ..."
                className="input input-bordered w-full"
              />
            </label>

            {/* nantinya select disini akan otomatis mengikuti mata kuliah yang ada di semester yang sedang dijalani saat ini  */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Pilih Matakuliah</span>
              </div>
              <select className="select select-bordered">
                <option disabled selected>
                  -- Pilih Matakuliah --
                </option>
                <option>Pendidikan Kewarganegaraan</option>
                <option>Bahasa Indonesia</option>
                <option>
                  Etika Profesi Teknologi Informasi Dan Komunikasi
                </option>
              </select>
            </label>
          </div>

          <p className="text-center text-sm">
            <span className="text-red-500">
              Ketik pada form kosong diatas ditujukan kepada Instansi / Personal
              yang bersangkutan, mohon diisi dengan data yang sebenarnya
            </span>
            , dan periksa sekali lagi apa yang anda telah ketikkan, setelah anda
            menekan tombol anda akan dibuatkan surat Pengantar Riset dan data
            yang anda masukkan menjadi bukti bahwa anda pernah membuat surat
            Pengantar Riset. Gunakan fasilitas ini dengan sebaik-baiknya dan
            bijaksana.
          </p>

          <div className="flex justify-center">
            <button className="mt-2 btn btn-primary text-white">Proses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengantarRisetTugasKuliah;
