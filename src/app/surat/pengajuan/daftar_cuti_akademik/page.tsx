import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import PengajuanCuti from "@/components/surat/PengajuanCuti";
import React from "react";

const page = () => {
  return (
    <LayoutSurat>
      <Back url={"/surat"} text="Kembali Ke Halaman Sebelumnya" />

      <PengajuanCuti />
    </LayoutSurat>
  );
};

export default page;
