import ProfileCard from "@/components/homepages/ProfileCard";
import SuratCard from "@/components/surat/SuratCard";

export default function DashboardPage() {
  return (
    <div className="min-h-[100dvh] p-5">
      {/* table and profile card will show from here */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a className="underline">Surat</a>
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
