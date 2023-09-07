import { Routes, Route } from "react-router-dom";
import Index from "./views/index";
import BlackHoles from "./views/blackholes";
import BlackHole from "./views/blackhole";
import NotFound from "./views/notFound";
function App() {
  return (
    <>
      {" "}
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blackholes" element={<BlackHoles />} />
          <Route path="blackhole">
            <Route path=":id" element={<BlackHole />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
