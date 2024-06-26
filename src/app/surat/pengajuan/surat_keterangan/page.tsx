import Back from "@/components/surat/Back";
import BuatSuratKeterangan from "@/components/surat/BuatSuratKeterangan";
import LayoutSurat from "@/components/surat/LayoutSurat";
import React from "react";

const page = () => {
  return (
    <LayoutSurat>
      <Back url={"/surat"} text="Kembali Ke Halaman Sebelumnya" />
      <BuatSuratKeterangan />
    </LayoutSurat>
  );
};

export default page;
