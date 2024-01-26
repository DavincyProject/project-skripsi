import DetailJadwalDosen from "@/components/info/DetailJadwalDosen";
import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";

type DetailPagesProps = { params: { slug: any } };

const page = (props: DetailPagesProps) => {
  const { params } = props;

  return (
    <LayoutSurat>
      <Back url="/info/jadwal_dosen" />
      <DetailJadwalDosen />
    </LayoutSurat>
  );
};

export default page;
