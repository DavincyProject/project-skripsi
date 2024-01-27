import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import Link from "next/link";
import React from "react";

import { IoMdArrowRoundBack } from "react-icons/io";

const page = () => {
  return (
    <LayoutSurat>
      <Back url="/surat" text="Kembali Ke Halaman Sebelumnya" />
      aktif cuti akademik
    </LayoutSurat>
  );
};

export default page;
