export default function index() {
  return (
    <div className="body">
      <div className="w-full h-screen pt-36 text-center select-none  text-neutral-50 font-semibold backdrop-brightness-95">
        <p className="text-5xl mb-6 font-medium">Black Holes</p>
        <div className="flex flex-col justify-center">
          {" "}
          <a
            href="/blackholes"
            className="text-center hover:text-neutral-300 duration-150 text-xl m-1 w-fit mx-auto"
          >
            See all
          </a>
          <a
            href="/random"
            className="text-center hover:text-neutral-300 duration-150 text-xl m-1 w-fit mx-auto"
          >
            Random
          </a>
          <a
            href="/about"
            className="text-center hover:text-neutral-300 duration-150 text-xl m-1 w-fit mx-auto"
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}
