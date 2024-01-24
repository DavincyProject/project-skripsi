import Image from "next/image";
import React from "react";
import pekerjaan from "../../utils/jenisPekerjaan.json";
import pendidikan from "../../utils/pendidikan.json";
import range from "../../utils/rangePenghasilan.json";

const DataIbu = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Image
          src={"/surat/fam_icon.svg"}
          alt="data ayah"
          width={25}
          height={25}
        />
        <span className="font-bold">Data Ibu</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Nama Ibu</span>
            </div>
            <input
              type="text"
              placeholder="Masukkan Nama Lengkap"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Tanggal Lahir</span>
            </div>
            <input type="date" className="input input-bordered w-full " />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <div
                className="tooltip"
                data-tip="isi dengan ( - ) jika sudah meninggal"
              >
                <span className="label-text">NIK Ibu</span>
              </div>
            </div>
            <input
              type="text"
              placeholder="isi dengan ( - ) jika sudah meninggal"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">
                <div className="tooltip" data-tip="Wajib Diisi">
                  Pekerjaan
                </div>
              </span>
            </div>

            <select className="select select-bordered">
              <option disabled selected>
                Pilih Jenis Pekerjaan
              </option>
              {pekerjaan.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">
                <div className="tooltip" data-tip="Wajib Diisi">
                  Pendidikan Terakhir
                </div>
              </span>
            </div>

            <select className="select select-bordered">
              <option disabled selected>
                Pilih Pendidikan
              </option>
              {pendidikan.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">
                <div className="tooltip" data-tip="Wajib Diisi">
                  Penghasilan
                </div>
              </span>
            </div>

            <select className="select select-bordered">
              <option disabled selected>
                Pilih Range Penghasilan
              </option>
              {range.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DataIbu;
