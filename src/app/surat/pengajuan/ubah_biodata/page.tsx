import LayoutSurat from "@/components/surat/LayoutSurat";
import Link from "next/link";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const page = () => {
  return (
    <LayoutSurat>
      <Link
        href={"/surat"}
        className="flex items-center gap-1 hover:text-blue-400"
      >
        <IoMdArrowRoundBack />
        Kembali ke halaman sebelumnya
      </Link>
      <br />
      Ubah biodata
    </LayoutSurat>
  );
};

export default page;
