import axios from "axios";
import { API } from "../constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { renderBlackHole } from "../renderers/renderBlackHole";
export default function blackhole() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API}data/${id}`).then((json) => setData(json.data));
  }, []);

  return (
    <div className="text-neutral-50">
      <a
        href="/blackholes"
        className="p-2 text-neutral-50 bg-neutral-900 font-medium rounded hover:bg-neutral-800 duration-150 absolute top-2 left-2"
      >
        All
      </a>
      {renderBlackHole(data)}
    </div>
  );
}
