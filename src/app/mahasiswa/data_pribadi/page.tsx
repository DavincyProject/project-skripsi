import Hero from "@/components/mahasiswa/Hero";
import { BsPersonBadgeFill } from "react-icons/bs";
import { SiHtmlacademy } from "react-icons/si";
import datapribadi from "../../../utils/DataPribadiMahasiswa/datapribadi.json";
import dataakademik from "../../../utils/DataPribadiMahasiswa/dataakademik.json";
import Image from "next/image";
import Back from "@/components/surat/Back";

export default function page() {
  return (
    <div className="min-h-dvh custom-hero-bg">
      <div className="pt-5 px-4">
        <Back url="/" text="" />
      </div>

      <Hero />

      <div className="px-2 py-2 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-3">
        <section>
          <div className="card bg-base-100 bg-opacity-35 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-4">
                <BsPersonBadgeFill size={20} />

                <span className="text-2xl font-bold">Data Pribadi</span>
              </h2>
              <div className="w-full flex flex-col justify-start items-start">
                {datapribadi.map((pribadi) => (
                  <div key={pribadi.id} className="w-full">
                    <div className="flex justify-between text-xs sm:text-sm md:text-md lg:text-base">
                      <div className="flex items-center gap-2 min-w-md">
                        <Image
                          src={pribadi.icon}
                          alt="logo"
                          width={20}
                          height={20}
                        />
                        <h1>{pribadi.name}</h1>
                      </div>

                      <h2 className="font-semibold">{pribadi.description}</h2>
                    </div>
                    <div className="divider mt-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="card bg-base-100 bg-opacity-35 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-4">
                <SiHtmlacademy size={20} />
                <span className="text-2xl font-bold">Data Akademik</span>
              </h2>
              <div className="w-full flex flex-col justify-start items-start">
                {dataakademik.map((akademik) => (
                  <div key={akademik.id} className="w-full">
                    <div className="flex justify-between text-xs sm:text-sm md:text-md lg:text-base">
                      <div className="flex items-center gap-2 min-w-md">
                        <Image
                          src={akademik.icon}
                          alt="logo"
                          width={20}
                          height={20}
                        />
                        <h1>{akademik.name}</h1>
                      </div>
                      <h2 className="font-semibold">{akademik.description}</h2>
                    </div>
                    <div className="divider mt-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
