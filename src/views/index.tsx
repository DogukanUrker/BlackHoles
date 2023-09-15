export default function index() {
  return (
    <div className="body">
      <div className="rounded-md w-fit mx-auto mt-32 p-2 text-center select-none  text-neutral-50 font-semibold">
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
          href="/random"
          className="text-center hover:text-neutral-300 duration-150 text-xl"
        >
          Click for a random Black Hole.
        </a>
        <br />
        <a
          href="/go"
          className="text-center hover:text-neutral-300 duration-150 text-xl"
        >
          Click to find Black Holes by ID.
        </a>
      </div>
    </div>
  );
}
