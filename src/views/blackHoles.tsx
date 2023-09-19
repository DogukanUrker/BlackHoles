import axios from "axios";
import { API } from "../constants";
import { useState, useEffect } from "react";
import { blackholesComponent } from "../components/blackhole";
export default function blackholes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API}data`).then((json) => setData(json.data));
  }, []);
  const renderData = () => {
    return data.map((data) => {
      return blackholesComponent(data);
    });
  };
  return (
    <div className="text-neutral-50 flex  flex-wrap justify-center">
      {renderData()}
    </div>
  );
}
