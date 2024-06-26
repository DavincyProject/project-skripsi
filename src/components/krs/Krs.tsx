"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Krs = () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
          <span className="font-bold">Kartu Rencana Studi</span>
        </div>

        <div className="md:ml-8 mt-4" id="custom-print">
          <div className="flex max-w-[336px] justify-between gap-5 items-start">
            <div>
              <h1 className="leading-7">NIM</h1>
              <h1 className="leading-7">Nama</h1>
              <h1 className="leading-7">Program</h1>
              <h1 className="leading-7">Kelas</h1>
              <h1 className="leading-7">Semester</h1>
            </div>
            <div className="flex grow flex-col items-stretch px-5">
              <div className="text-zinc-900 leading-7">: 17xxxxxx</div>
              <div className="text-zinc-900 leading-7">: Username</div>
              <div className="text-zinc-900 leading-7">: Sarjana (S1)</div>
              <div className="text-zinc-900 leading-7">: 17.8A.26</div>
              <div className="text-zinc-900 leading-7">: 8</div>
            </div>
          </div>

          <div className="overflow-x-auto mt-5">
            <table className="table">
              {/* head */}
              <thead className="bg-[#DEE1E6] text-center">
                <tr>
                  <th
                    className="border border-gray-400 p-1 text-black"
                    rowSpan={3}
                  >
                    No.
                  </th>

                  <th
                    className="border border-gray-400 p-1 text-black"
                    rowSpan={3}
                  >
                    Kode
                  </th>

                  <th
                    className="border border-gray-400 p-1 text-black"
                    rowSpan={3}
                  >
                    Mata Kuliah
                  </th>
                  <th
                    className="border border-gray-400 p-1 text-black"
                    rowSpan={3}
                  >
                    SKS
                  </th>
                  <th
                    className="border border-gray-400 p-1 text-black"
                    colSpan={4}
                  >
                    Paraf
                  </th>
                </tr>

                <tr>
                  <th
                    className="border border-gray-400 p-1 text-black"
                    colSpan={2}
                  >
                    UTS
                  </th>

                  <th
                    className="border border-gray-400 p-1 text-black"
                    colSpan={2}
                  >
                    UAS
                  </th>
                </tr>
                <tr>
                  <th className="border border-gray-400 p-1 text-black">
                    Tgl/prf
                  </th>

                  <th className="border border-gray-400 p-1 text-black">kd</th>
                  <th className="border border-gray-400 p-1 text-black">
                    Tgl/prf
                  </th>

                  <th className="border border-gray-400 p-1 text-black">kd</th>
                </tr>
              </thead>

              <tbody className="text-center border border-gray-400">
                <tr>
                  <td>1</td>
                  <td>106</td>
                  <td>Pendidikan Kewarganegaraan</td>
                  <td>2</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>253</td>
                  <td>Bahasa Indonesia</td>
                  <td>2</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>772</td>
                  <td>Etika Profesi Teknologi Informasi dan Komunikasi</td>
                  <td>3</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
              </tbody>
              <tfoot className="text-black bg-[#DEE1E6] border border-gray-400 p-1 ">
                <tr>
                  <th colSpan={3} className="text-right font-bold">
                    Jumlah SKS yang Diambil
                  </th>
                  <td className=" text-center">7</td>
                  <td colSpan={4}></td>
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
          Cetak KRS
        </button>
      </div>
      <small className="flex justify-end mt-2 text-red-500">
        * Disarankan menggunakan Komputer / Laptop untuk hasil yang lebih baik.
      </small>
    </div>
  );
};

export default Krs;
