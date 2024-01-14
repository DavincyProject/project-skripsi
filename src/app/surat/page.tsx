import ProfileCard from "@/components/homepages/ProfileCard";
import SuratCard from "@/components/surat/SuratCard";

export default function DashboardPage() {
  return (
    <div className="min-h-[100dvh] p-5">
      {/* table and profile card will show from here */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <ProfileCard />
        </div>
        <div className="col-span-1 md:col-span-2 p-5 shadow-xl rounded-xl">
          <SuratCard />
        </div>
      </section>
    </div>
  );
}
