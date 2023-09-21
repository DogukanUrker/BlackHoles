export function blackHoleComponent(data: string) {
  return (
    <div className="bg-neutral-800 p-2 m-4 rounded w-[26rem] mx-auto">
      <div className="h-96 flex items-center">
        <img
          src={data.image}
          className="w-64 mx-auto mb-2 rounded drop-shadow-md"
        />
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2 ">
        <p>Name:</p>{" "}
        <a
          href={`/blackhole/${data.id}`}
          className="text-sky-300 hover:text-sky-400 duration-150"
        >
          {data.name[0]}
        </a>
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>List:</p> {data.list}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <a href={data.wikipedia} target="_blank">
          WikiPedia 📕
        </a>
        <a href={data.map} target="_blank">
          Map 🗺️
        </a>
      </div>
    </div>
  );
}
