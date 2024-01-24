import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import React from "react";
import DataPribadi from "../../components/verifikasi/DataPribadi";
import DataAkademik from "../../components/verifikasi/DataAkademik";
import DataAyah from "../../components/verifikasi/DataAyah";
import DataIbu from "../../components/verifikasi/DataIbu";
import DataWali from "../../components/verifikasi/DataWali";

const page = () => {
  return (
    <LayoutSurat>
      <Back url="/" />

      {/* content start from here */}
      <div>
        <h1 className="text-center font-bold text-lg mb-4">
          Verifikasi Data Pribadi
        </h1>
        <div className="flex flex-col gap-4">
          <DataPribadi />

          <DataAkademik />

          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
            <DataAyah />
            <DataIbu />
          </div>

          <DataWali />
        </div>
      </div>

      <div className="form-control mt-4">
        <label className="label cursor-pointer">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="checkbox" />
            <span className="label-text text-xs">
              Pastikan Semua Data Sudah Benar, Kesalahan Data Berakibat Pada
              Kesalahan Pelaporan Direktorat Jenderal Pendidikan Tinggi
            </span>
          </div>
        </label>
      </div>

      <div className="flex justify-end w-full mt-2">
        <button className="btn btn-primary text-white w-full md:w-fit">
          Simpan Data Pribadi
        </button>
      </div>
    </LayoutSurat>
  );
};

export default page;
