import axios from "axios";
import { API } from "../constants";
import { useState, useEffect } from "react";
import { blackHoleComponent } from "../components/blackHoleComponent";
export default function blackholes() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios.get(`${API}data`).then((json) => setData(json.data));
  }, []);
  const renderData = () => {
    return data.map((blackhole) => {
      if (blackhole.name[0].toLowerCase().includes(input.toLowerCase())) {
        return blackHoleComponent(blackhole);
      }
    });
  };
  return (
    <>
      <div className="mx-auto w-fit mt-4">
        <input
          type="text"
          className="p-2 text-center rounded bg-neutral-900 text-neutral-50 focus:outline-0 focus:ring-1 focus:ring-sky-300 duration-150"
          placeholder="search"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="text-neutral-50 flex  flex-wrap justify-center">
        {renderData()}
      </div>
    </>
  );
}
