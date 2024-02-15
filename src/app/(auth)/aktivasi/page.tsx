import Back from "@/components/surat/Back";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[90dvh] flex flex-col px-10 py-3 ">
      <Back url="/login" text="" />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <div className="flex flex-wrap gap-5">
            <div className="flex-1 sm:w-full md:w-1/2">
              <div className="card border bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Cek NIM Baru</h2>
                  <p className="text-justify text-xs sm:text-sm md:text-md">
                    Masukkan NIM lama dan Tanggal Lahir untuk memeriksa NIM baru
                    bagi Mahasiswa yang sudah melakukan pendaftaran Aktivasi dan
                    Melakukan pembayaran.
                  </p>

                  <div className="w-full">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">NIM Lama</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Masukkan NIM Lama Anda"
                        className="input input-bordered"
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Tanggal Lahir</span>
                      </div>
                      <input
                        type="date"
                        className="input input-bordered w-full "
                      />
                    </label>
                  </div>

                  <div className="card-actions mt-4">
                    <button className="btn btn-primary text-white">
                      Cek NIM Baru
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <div className="flex-1 ">
            <div className="card border bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Aktivasi Mahasiswa Keluar</h2>
                <p className="text-justify text-xs sm:text-sm md:text-md">
                  Selamat datang di fasilitas layanan kemahasiswaan BSI.
                  Fasilitas ini merupakan salah satu bentuk pelayanan dari pihak
                  pengelola BSI dalam menyediakan informasi akademik
                  kemahasiswaan, dan diharapkan seluruh mahasiswa BSI yang masih
                  aktif dapat memperoleh informasi tersebut dengan mudah melalui
                  fasilitas ini.
                </p>
                <div className="w-full">
                  <div className="py-2 md:border md:p-5 md:shadow-xl md:rounded-md">
                    <div className="my-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/surat/doc_icon.svg"}
                          alt="doc icon"
                          width={25}
                          height={25}
                        />
                        <span className="font-bold text-xs sm:text-sm md:text-md">
                          Pendaftaran Aktivasi Mahasiswa Keluar
                        </span>
                      </div>
                      <div className="md:ml-8 mt-1">
                        <p className="text-left text-xs sm:text-sm md:text-md">
                          Untuk Melakukan aktivasi Mahasiswa Keluar, Masukkan
                          NIM Lama dan Tanggal Lahir
                        </p>
                      </div>

                      <div className="md:ml-8 flex flex-wrap gap-2 justify-center flex-1">
                        <label className="form-control md:flex-1">
                          <div className="label">
                            <span className="label-text">NIM Lama</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Masukkan NIM Lama Anda"
                            className="input input-bordered"
                          />
                        </label>
                        <label className="form-control md:flex-1">
                          <div className="label">
                            <span className="label-text">Tanggal Lahir</span>
                          </div>
                          <input
                            type="date"
                            className="input input-bordered w-full "
                          />
                        </label>
                      </div>

                      <div className="card-actions justify-center mt-3 md:ml-8">
                        <button className="btn w-full btn-primary text-white">
                          Daftar Aktivasi
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-5">
                  <div className="py-2 md:border md:p-5 md:shadow-xl md:rounded-md">
                    <div className="my-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/surat/doc_icon.svg"}
                          alt="doc icon"
                          width={25}
                          height={25}
                        />
                        <span className="font-bold text-xs sm:text-sm md:text-md">
                          Pembayaran Aktivasi Mahasiswa Keluar{" "}
                          <span className="text-red-500">
                            (Setelah Mendaftar)
                          </span>
                        </span>
                      </div>
                      <div className="md:ml-8 mt-1">
                        <p className="text-left text-xs sm:text-sm md:text-md">
                          Untuk Pembayaran Aktivasi Masukan No Formulir Dan
                          Password yang telah dikirim via email
                        </p>
                      </div>

                      <div className="md:ml-8 flex flex-wrap gap-2 justify-center flex-1">
                        <label className="form-control md:flex-1">
                          <div className="label">
                            <span className="label-text">No Formulir</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Contoh : 31xxxxxxx"
                            className="input input-bordered"
                          />
                        </label>
                        <label className="form-control md:flex-1">
                          <div className="label">
                            <span className="label-text">Password</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Cek Email Anda"
                            className="input input-bordered"
                          />
                        </label>
                      </div>

                      <div className="card-actions justify-center mt-3 md:ml-8">
                        <button className="btn w-full btn-primary text-white">
                          Bayar Aktivasi
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
