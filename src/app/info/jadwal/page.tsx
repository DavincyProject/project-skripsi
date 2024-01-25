import JadwalKuliah from "@/components/info/JadwalKuliah";
import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";

const page = () => {
  return (
    <LayoutSurat>
      <Back url="/" />
      <JadwalKuliah />
    </LayoutSurat>
  );
};

export default page;
