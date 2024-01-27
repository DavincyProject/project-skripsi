import Back from "@/components/surat/Back";
import BuatPengantarRiset from "@/components/surat/BuatPengantarRiset";
import LayoutSurat from "@/components/surat/LayoutSurat";
import React from "react";

const page = () => {
  return (
    <LayoutSurat>
      <Back url={"/surat"} text="Kembali Ke Halaman Sebelumnya" />
      <BuatPengantarRiset />
    </LayoutSurat>
  );
};

export default page;
