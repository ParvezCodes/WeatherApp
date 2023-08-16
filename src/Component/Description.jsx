import React from "react";
import "./description.css";

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { BiHappyAlt } from "react-icons/bi";
import { MdCompress } from "react-icons/md";
import {MdOutlineWaterDrop } from "react-icons/md";
import {PiWindDuotone } from "react-icons/pi";


export default function Description({ weather, unit }) {
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "m/h";

  const card = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
        id: 3,
        icon: <BiHappyAlt />,
        title: "Feels like",
        data: weather.feels_like.toFixed(),
        unit: tempUnit,
    },
    {
        id: 4,
        icon: <MdCompress />,
        title: "Pressure",
        data: weather.pressure,
        unit: "hPa",
    },
    {
        id: 5,
        icon: <MdOutlineWaterDrop />,
        title: "Humidity",
        data: weather.humidity,
        unit: "%",
    },
    {
        id: 6,
        icon: <PiWindDuotone />,
        title: "Wind Speed",
        data: weather.speed.toFixed(),
        unit: windUnit,
    },
  ];

  return (
    <div className="section section__description">
      {card.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description_card_icon">
           {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
}
