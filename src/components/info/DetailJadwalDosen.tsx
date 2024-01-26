import Image from "next/image";
import React from "react";

const DetailJadwalDosen = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src={"/jadwal/date.svg"}
          alt="date icon"
          width={25}
          height={25}
        />
        <span className="font-bold">Jadwal Mengajar Dosen (Nama Dosen)</span>
      </div>

      <div className="md:ml-8 mt-4">
        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead className="bg-[#DEE1E6] text-center">
              <tr>
                <th>No.</th>
                <th>Jam</th>
                <th>Hari</th>
                <th>Kelas</th>
                <th>Kode MTK</th>
                <th>Matakuliah</th>
                <th>SKS</th>
                <th>Kampus</th>
                <th>Ruang</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover text-center">
                <th>1</th>
                <td>17:30 - 19:30</td>
                <td>Senin</td>
                <td>
                  <span className="badge badge-success text-white font-bold">
                    44.3D.25
                  </span>
                </td>
                <td>0217</td>
                <td>Digital Video Editing</td>
                <td>3</td>
                <td>M1</td>
                <td>Ruang 207</td>
              </tr>
              <tr className="hover text-center">
                <th>1</th>
                <td>19:30 - 21:30</td>
                <td>Senin</td>
                <td>
                  <span className="badge badge-success text-white font-bold">
                    44.3C.25
                  </span>
                </td>
                <td>0217</td>
                <td>Digital Video Editing</td>
                <td>3</td>
                <td>M1</td>
                <td>Ruang 307</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-success text-white mt-5">
            Cetak Jadwal Mengajar Dosen
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailJadwalDosen;
