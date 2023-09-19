export function blackholeComponent(data: string) {
  return (
    <div className="bg-neutral-800 p-2 m-4 rounded w-[26rem] mx-auto">
      <div>
        <img src={data.image} className="w-64 mx-auto mb-2 rounded" />
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Name:</p> {data.name[0]}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>List:</p> {data.list}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Kind:</p> {data.kind}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Type:</p> {data.type}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Age:</p> {data.age.text}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Constellation:</p> {data.constellation}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Right Ascension:</p> {data.rightAscension}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Declination:</p> {data.declination}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Coordinates:</p> {data.coordinates}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Redshift:</p> {data.redshift}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Apparent Magnitude:</p> {data.apparentMagnitude}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Absolute Magnitude:</p> {data.absoluteMagnitude}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Discovery Year:</p> {data.discovery.year}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Discovery Location:</p> {data.discovery.location}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Discoverer:</p> {data.discovery.discoverer}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Solar Mass:</p> {data.solarmass.text}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Radius:</p> {data.radius}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Luminosity:</p> {data.luminosity}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Temperature:</p> {data.temperature.kelvin} K
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Distance:</p> {data.distance.ly} Light Year
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

export function blackholesComponent(data: string) {
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
