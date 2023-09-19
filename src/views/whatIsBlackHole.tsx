export default function WhatIsBlackHole() {
  return (
    <>
      <div className="body">
        <div className="backdrop-blur-sm rounded m-2 p-4 w-7/12 mx-auto mt-32 text-neutral-50 select-none text-center">
          <h1 className="text-5xl mb-6 font-medium">Black Hole</h1>
          <p className="break-keep">
            A black hole is a region of spacetime where gravity is so strong
            that nothing, including light or other electromagnetic waves, has
            enough energy to escape it. The theory of general relativity
            predicts that a sufficiently compact mass can deform spacetime to
            form a black hole. The boundary of no escape is called the event
            horizon. Although it has a great effect on the fate and
            circumstances of an object crossing it, it has no locally detectable
            features according to general relativity. In many ways, a black hole
            acts like an ideal black body, as it reflects no light. Moreover,
            quantum field theory in curved spacetime predicts that event
            horizons emit Hawking radiation, with the same spectrum as a black
            body of a temperature inversely proportional to its mass. This
            temperature is of the order of billionths of a kelvin for stellar
            black holes, making it essentially impossible to observe directly.
          </p>
          <p className="mt-4">
            <a href="https://en.wikipedia.org/wiki/Black_hole" target="_blank">
              More
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
