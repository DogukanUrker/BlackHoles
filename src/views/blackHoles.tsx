import axios from "axios";
import { API } from "../constants";
import { useState, useEffect } from "react";
import { blackHoleComponent } from "../components/blackHoleComponent";
import { searchBar } from "../components/searchBarComponent";
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
      {searchBar(setInput)}
      <div className="text-neutral-50 flex  flex-wrap justify-center">
        {renderData()}
      </div>
    </>
  );
}
