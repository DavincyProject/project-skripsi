import Image from "next/image";
import jadwal from "../../utils/jadwalKuliah.json";

const JadwalKuliah = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src={"/jadwal/date.svg"}
          alt="date icon"
          width={25}
          height={25}
        />
        <span className="font-bold">Jadwal Perkuliahan</span>
      </div>

      <div className="md:ml-8 mt-4">
        <h1 className="font-bold">Data Diri Anda</h1>
        <div className="flex max-w-[336px] justify-between gap-5 items-start">
          <div>
            <h1 className="leading-7">NIM</h1>
            <h1 className="leading-7">Nama</h1>
            <h1 className="leading-7">Fakultas</h1>
            <h1 className="leading-7">Jurusan</h1>
            <h1 className="leading-7">Kelas</h1>
          </div>
          <div className="flex grow flex-col items-stretch px-5">
            <div className="text-zinc-900 leading-7">: 17xxxxxx</div>
            <div className="text-zinc-900 leading-7">: Username</div>
            <div className="text-zinc-900 leading-7">
              : Teknik dan Informatika
            </div>
            <div className="text-zinc-900 leading-7">: Teknologi Informasi</div>
            <div className="text-zinc-900 leading-7">: 17.8A.26</div>
          </div>
        </div>

        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead className="bg-[#DEE1E6]">
              <tr>
                <th>No.</th>
                <th>Jam</th>
                <th>Hari</th>
                <th>Kode Dosen</th>
                <th>Mata Kuliah (Kode MTK)</th>
                <th>SKS</th>
                <th>Kel Praktek</th>
                <th>RPS</th>
                <th>Silabus</th>
                <th>Slide</th>
                <th>RTM</th>
                <th>Modul</th>
                <th>Kampus / Ruang</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((item) => (
                <tr key={item.id} className="hover text-center">
                  <th>{item.id}</th>
                  <td>{item.hours}</td>
                  <td>{item.days}</td>
                  <td>
                    <span className="badge badge-md badge-success text-white">
                      {item.kodeDosen}
                    </span>
                  </td>
                  <td>{item.kodeMTK}</td>
                  <td>{item.sks}</td>
                  <td>{item.KelPraktek}</td>
                  <td>
                    <div className="flex items-center justify-center">
                      <Image
                        src={item.rps}
                        alt="icon zip"
                        width={25}
                        height={25}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      <Image
                        src={item.silabus}
                        alt="icon zip"
                        width={25}
                        height={25}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      <Image
                        src={item.slide}
                        alt="icon zip"
                        width={25}
                        height={25}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      <Image
                        src={item.rtm}
                        alt="icon zip"
                        width={25}
                        height={25}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      <Image
                        src={item.modul}
                        alt="icon zip"
                        width={25}
                        height={25}
                      />
                    </div>
                  </td>
                  <td>{item.kampus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-success text-white mt-5">
            Cetak Jadwal Kuliah
          </button>
        </div>
      </div>
    </div>
  );
};

export default JadwalKuliah;
