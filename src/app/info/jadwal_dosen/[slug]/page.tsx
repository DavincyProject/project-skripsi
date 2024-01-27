import DetailJadwalDosen from "@/components/info/DetailJadwalDosen";
import Back from "@/components/surat/Back";
import LayoutSurat from "@/components/surat/LayoutSurat";

type DetailPagesProps = { params: { slug: any } };

const page = (props: DetailPagesProps) => {
  const { params } = props;
  console.log(params);

  return (
    <LayoutSurat>
      <Back url="/info/jadwal_dosen" text="Kembali Ke Halaman Sebelumnya" />
      <DetailJadwalDosen />
    </LayoutSurat>
  );
};

export default page;
