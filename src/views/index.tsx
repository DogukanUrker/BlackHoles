export default function index() {
  return (
    <div className="body">
      <div className="rounded-md w-fit mx-auto mt-32 p-2 text-center select-none  text-neutral-50 font-semibold">
        <p className="text-4xl mb-6">Black Holes</p>
        <a
          href="/blackholes"
          className="text-center hover:text-neutral-300 duration-150"
        >
          Click to see all Black Holes.
        </a>{" "}
        <br />
        <a
          href="/go"
          className="text-center hover:text-neutral-300 duration-150"
        >
          Click to find Black Holes by ID.
        </a>
      </div>
    </div>
  );
}
