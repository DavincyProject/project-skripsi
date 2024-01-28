import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero pb-4">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <div className="flex items-end justify-center">
            <Image
              src={
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              }
              alt="profile image"
              loading="lazy"
              width={80}
              height={80}
              className="rounded-full "
            />
          </div>

          <h1 className="text-3xl font-bold">Anto Goyang Loe Gue Eyang</h1>
          <p className="py-2 text-sm">
            Untuk perubahan data pribadi dibawah ini, Silakan Anda ajukan di
            menu Surat dan submenu Buat Pengajuan Ubah Biodata atau bisa
            <br />
            <span className="text-blue-500 font-bold">
              <Link href={"/surat/pengajuan/ubah_biodata"}>
                <q>klik disini</q>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>

    // <div className="hero py-4 bg-base-200">
    //   <div className="hero-content text-center text-neutral-content ">
    //     <div className="max-w-lg">
    //       <div className="flex items-end justify-center">
    //         <Image
    //           src={
    //             "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    //           }
    //           alt="profile image"
    //           loading="lazy"
    //           width={80}
    //           height={80}
    //           className="rounded-full "
    //         />
    //       </div>
    //       <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 ">
    //         Anto Goyang Loe Gue Eyang
    //       </h1>
    //       <p className="py-4 text-sm">
    //         Untuk perubahan data pribadi dibawah ini, Silakan Anda ajukan di
    //         menu Surat dan submenu Buat Pengajuan Ubah Biodata atau bisa{" "}
    //         <span className="hover:text-red-500 ">
    //           <Link href={"/surat/pengajuan/ubah_biodata"}>
    //             <q>klik disini</q>
    //           </Link>
    //         </span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
