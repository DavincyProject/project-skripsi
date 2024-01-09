import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UBSI | SISFO AKADEMIK MAHASISWA",
  description:
    "Situs ini dikhususkan bagi mahasiswa/mahasiswi Akademi-akademi Bina Sarana Informatika dalam memperoleh informasi akademik (nilai), pembayaran biaya kuliah, pendaftaran ujian Her, TA, dll.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
