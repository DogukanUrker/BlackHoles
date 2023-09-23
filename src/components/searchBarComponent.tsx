export function searchBar(setInput) {
  return (
    <div className="mx-auto w-fit mt-4">
      <input
        type="text"
        className="p-2 text-center rounded bg-neutral-900 text-neutral-50 focus:outline-0 focus:ring-1 focus:ring-sky-300 duration-150"
        placeholder="search"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
