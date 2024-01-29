import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";
import Krs from "@/components/krs/Krs";

export default function page() {
  return (
    <LayoutSurat>
      <Back url="/" text="" />
      <Krs />
    </LayoutSurat>
  );
}
