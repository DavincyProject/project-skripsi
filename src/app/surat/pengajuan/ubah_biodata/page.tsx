import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import UbahBiodata from "@/components/surat/UbahBiodata";
import Link from "next/link";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const page = () => {
  return (
    <LayoutSurat>
      <Back url="/surat" />
      <UbahBiodata />
    </LayoutSurat>
  );
};

export default page;
