import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import Link from "next/link";
import React from "react";

import { IoMdArrowRoundBack } from "react-icons/io";

const page = () => {
  return (
    <LayoutSurat>
      <Back url="/surat" />
      aktif cuti akademik
    </LayoutSurat>
  );
};

export default page;
