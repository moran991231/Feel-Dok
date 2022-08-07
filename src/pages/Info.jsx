import React from "react";
import { Map } from "react-kakao-maps-sdk";
import "../styles/Info.css";

export default function Info() {
  return (
    <div className="info-con">
      <div className="info-btn-con">
        <button className="info-btn">울릉도</button>
        <button className="info-btn">독도</button>
      </div>
      <div className="info-panel">
        <div className="map-con">
          <Map
            className="map"
            center={{
              lat: 37.505,
              lng: 130.85,
            }}
            level={7}
            style={{ width: "100%", height: "100%" }}
          ></Map>
        </div>
        <div className="detail-con">he</div>
      </div>
    </div>
  );
}
