import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import MutasiKampus from "@/components/surat/MutasiKampus";
import React from "react";

const page = () => {
  return (
    <LayoutSurat>
      <Back url={"/surat"} text="Kembali Ke Halaman Sebelumnya" />

      <MutasiKampus />
    </LayoutSurat>
  );
};

export default page;
