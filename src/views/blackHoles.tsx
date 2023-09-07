import axios from "axios";
import { API } from "../constants";
import { useState, useEffect } from "react";
export default function blackholes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API}data/`).then((json) => setData(json.data));
  }, []);
  const renderData = () => {
    return data.map((data) => {
      return (
        <div className="bg-neutral-800 p-2 m-4 rounded w-[26rem] mx-auto">
          <div>
            <img src={data.image} className="w-64 mx-auto mb-2 rounded" />
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Name:</p> {data.name[0]}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">List:</p> {data.list}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Kind:</p> {data.kind}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Type:</p> {data.type}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Age:</p> {data.age.text}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Constellation:</p> {data.constellation}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Right Ascension:</p>{" "}
            {data.rightAscension}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Declination:</p> {data.declination}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Coordinates:</p> {data.coordinates}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Redshift:</p> {data.redshift}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Apparent Magnitude:</p>{" "}
            {data.apparentMagnitude}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Absolute Magnitude:</p>{" "}
            {data.absoluteMagnitude}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Discovery Year:</p>{" "}
            {data.discovery.year}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Discovery Location:</p>{" "}
            {data.discovery.location}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Discoverer:</p>{" "}
            {data.discovery.discoverer}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Solar Mass:</p> {data.solarmass.text}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Radius:</p> {data.radius}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Luminosity:</p> {data.luminosity}
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Temperature:</p>{" "}
            {data.temperature.kelvin} K
          </div>
          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <p className="inline-block">Distance:</p> {data.distance.ly} Light
            Year
          </div>

          <div className="flex justify-between bg-neutral-900 p-2 rounded m-2">
            <a href={data.wikipedia} target="_blank">
              WikiPedia
            </a>
            <a href={data.map} target="_blank">
              Map
            </a>
          </div>
        </div>
      );
    });
  };
  return <div className="text-neutral-50">{renderData()}</div>;
}
