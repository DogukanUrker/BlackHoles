export function blackHoleDetailedComponent(blackhole: string) {
  return (
    <div className="bg-neutral-800 p-2 m-4 rounded w-[32rem] mx-auto">
      <div>
        <img src={blackhole.image} className="w-64 mx-auto mb-2 rounded" />
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Name:</p> {blackhole.name[0]}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>List:</p> {blackhole.list}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Kind:</p> {blackhole.kind}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Type:</p> {blackhole.type}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Age:</p> {blackhole.age.text}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Constellation:</p> {blackhole.constellation}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Right Ascension:</p> {blackhole.rightAscension}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Declination:</p> {blackhole.declination}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Coordinates:</p> {blackhole.coordinates}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Redshift:</p> {blackhole.redshift}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Apparent Magnitude:</p> {blackhole.apparentMagnitude}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Absolute Magnitude:</p> {blackhole.absoluteMagnitude}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Discovery Year:</p> {blackhole.discovery.year}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Discovery Location:</p> {blackhole.discovery.location}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Discoverer:</p> {blackhole.discovery.discoverer}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Solar Mass:</p> {blackhole.solarmass.text}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Radius:</p> {blackhole.radius}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Luminosity:</p> {blackhole.luminosity}
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Temperature:</p> {blackhole.temperature.kelvin} K
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <p>Distance:</p> {blackhole.distance.ly} Light Year
      </div>
      <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
        <a href={blackhole.wikipedia} target="_blank">
          WikiPedia 📕
        </a>
        <a href={blackhole.map} target="_blank">
          Map 🗺️
        </a>
      </div>
    </div>
  );
}
