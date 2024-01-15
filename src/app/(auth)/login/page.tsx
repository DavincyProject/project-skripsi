"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
    // <div className="grid grid-cols-2 place-content-center min-h-[90dvh]">
    //   <div className="testing min-h-screen col-span-1 flex justify-center items-center">
    //     <Image
    //       src={"/auth/side_img.svg"}
    //       width={500}
    //       height={300}
    //       alt="login image"
    //     />
    //   </div>
    //   <div className="grid-cols-1">
    //     <div className="flex justify-center items-center">
    //       <div className="card w-96 bg-base-100 shadow-xl">
    //         <div className="card-body items-center ">
    //           <h2 className="card-title">Welcome Back to SISFO UBSI!</h2>
    //           <p>
    //             Silahkan masukkan informasi login anda dengan NIM dan Password
    //           </p>
    //           <div className="badge badge-primary p-2">⚠️ TESTING ONLY</div>
    //           <div className="card-actions">
    //             <button className="btn btn-primary btn-wide" onClick={login}>
    //               Login
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="px-2">
        <div id="background-login"></div>
        <div className="flex flex-wrap justify-around items-center min-h-screen">
          <div className="max-w-[50%] hidden md:block">Background here</div>

          <div className="md:max-w-[50%]">
            <div className="card shadow-xl border">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Selamat Datang Di SISFO UBSI</h2>
                <small>
                  Gunakan Nomor Induk Mahasiswa (NIM) dan password yang <br />{" "}
                  berupa tanggal lahir Anda untuk mengakses Sisfo Akademik ini.
                </small>
                <small className="font-bold text-red-500">
                  TESTING ONLY, NOT FINAL UI
                </small>

                <form className="w-full">
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

                <div className="card-actions">
                  <button
                    onClick={login}
                    className="btn btn-primary btn-wide text-white"
                  >
                    Masuk
                  </button>
                </div>

                <div className="divider">atau</div>

                <div className="flex justify-center flex-wrap gap-2">
                  <button className="btn btn-primary btn-wide text-white">
                    Aktivasi Mahasiswa Keluar
                  </button>
                  <button className="btn bg-[#ff3300] hover:bg-[#b64529] btn-wide text-white">
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
