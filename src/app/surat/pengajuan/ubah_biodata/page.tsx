import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import UbahBiodata from "@/components/surat/UbahBiodata";
import React from "react";

const page = () => {
  return (
    <LayoutSurat>
      <Back url="/surat" text="Kembali Ke Halaman Sebelumnya" />
      <UbahBiodata />
    </LayoutSurat>
  );
};

export default page;
