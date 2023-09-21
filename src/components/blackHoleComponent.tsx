export function blackHoleComponent(blackhole: string) {
  return (
    <div className="bg-neutral-900 p-2 m-4 rounded mx-auto">
      <div className="h-fit flex flex-col items-center ">
        <a href={`/blackhole/${blackhole.id}`}>
          <img
            src={blackhole.image}
            className="w-64 h-64 mx-auto mb-2 rounded drop-shadow-md"
          />
        </a>
        <a
          href={`/blackhole/${blackhole.id}`}
          className="text-sky-300 hover:text-sky-400 duration-150 text-lg font-medium"
        >
          {blackhole.name[0]}
        </a>
      </div>
    </div>
  );
}
