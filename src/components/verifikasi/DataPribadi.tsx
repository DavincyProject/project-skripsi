import Image from "next/image";
import React from "react";

const DataPribadi = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Image
          src={"/surat/home_icon.svg"}
          alt="home icon"
          width={25}
          height={25}
        />
        <span className="font-bold">Data Pribadi</span>
      </div>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Alamat Lengkap</span>
        </div>
        <input
          type="text"
          placeholder="Masukkan Alamat Lengkap Anda"
          className="input input-bordered w-full "
        />
      </label>
      <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-1 gap-4">
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Desa / Kelurahan</span>
            </div>
            <input
              type="text"
              placeholder="Kelurahan atau desa akan ditampilkan disini"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Nomor Rumah</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">RT</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">RW</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Kecamatan</span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                Pilih Kecamatan Anda
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
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
              <span className="label-text">Nomor Telepon Rumah</span>
            </div>
            <input
              type="text"
              placeholder="Masukkan Nomor Telepon Rumah"
              className="input input-bordered w-full "
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Email Utama</span>
            </div>
            <input
              type="text"
              placeholder="Masukkan Email Utama Anda"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Nomor Telepon Pribadi / HP</span>
            </div>
            <input
              type="text"
              placeholder="Masukkan Nomor Telepon Pribadi"
              className="input input-bordered w-full "
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default DataPribadi;
