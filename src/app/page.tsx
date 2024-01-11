import LayananLain from "@/components/homepages/LayananLain";
import PdfTable from "@/components/homepages/PdfTable";
import ProfileCard from "@/components/homepages/ProfileCard";

export default function Home() {
  return (
    <div className="min-h-[100dvh] p-5">
      {/* table and profile card will show from here */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <ProfileCard />
        </div>
        <div className="col-span-1 md:col-span-2">
          <PdfTable />
        </div>
      </section>
      <div className="card border p-3 shadow-lg">
        <LayananLain />
      </div>
    </div>
  );
}
