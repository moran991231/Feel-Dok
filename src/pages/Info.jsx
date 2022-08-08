import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Navigate, useNavigate } from "react-router-dom";
import { Spot } from "../components";
import { landmarks } from "../components/landmarks";
import "../styles/Info.css";

function print_latlng() {
  const { kakao } = window;
  var geocoder = new kakao.maps.services.Geocoder();
  for (let ll of landmarks) {
    geocoder.addressSearch(ll.addr, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var latlng = { lat: Number(result[0].y), lng: Number(result[0].x) };
        console.log(ll.title, latlng);
      }
    });
  }
}

export default function Info() {
  const navigate = useNavigate();
  const dokdo_latlng = {
    latlng: { lat: 37.240832413738566, lng: 131.86738709769625 },
    level: 4,
  };
  const ulleung_latlang = {
    latlng: { lat: 37.50164277122346, lng: 130.86271135027033 },
    level: 7,
  };
  const [center_latlng, setCenter] = useState(ulleung_latlang);
  const [focused_landmark, setLandmark] = useState();
  useEffect(() => {
    // print_latlng();
  }, []);
  const onMapClick = (_t, mouseEvent) => {
    let coord = {
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    };
    console.log(coord);
  };
  const setCenterUlleung = () => setCenter(ulleung_latlang);
  const setCenterDokdo = () => setCenter(dokdo_latlng);

  const onLandmarkClick = (landmark) => () => {
    setLandmark(landmark);
    console.log(landmark.title, "clicked");
  };
  return (
    <div className="info-con">
      <div className="info-btn-con">
        <button className="info-btn home" onClick={() => navigate("../")}>
          홈
        </button>
        <button className="info-btn" onClick={setCenterUlleung}>
          울릉도
        </button>
        <button className="info-btn" onClick={setCenterDokdo}>
          독도
        </button>
      </div>
      <div className="info-panel">
        <div className="map-con">
          <Map
            className="map"
            center={center_latlng.latlng}
            level={center_latlng.level}
            style={{ width: "100%", height: "100%" }}
            onClick={onMapClick}
          >
            {landmarks.map((ll, i) => (
              <MapMarker
                key={`${ll.title}-${ll.latlng}`}
                position={ll.latlng}
                image={{
                  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                  size: {
                    width: 24,
                    height: 35,
                  },
                }}
                title={ll.title}
                onClick={onLandmarkClick(ll)}
              />
            ))}
          </Map>
        </div>
        <div className="detail-con">
          <Spot spot_info={focused_landmark} />
        </div>
      </div>
    </div>
  );
}
