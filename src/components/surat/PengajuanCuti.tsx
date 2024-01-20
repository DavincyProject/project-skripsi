import Link from "next/link";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const PengajuanCuti = () => {
  return (
    <div>
      <Link
        href={"/surat"}
        className="flex items-center gap-1 hover:text-blue-400"
      >
        <IoMdArrowRoundBack />
        Kembali ke halaman sebelumnya
      </Link>
      <br />
      PengajuanCuti
    </div>
  );
};

export default PengajuanCuti;
