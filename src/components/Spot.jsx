import React from "react";
import "../styles/Spot.css";

export default function Spot({ spot_info }) {
  if (!spot_info)
    return (
      <div className="spot-con">
        <div className="spot-alert">지도에서 마크를 클릭해주세요.</div>
      </div>
    );
  return (
    <div className="spot-con">
      <div className="spot-title">{spot_info?.title}</div>
      <div className="spot-addr">
        <a
          href={`https://map.kakao.com/link/map/${spot_info.title},${spot_info.latlng.lat},${spot_info.latlng.lng}`}
        >
          {spot_info?.addr}
        </a>
      </div>
      <div className="spot-desc">{spot_info?.desc}</div>
      <div className="spot-images"></div>
    </div>
  );
}
