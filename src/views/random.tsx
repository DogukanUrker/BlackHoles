import axios from "axios";
import { API } from "../constants";
import { useState, useEffect } from "react";
import { blackholeComponent } from "../components/blackhole";
function refreshPage() {
  window.location.reload();
}
export default function randomBlackHole() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API}random`).then((json) => setData(json.data));
  }, []);
  const renderData = () => {
    return data.map((data) => {
      return blackholeComponent(data);
    });
  };
  return (
    <div className="text-neutral-50">
      <button
        onClick={refreshPage}
        className="p-2 text-neutral-950 bg-neutral-50 font-medium rounded hover:bg-neutral-200 duration-150 absolute top-2 left-2"
      >
        Random
      </button>
      {renderData()}
    </div>
  );
}
