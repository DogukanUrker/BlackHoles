export default function NotFound() {
  return (
    <>
      <div className="w-fit mx-auto mt-32 p-2 text-left select-none  text-neutral-50 font-semibold">
        <p className="text-4xl">Hmm.</p>
        <p className="text-xl mb-6 ">Looks like fell into a Black Hole. 😕</p>
        <a href="/" className="text-center hover:text-neutral-300 duration-150">
          Click to return to the Milky Way. 🌌
        </a>
      </div>
    </>
  );
}
