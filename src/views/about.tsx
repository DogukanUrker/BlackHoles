export default function About() {
  return (
    <>
      <div className="body">
        <div className="backdrop-blur-sm rounded m-2 p-4 w-6/12 mx-auto mt-36 text-neutral-50 select-none text-center">
          <h1 className="text-5xl mb-6 font-medium">About</h1>
          <p className="text-xl">
            This list of <a href="/whatisblackhole">black holes</a> (and stars
            considered probable candidates) is organized by mass (including
            <a href="/whatisblackhole">black holes</a> of undetermined mass);
            some items in this API are galaxies or star clusters that are
            believed to be organized around a
            <a href="/whatisblackhole">black hole</a>.
          </p>
          <p className="text-xs mt-4">
            Made with 💖 by{" "}
            <a href="https://dogukanurker.com" target="_blank">
              Dogukan Urker
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
