export default function index() {
  return (
    <div className="body">
      <div className="w-full h-screen pt-36 text-center select-none  text-neutral-50 font-semibold backdrop-brightness-95">
        <p className="text-5xl mb-6 font-medium">Black Holes</p>
        <br />
        <a
          href="/blackholes"
          className="text-center hover:text-neutral-300 duration-150 text-xl"
        >
          Click to see all Black Holes.
        </a>{" "}
        <br />
        <a
          href="/search"
          className="text-center hover:text-neutral-300 duration-150 text-xl"
        >
          Click to search Black Holes.
        </a>
        <br />
        <a
          href="/random"
          className="text-center hover:text-neutral-300 duration-150 text-xl"
        >
          Click for a random Black Hole.
        </a>
      </div>
    </div>
  );
}
