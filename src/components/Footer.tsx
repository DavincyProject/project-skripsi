"use client";

import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  const aplikasi = [
    {
      id: 1,
      name: "MyUBSI Student",
      logo: "/footer/google_play.svg",
      link: "",
    },
    {
      id: 2,
      name: "MyUBSI Student",
      logo: "/footer/app_store.svg",
      link: "",
    },
    {
      id: 3,
      name: "BSI.ID",
      logo: "/footer/google_play.svg",
      link: "",
    },
  ];

  const sites = [
    {
      id: 1,
      name: "www.bsi.ac.id",
      link: "http://www.bsi.ac.id",
    },
    {
      id: 2,
      name: "News BSI",
      link: "http://news.bsi.ac.id",
    },
    {
      id: 3,
      name: "PKL",
      link: "http://pkl.bsi.ac.id",
    },
    {
      id: 4,
      name: "MBKM",
      link: "http://mbkm.bsi.ac.id",
    },
    {
      id: 5,
      name: "Lykan",
      link: "http://lykan.bsi.ac.id",
    },
    {
      id: 6,
      name: "E-learning UBSI",
      link: "http://elearning.bsi.ac.id/login",
    },
  ];

  const socialMedia = [
    {
      id: 1,
      name: "@bsi_peduli",
      logo: "/footer/instagram.svg",
      link: "",
    },
    {
      id: 2,
      name: "Kuliah BSI aja",
      logo: "/footer/youtube.svg",
      link: "",
    },
  ];

  return (
    <section className="py-2 flex flex-col justify-center items-center bg-[#171A1F]">
      <footer className="footer flex flex-wrap item-start justify-start md:justify-evenly p-10 text-white">
        <div className="w-full md:w-64 flex justify-center  ">
          <aside className="flex items-center flex-col">
            <Image
              src="/logo_bsi.svg"
              alt="logo bsi"
              width={200}
              height={150}
            />
            <h1>Universitas Bina Sarana Informatika</h1>
          </aside>
        </div>

        <div className="flex flex-wrap gap-10">
          <nav>
            <h1 className="text-white font-bold text-lg">Aplikasi Lainnya</h1>
            {aplikasi.map((apps) => (
              <Link
                key={apps.id}
                href={`${apps.link}`}
                target="_blank"
                className="flex items-center gap-2 my-2 hover:text-blue-300"
              >
                <Image
                  src={apps.logo}
                  alt={apps.name}
                  width={20}
                  height={20}
                ></Image>
                <span>{apps.name}</span>
              </Link>
            ))}
          </nav>
          <nav>
            <h1 className="text-white font-bold text-lg">Sosial Media</h1>
            {socialMedia.map((sosmed) => (
              <Link
                key={sosmed.id}
                href={`${sosmed.link}`}
                target="_blank"
                className="flex items-center gap-2 my-2 hover:text-blue-300"
              >
                <Image
                  src={sosmed.logo}
                  alt={sosmed.name}
                  width={20}
                  height={20}
                ></Image>
                <span>{sosmed.name}</span>
              </Link>
            ))}
          </nav>
          <nav>
            <h1 className="text-white font-bold text-lg">Situs Terkait</h1>
            {sites.map((site) => (
              <Link
                key={site.id}
                href={`${site.link}`}
                target="_blank"
                className="flex items-center gap-2 my-2 hover:text-blue-300"
              >
                <span>{site.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <nav>
            <h1 className="text-[#4387D5] font-bold text-lg">
              Hubungi Kami <br />
              <span className="text-sm text-white font-normal">
                Hubungi kami terkait masalah yang anda alami di akademik
              </span>
            </h1>
            <form className="flex flex-col items-end gap-2">
              <textarea
                className="textarea textarea-bordered text-white bg-[#666D7D] rounded-sm w-full"
                placeholder="Jelaskan Kendala Anda"
              ></textarea>
              <div className="join">
                <input
                  className="input join-item text-white bg-[#2C2C2C] rounded-sm"
                  placeholder="Masukkan Email Anda"
                />
                <button className="btn join-item text-white border-none rounded-sm bg-[#0458A9]">
                  Kirim
                </button>
              </div>
            </form>
          </nav>
        </div>
      </footer>
      <div className="px-3">
        <h1 className="text-xs text-white text-center">
          © 2012 - 2024 Sisfo Akademik Mahasiswa Universitas Bina Sarana
          Informatika | Design by Billy
        </h1>
      </div>
    </section>
  );
};

export default Footer;
