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
  }, []);

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

  return (
    <div className="grid grid-cols-2 place-content-center min-h-[90dvh]">
      <div className="testing min-h-screen col-span-1 flex justify-center items-center">
        <Image
          src={"/auth/side_img.svg"}
          width={500}
          height={300}
          alt="login image"
        />
      </div>
      <div className="grid-cols-1">
        <div className="flex justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center ">
              <h2 className="card-title">Welcome Back to SISFO UBSI!</h2>
              <p>
                Silahkan masukkan informasi login anda dengan NIM dan Password
              </p>
              <div className="badge badge-primary p-2">⚠️ TESTING ONLY</div>
              <div className="card-actions">
                <button className="btn btn-primary btn-wide" onClick={login}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
