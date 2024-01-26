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
          <div
            aria-label="Pagination"
            className="flex items-center justify-center mt-2 text-gray-600"
          >
            <a className="p-2 mr-4 rounded hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
            <a className="px-4 py-2 rounded hover:bg-gray-100"> 1 </a>
            <a className="px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100">
              {" "}
              2{" "}
            </a>
            <a className="px-4 py-2 rounded hover:bg-gray-100"> 3 </a>
            <a className="px-4 py-2 rounded hover:bg-gray-100"> ... </a>
            <a className="px-4 py-2 rounded hover:bg-gray-100"> 9 </a>
            <a className="p-2 ml-4 rounded hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PdfTable;
