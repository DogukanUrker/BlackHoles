import axios from "axios";
import { API } from "../constants";
import { useState, useEffect } from "react";
import { renderBlackHole } from "../renderers/renderBlackHole";
function refreshPage() {
  window.location.reload();
}
export default function randomBlackHole() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API}random`).then((json) => setData(json.data));
  }, []);
  return (
    <div className="text-neutral-50">
      <button
        onClick={refreshPage}
        className="p-2 text-neutral-50 bg-neutral-900 font-medium rounded hover:bg-neutral-800 duration-150 absolute top-2 left-2"
      >
        Random
      </button>
      {renderBlackHole(data)}
    </div>
  );
}
