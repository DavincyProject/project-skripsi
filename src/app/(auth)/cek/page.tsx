import Back from "@/components/surat/Back";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-2">
      <div className="flex flex-wrap justify-evenly items-center min-h-screen">
        <div className="max-w-[50%] hidden md:block">
          <Image
            src={"/auth/ilus.svg"}
            width={600}
            height={600}
            alt="logo login"
          />
        </div>

        <div className="md:max-w-[50%]">
          <Back url="/login" />
          <div className="card shadow-xl border bg-white">
            <div className="card-body items-center text-center">
              <Image alt="logo bsi" src="logo_bsi.svg" width={50} height={50} />
              <h2 className="card-title">
                Cek Nim Baru / Surat Keluar / Surat DO
              </h2>

              <form className="w-full text-right">
                <label className="w-full form-control">
                  <div className="label">
                    <span className="label-text">NIM</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Masukkan NIM Anda"
                    className="input input-bordered w-full"
                  />
                </label>
              </form>
              <div className="mt-4 flex justify-between items-center flex-wrap gap-5 w-full">
                <label className="form-control w-full max-w-xs">
                  <select className="select select-bordered">
                    <option disabled selected>
                      -- Pilih --
                    </option>
                    <option>Cek Surat SK Keluar / DO</option>
                    <option>Cek NIM Baru</option>
                  </select>
                </label>

                <button className="btn btn-primary hover:bg-darkblue w-full md:btn-wide md:flex-1 text-white font-bold text-md">
                  Proses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
