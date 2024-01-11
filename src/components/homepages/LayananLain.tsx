import dataLayananHome from "../../utils/dataLayananHome.json";

// card ini akan menggantikan bagian home di bawah arsip berita mahasiswa
const LayananLain = () => {
  const data = dataLayananHome;
  return (
    <div className="flex flex-wrap gap-2 justify-start">
      {data.map((item) => (
        <>
          <div className="card w-full md:flex-1 md:min-w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <ol className="list-decimal px-4">
                {item.description.map((desc) => (
                  <li key={desc.id} className="mb-2">
                    {desc.name}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default LayananLain;
