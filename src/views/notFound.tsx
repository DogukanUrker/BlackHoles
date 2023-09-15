export default function NotFound() {
  return (
    <>
      <div className="body">
        <div className="w-full h-screen pt-36 text-left select-none  text-neutral-50 font-semibold backdrop-brightness-95">
          <div className="w-fit mx-auto">
            {" "}
            <p className="text-4xl">Hmm.</p>
            <p className="text-xl mb-6 ">
              Looks like fell into a Black Hole. 😕
            </p>
            <a
              href="/"
              className="text-center hover:text-neutral-300 duration-150"
            >
              Click to return to the Milky Way. 🌌
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
