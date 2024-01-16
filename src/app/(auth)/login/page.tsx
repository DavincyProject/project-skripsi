"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaMoneyCheck } from "react-icons/fa6";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const checkIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (checkIsLoggedIn) {
      router.push("/");
    }
  });

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

  return (
    <>
      <div className="px-2">
        <div id="background-login"></div>
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
            <div className="card shadow-xl border bg-white">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Selamat Datang Di SISFO UBSI</h2>
                <small>
                  Gunakan Nomor Induk Mahasiswa (NIM) dan password yang <br />{" "}
                  berupa tanggal lahir Anda untuk mengakses Sisfo Akademik ini.
                </small>

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
                  <label className="w-full form-control">
                    <div className="label">
                      <span className="label-text">Password</span>
                    </div>
                    <input
                      type="YYYY-MM-DD"
                      placeholder="Masukkan Password"
                      className="input input-bordered w-full"
                    />
                  </label>
                </form>
                <div className="mt-4 flex justify-between items-center flex-wrap gap-5 w-full">
                  <div className="form-control border flex-1 p-1">
                    <label className="label cursor-pointer">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="checkbox " />
                          <span className="label-text">
                            I&apos;m not a robot
                          </span>
                        </div>
                        <Image
                          src={"/auth/recaptcha.png"}
                          width={35}
                          height={35}
                          alt="google recaptcha"
                        />
                      </div>
                    </label>
                  </div>

                  <button
                    onClick={login}
                    className="btn btn-primary hover:bg-darkblue w-full md:btn-wide md:flex-1 text-white font-bold text-md"
                  >
                    Masuk
                    <RiLoginBoxFill size={18} />
                  </button>
                </div>

                <div className="divider">atau</div>

                <div className="flex justify-center flex-wrap gap-2">
                  <button className="btn btn-info hover:bg-darkblue btn-wide text-white ">
                    Aktivasi Mahasiswa Keluar
                  </button>
                  <button className="btn btn-info hover:bg-darkblue btn-wide text-white">
                    Cek NIM Baru / Surat Keluar / Surat DO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
