import ProfileCard from "@/components/homepages/ProfileCard";
import SuratCard from "@/components/surat/SuratCard";

export default function DashboardPage() {
  return (
    <div className="min-h-[100dvh] p-5">
      {/* table and profile card will show from here */}
      <h1 className="text-justify mb-1">
        Selamat Datang di fasilitas layanan kemahasiswaan Universitas Bina
        Sarana Informatika. Fasilitas ini merupakan salah satu bentuk pelayanan
        dari Universitas Bina Sarana Informatika dalam penyediaan informasi
        akademik kemahasiswaan dan diharapkan seluruh mahasiswa UBSI yang masih
        aktif dapat memperoleh informasi dengan mudah melalui website ini.
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <h1>Beranda</h1>
              </li>
              <li>
                <h1>Pengajuan Surat</h1>
              </li>
            </ul>
          </div>
          <ProfileCard />
        </div>

        <div className="col-span-1 md:col-span-2 p-5 shadow-xl rounded-xl overflow-y-scroll custom-scrollbar max-h-[100dvh]">
          <SuratCard />
        </div>
      </section>
    </div>
  );
}
