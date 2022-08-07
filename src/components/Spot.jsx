import React from "react";
import "../styles/Spot.css";

export default function Spot({ spot_info }) {
  return (
    <div className="spot-con">
      <div className="spot-title">{spot_info.title}</div>
      <div className="spot-addr">{spot_info.addr}</div>
      <div className="spot-desc">{spot_info.desc}</div>
      <div className="spot-images">images</div>
    </div>
  );
}
