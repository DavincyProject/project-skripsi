import Image from "next/image";
import pdfname from "../../utils/pdfname.json";

// akan menggantikan arsip berita mahasiswa di halaman beranda students
const PdfTable = () => {
  return (
    <>
      <h1 className="text-justify mb-1">
        Selamat Datang di fasilitas layanan kemahasiswaan Universitas Bina
        Sarana Informatika. Fasilitas ini merupakan salah satu bentuk pelayanan
        dari Universitas Bina Sarana Informatika dalam penyediaan informasi
        akademik kemahasiswaan dan diharapkan seluruh mahasiswa UBSI yang masih
        aktif dapat memperoleh informasi dengan mudah melalui website ini.
      </h1>
      <h1 className="font-bold text-xl my-2">Dokumen Rilis</h1>
      <section>
        <div className="overflow-y-scroll max-h-[80dvh] custom-scrollbar">
          <table className="table border shadow-md rounded-md">
            {/* head */}
            <thead className="sticky top-0 bg-white border-t-black">
              <tr>
                <th className="text-center">No</th>
                <th>File Name</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              {pdfname.map((pdf: any) => (
                <tr key={pdf.id} className="hover">
                  <th className="text-center">{pdf.id}</th>
                  <td>
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/pdf_icon.svg"
                        width={25}
                        height={25}
                        alt="pdf logo"
                      />
                      <span>{pdf.name}</span>
                    </div>
                  </td>
                  <td>{pdf.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-end">
          <div className="join my-5">
            <button className="join-item btn bg-[#86B6F6] hover:bg-[#B6BBC4]">
              «
            </button>
            <button className="join-item btn bg-[#B4D4FF] hover:bg-[#B6BBC4]">
              1
            </button>
            <button className="join-item btn bg-[#B4D4FF] hover:bg-[#B6BBC4]">
              ...
            </button>
            <button className="join-item btn bg-[#B4D4FF] hover:bg-[#B6BBC4]">
              10
            </button>
            <button className="join-item btn bg-[#86B6F6] hover:bg-[#B6BBC4]">
              »
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PdfTable;
