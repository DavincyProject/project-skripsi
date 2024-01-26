import EmailProdi from "@/components/info/EmailProdi";
import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import React from "react";

const page = () => {
  return (
    <LayoutSurat>
      <Back url="/" />
      <EmailProdi />
    </LayoutSurat>
  );
};

export default page;
