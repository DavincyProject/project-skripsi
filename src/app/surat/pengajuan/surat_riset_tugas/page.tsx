import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import ListPengajuan from "@/components/surat/ListFormTugasKuliah/ListPengajuan";
import React from "react";

const page = () => {
  return (
    <LayoutSurat>
      <Back url="/surat" text="Kembali Ke Halaman Sebelumnya" />
      <ListPengajuan />
    </LayoutSurat>
  );
};

export default page;
