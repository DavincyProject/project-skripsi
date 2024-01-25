import JadwalMengajarDosen from "@/components/info/JadwalMengajarDosen";
import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";

const page = () => {
  return (
    <LayoutSurat>
      <Back url="/" />
      <JadwalMengajarDosen />
    </LayoutSurat>
  );
};

export default page;
