import Image from "next/image";
import surat from "../../utils/surat.json";

const SuratCard = () => {
  return (
    <div className="flex justify-start flex-wrap w-full gap-5">
      {surat.map((suratCard) => (
        <div
          key={suratCard.id}
          className="card min-w-full md:min-w-[330px] flex-1 bg-base-100 shadow-xl"
        >
          <figure>
            <Image
              src={suratCard.img}
              alt="Shoes"
              width={1000}
              height={100}
              style={{ objectFit: "cover", height: "150px" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{suratCard.title}</h2>
            <p>{suratCard.description}</p>
            <div className="card-actions mt-2">
              <button className="btn btn-ghost bg-[#5B7EED] hover:bg-[#4d6edb] text-white font-bold">
                Ajukan Surat
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuratCard;
