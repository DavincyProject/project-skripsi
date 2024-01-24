import Image from "next/image";
import React from "react";

const DataAkademik = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Image
          src={"/surat/school_icon.svg"}
          alt="home icon"
          width={25}
          height={25}
        />
        <span className="font-bold">Data Akademik</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">NIM</span>
            </div>
            <input
              type="text"
              placeholder="NIM Akan Ditampilkan Disini"
              className="input input-bordered w-full "
              value={"172xxxxx"}
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">NIK</span>
            </div>
            <input
              type="text"
              placeholder="NIK Akan Ditampilkan Disini"
              className="input input-bordered w-full "
            />
            <div className="label">
              <span className="label-text-alt text-red-500">
                ( Nomor Induk Kependudukan )
              </span>
            </div>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Nama Lengkap</span>
            </div>
            <input
              type="text"
              placeholder="Username akan ditampilkan disini"
              className="input input-bordered w-full "
              value={"USERNAME"}
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">
                <div className="tooltip" data-tip="Wajib Diisi">
                  File Scan KTP <span className="text-red-500">*</span>
                </div>
              </span>
            </div>

            <input
              type="file"
              className="file-input file-input-bordered w-full "
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Kode Pos</span>
            </div>
            <input
              type="text"
              placeholder="Masukkan Kode Pos Anda"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">
                <div
                  className="tooltip"
                  data-tip="isi dengan tanda ( - ) jika tidak menerima KPS"
                >
                  Penerima KPS
                </div>
              </span>
            </div>
            <input
              type="text"
              placeholder="isi dengan tanda (-) jika tidak menerima KPS"
              className="input input-bordered w-full "
            />
            <div className="label">
              <span className="label-text-alt text-red-500">
                ( Kartu Perlindungan Sosial )
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DataAkademik;
