import KhsPersemester from "@/components/khs/KhsPersemester";
import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import React from "react";

const page = () => {
  return (
    <LayoutSurat>
      <Back url="/" text="" />
      <KhsPersemester />
    </LayoutSurat>
  );
};

export default page;
