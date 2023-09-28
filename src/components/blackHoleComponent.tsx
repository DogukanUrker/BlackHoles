export function blackHoleComponent(blackhole: string) {
  return (
    <div className="bg-neutral-900 p-2 my-4 mx-6 rounded hover:scale-110 duration-200">
      <div className="h-fit flex flex-col items-center">
        <a href={`/blackhole/${blackhole.id}`}>
          <img
            src={blackhole.image}
            className="w-56 h-56 mx-auto mb-2 rounded drop-shadow-md hover:scale-105 duration-200"
            loading="lazy"
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
