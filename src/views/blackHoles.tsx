import axios from "axios";
import { API } from "../constants";
import { useState, useEffect } from "react";
import { renderBlackHoles } from "../renderers/renderBlackHoles";
import { searchBar } from "../components/searchBarComponent";
export default function blackholes() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios.get(`${API}data`).then((json) => setData(json.data));
  }, []);
  return (
    <>
      {searchBar(setInput)}
      <div className="text-neutral-50 flex  flex-wrap justify-center">
        {renderBlackHoles(data, input)}
      </div>
    </>
  );
}
