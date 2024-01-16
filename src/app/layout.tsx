import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import favicon from "../../public/favicon.ico";
import LoginProtect from "@/components/Protected/LoginProtect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UBSI | SISFO AKADEMIK MAHASISWA",
  description:
    "Situs ini dikhususkan bagi mahasiswa/mahasiswi Akademi-akademi Bina Sarana Informatika dalam memperoleh informasi akademik (nilai), pembayaran biaya kuliah, pendaftaran ujian Her, TA, dll.",
  icons: [{ rel: "icon", url: favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <LoginProtect>
          <Navbar />
          {children}
          <Footer />
        </LoginProtect>
      </body>
    </html>
  );
}
