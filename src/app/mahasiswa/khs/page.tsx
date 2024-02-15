import Khs from "@/components/khs/khs";
import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import React from "react";

const page = () => {
  return (
    <LayoutSurat>
      <Back url="/" text="" />
      <Khs />
    </LayoutSurat>
  );
};

export default page;
