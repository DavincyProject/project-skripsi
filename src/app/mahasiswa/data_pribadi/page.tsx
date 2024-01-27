import Hero from "@/components/mahasiswa/Hero";
import { BsPersonBadgeFill } from "react-icons/bs";
import { SiHtmlacademy } from "react-icons/si";

export default function page() {
  return (
    <div className="min-h-dvh custom-hero-bg">
      <Hero />

      <div className="px-2 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-3">
        <section>
          <div className="card bg-base-100 bg-opacity-70 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <span>
                  <BsPersonBadgeFill size={20} />
                </span>
                Data Pribadi
              </h2>
              <div className="w-full flex flex-col justify-start items-start">
                <h1>Testing Only</h1>
                <h1>Testing Only</h1>
                <h1>Testing Only</h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="card bg-base-100 bg-opacity-70 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <span>
                  <SiHtmlacademy size={20} />
                </span>
                Data Akademik
              </h2>
              <div className="w-full flex flex-col justify-start items-start">
                <h1>Testing Only</h1>
                <h1>Testing Only</h1>
                <h1>Testing Only</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
