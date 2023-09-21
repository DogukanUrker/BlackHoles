import axios from "axios";
import { API } from "../constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blackHoleDetailedComponent } from "../components/blackHoleDetailedComponent";
export default function blackhole() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API}data/${id}`).then((json) => setData(json.data));
  }, []);
  const renderData = () => {
    return data.map((data) => {
      return blackHoleDetailedComponent(data);
    });
  };
  return <div className="text-neutral-50">{renderData()}</div>;
}
