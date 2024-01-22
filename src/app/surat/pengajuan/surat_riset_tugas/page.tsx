import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import PengantarRisetTugasKuliah from "@/components/surat/PengantarRisetTugasKuliah";

import React from "react";

const page = () => {
  return (
    <LayoutSurat>
      <Back url={"/surat"} />
      <PengantarRisetTugasKuliah />
    </LayoutSurat>
  );
};

export default page;
