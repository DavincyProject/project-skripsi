import ProfileCard from "@/components/homepages/ProfileCard";
import PengajuanCuti from "@/components/surat/PengajuanCuti";
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;

  const renderContent = () => {
    switch (slug) {
      case "daftar-cuti-akademik":
        return <PengajuanCuti />;
    }
  };
  return (
    <div className="min-h-[100dvh] p-5">
      {/* table and profile card will show from here */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <ProfileCard />
        </div>

        <div className="col-span-1 md:col-span-2 p-5 shadow-xl rounded-xl">
          {renderContent()}
        </div>
      </section>
    </div>
  );
};

export default Page;
