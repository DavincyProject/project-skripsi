import Image from "next/image";

const BuatSuratKeterangan = () => {
  return (
    <div>
      {/* content start here */}
      <div className="flex items-center gap-2">
        <Image
          src={"/surat/doc_icon.svg"}
          alt="home icon"
          width={25}
          height={25}
        />
        <span className="font-bold">Surat Pengantar Yang Telah Diajukan</span>
      </div>

      <div className="md:ml-8 mt-1">
        <p className="text-justify text-sm sm:text-md md:text-base">
          Selamat Datang{" "}
          <span className="text-red-500 font-bold">Username</span> pada laman
          Pembuatan Surat Keterangan Online, Segala aktifitas yang anda lakukan
          di Ruang Mahasiswa ini dicatat secara otomatis oleh Program, gunakan
          fasilitas ini dengan bijaksana.
        </p>

        {/* form to fill up start here */}
        <div className="mt-5 flex flex-col ">
          <h1 className="font-bold">Surat Keterangan Versi Online</h1>
          <p className="text-red-500 text-justify text-sm md:text-md">
            Surat ini adalah surat yang dapat di cetak saat ini juga setelah
            anda menekan tombol proses dan sudah dianggap sah oleh BAAK BSI
            (karena menyertakan security print).
          </p>

          <textarea
            className="textarea textarea-bordered my-3 min-h-[30dvh]"
            placeholder="Ketik Surat Keterangan di Sini"
          ></textarea>

          <p className="text-center text-sm ">
            <span className="text-red-500">
              Ketik pada form kosong diatas maksud pembuatan surat keterangan
              serta harus diisi dengan data yang sebenarnya
            </span>
            , dan periksa sekali lagi apa yang anda telah ketikkan, setelah anda
            menekan tombol proses akan dibuatkan surat Keterangan dan data yang
            anda masukkan menjadi bukti bahwa anda pernah membuat surat
            Keterangan. Gunakan fasilitas ini dengan sebaik-baiknya dan
            bijaksana.
          </p>

          <div className="flex justify-center">
            <button className="mt-2 btn btn-primary text-white">Proses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuatSuratKeterangan;
