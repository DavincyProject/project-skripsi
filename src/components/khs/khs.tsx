"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import listkhs from "../../utils/khs/listmatakuliah.json";

const Khs = () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  let totalMutu = 0;
  let totalSKS = 0;

  listkhs.forEach((khs) => {
    totalMutu += parseInt(khs.mutu);
    totalSKS += parseInt(khs.sks);
  });

  const ipk = totalMutu / totalSKS;

  return (
    <div>
      <div ref={componentRef}>
        {/* this is header for print pages */}
        <div id="header-print" className="mb-5">
          <Image
            className="table-header-group "
            src="/print/kop_atas.jpg"
            alt="top header"
            width={1000}
            height={1000}
          />
        </div>

        {/* actual content start here */}
        <div className="flex items-center gap-2">
          <Image
            src={"/jadwal/date.svg"}
            alt="date icon"
            width={25}
            height={25}
          />
          <span className="font-bold">Kartu Hasil Studi (KHS)</span>
        </div>

        <div className="md:ml-8 mt-4" id="custom-print">
          <div className="flex max-w-[336px] justify-between gap-5 items-start">
            <div>
              <h1 className="leading-7">NIM</h1>
              <h1 className="leading-7">Nama</h1>
              <h1 className="leading-7">Program Studi</h1>
              <h1 className="leading-7">Kelas</h1>
            </div>
            <div className="flex grow flex-col items-stretch px-5">
              <div className="text-zinc-900 leading-7">: 17xxxxxx</div>
              <div className="text-zinc-900 leading-7">: Username</div>
              <div className="text-zinc-900 leading-7">
                : Teknologi Informasi
              </div>
              <div className="text-zinc-900 leading-7">: 17.8A.26</div>
            </div>
          </div>

          <div className="overflow-x-auto mt-5">
            <table className="table">
              {/* head */}
              <thead className="bg-[#DEE1E6] text-center">
                <tr>
                  <th className="border border-gray-400 p-1 text-black">No.</th>

                  <th className="border border-gray-400 p-1 text-black">
                    Kode
                  </th>

                  <th className="border border-gray-400 p-1 text-black">
                    Mata Kuliah
                  </th>
                  <th className="border border-gray-400 p-1 text-black">SKS</th>
                  <th className="border border-gray-400 p-1 text-black">
                    Nilai
                  </th>
                  <th className="border border-gray-400 p-1 text-black">
                    Mutu
                  </th>
                  <th className="border border-gray-400 p-1 text-black">
                    Keterangan
                  </th>
                </tr>
              </thead>

              <tbody className="text-center border border-gray-400">
                {listkhs.map((khs) => (
                  <tr key={khs.id}>
                    <td>{khs.id}</td>
                    <td>{khs.kode}</td>
                    <td>{khs.matkul}</td>
                    <td>{khs.sks}</td>
                    <td>{khs.nilai}</td>
                    <td>{khs.mutu}</td>
                    <td>{khs.deskripsi === "" ? "..." : khs.deskripsi}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="text-black bg-[#DEE1E6] border border-gray-400 p-1 ">
                <tr>
                  <th
                    colSpan={2}
                    rowSpan={6}
                    className="border border-gray-400 text-center"
                  >
                    <div className="flex flex-col">
                      <h1>Bobot Nilai</h1>
                      <br />
                      <ul>
                        <li>A = 4</li>
                        <li>B = 3</li>
                        <li>C = 2</li>
                        <li>D = 1</li>
                        <li>E = 0</li>
                      </ul>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th colSpan={2} className="border border-gray-400 text-left">
                    TOTAL MUTU
                  </th>
                  <th
                    colSpan={3}
                    className="border border-gray-400 text-center"
                  >
                    {totalMutu}
                  </th>
                </tr>
                <tr>
                  <th colSpan={2} className="border border-gray-400 text-left">
                    TOTAL SKS YANG TELAH DIAMBIL
                  </th>
                  <th
                    colSpan={3}
                    className="border border-gray-400 text-center"
                  >
                    {totalSKS}
                  </th>
                </tr>
                <tr>
                  <th colSpan={2} className="border border-gray-400 text-left">
                    INDEKS PRESTASI KUMULATIF (IPK)
                  </th>
                  <th
                    colSpan={3}
                    className="border border-gray-400 text-center"
                  >
                    {ipk.toFixed(2)}
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan={5}
                    className="border border-gray-400 text-center"
                  >
                    <small>{`<Pengolahan Data KHS Menggunakan Web ini adalah sah>`}</small>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <Image
          className="table-footer-group"
          id="header-print"
          src="/print/kop_bawah.jpg"
          alt="bottom footer"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handlePrint}
          className="btn btn-success text-white mt-5"
        >
          Cetak KHS
        </button>
      </div>
      <small className="flex justify-end mt-2 text-red-500">
        * Disarankan menggunakan Komputer / Laptop untuk hasil yang lebih baik.
      </small>
    </div>
  );
};

export default Khs;
