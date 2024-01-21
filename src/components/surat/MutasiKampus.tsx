import Image from "next/image";
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import listkampus from "../../utils/option/selectkampus.json";

const MutasiKampus = () => {
  const note = [
    {
      id: 1,
      description: "Pengajuan Hanya Dapat Dilakukan SATU KALI.",
    },
    {
      id: 2,
      description:
        "Pemilihan Kampus Berdasarkan Kapasitas Dan Jurusan Yang Tersedia Di Masing-Masing Kampus, Jika Pilihan Kampus Yang Dipilih Tidak Tersedia Maka Kami Akan Mengkonfirmasi.",
    },
    {
      id: 3,
      description:
        "Untuk Mahasiswa Dual Kampus Jika Melakukan Mutasi Untuk BSI Juga Harus Melakukan Mutasi Untuk Nusa Mandiri Sesuai Dengan Ketentuan Yang Berlaku.",
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
        <span className="font-bold">Pengajuan Mutasi Kampus</span>
      </div>

      <div className="md:ml-8 mt-1">
        <p className="text-justify">
          Selamat Datang{" "}
          <span className="text-red-500 font-bold">Username</span> pada laman
          pengajuan mutasi kampus, silahkan isi data-data yang diperlukan untuk
          mengajukan mutasi kampus.
        </p>

        {/* form to fill up start here */}
        <div className="mt-5 flex flex-col items-end">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">
                Nomor Telepon{" "}
                <small className="text-red-500">( Wajib Diisi )</small>
              </span>
            </div>
            <input
              type="text"
              placeholder="Contoh : 0812-xxxx-xxxx"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">
                Email <small className="text-red-500">( Wajib Diisi )</small>
              </span>
            </div>
            <input
              type="text"
              placeholder="Contoh : johndoe@mail.com"
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex flex-wrap w-full gap-2">
            <div className="flex-1">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Pilihan Kampus</span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Silahkan Pilih Kampus
                  </option>
                  {listkampus.map((kampus) => (
                    <option key={kampus.id}>
                      {kampus.id}. {kampus.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex-1">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Pilihan Waktu</span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Silahkan Pilih Waktu
                  </option>
                  <option>Pagi</option>
                  <option>Sore</option>
                </select>
              </label>
            </div>
          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Berkas / File Pendukung</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full "
            />
            <div className="label">
              <span className="label-text-alt text-red-500">
                (doc, docx, zip, rar, pdf)
              </span>
            </div>
          </label>

          <button className="mt-2 btn btn-primary text-white">
            Ajukan Mutasi Kampus
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-5">
          {note.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <FaExclamationCircle size={20} />
              <h1
                className="flex-1 text-justify text-sm sm:text-md md:text-base 
                "
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

export default MutasiKampus;
