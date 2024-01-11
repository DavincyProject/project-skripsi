import Image from "next/image";
import dataAkademik from "../../utils/dataAkademik.json";
import dataMahasiswa from "../../utils/dataMahasiswa.json";

// akan berada di homepage sebagai informasi singkat
const ProfileCard = () => {
  return (
    <>
      <div className="card w-full bg-[#fafaff] shadow-xl">
        <div className="card-body">
          <div className="card-title mb-2">Quick Information</div>
          <div className="flex items-end gap-3 mb-2">
            <Image
              src={
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              }
              alt="profile image"
              loading="lazy"
              width={70}
              height={70}
              className="rounded-full"
            />

            <div>
              <h1 className="font-bold">Username</h1>
              <div
                className="tooltip"
                data-tip="Password Default adalah tanggal lahir anda yyyy/mm/dd"
              >
                <p>17*****5@bsi.ac.id</p>
              </div>
            </div>
          </div>
          <div className="card shadow-md p-3 bg-white">
            <h1 className="font-bold mb-2">Data Mahasiswa</h1>
            {dataMahasiswa.map((akademik) => (
              <div
                className="grid grid-cols-10 gap-2 my-1.5 place-items-center"
                key={akademik.id}
              >
                <Image
                  src={akademik.icon}
                  width={25}
                  height={25}
                  alt="icon akademik"
                  className="col-span-1"
                />
                <div className="col-span-9 w-full flex justify-between items-center gap-3  text-xs sm:text-sm md:text-md lg:text-base">
                  <h1>{akademik.title}</h1>
                  <div className="text-end">
                    {akademik.status ? (
                      akademik.status === "Active" ? (
                        <div className="badge badge-success text-white font-bold">
                          {" "}
                          {akademik.description}
                        </div>
                      ) : (
                        <div className="badge badge-error text-white font-bold">
                          {" "}
                          {akademik.description}
                        </div>
                      )
                    ) : (
                      <h1 className="font-semibold">{akademik.description}</h1>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="card shadow-md p-3 bg-white">
            <h1 className="font-bold mb-2">Data Akademik</h1>
            {dataAkademik.map((akademik) => (
              <div
                className="grid grid-cols-10 gap-2 my-1.5 place-items-start"
                key={akademik.id}
              >
                <Image
                  src={akademik.icon}
                  width={25}
                  height={25}
                  alt="icon akademik"
                  className="col-span-1"
                />
                <div className="col-span-9 w-full flex justify-between text-xs sm:text-sm md:text-md lg:text-base">
                  <h1>{akademik.title}</h1>
                  <div className="text-end">
                    {akademik.status ? (
                      akademik.status === "Lunas" ? (
                        <div className="badge badge-success text-white font-bold">
                          {" "}
                          {akademik.description}
                        </div>
                      ) : (
                        <div className="badge badge-error text-white font-bold">
                          {" "}
                          {akademik.description}
                        </div>
                      )
                    ) : (
                      <h1 className="font-semibold">{akademik.description}</h1>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
