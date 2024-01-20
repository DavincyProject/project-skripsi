import ProfileCard from "@/components/homepages/ProfileCard";
import React from "react";

export default function LayoutSurat({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] p-5">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <ProfileCard />
        </div>
        <div className="col-span-1 md:col-span-2 p-5 shadow-xl rounded-xl">
          {children}
        </div>
      </section>
    </div>
  );
}
