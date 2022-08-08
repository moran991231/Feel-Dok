import React from "react";
import { backgrounds } from "../components/backgrounds";
import "../styles/Main.css";
import { useNavigate } from "react-router-dom";

export default function Main() {
  let back_img = Number(new Date().getSeconds()) % backgrounds.length;
  const navigate = useNavigate();

  return (
    <div className="main-con">
      <img
        className="main-back"
        src={backgrounds[back_img]}
        alt={" "}
        align="center"
      />
      <div className="main-front">
        <div className="main-title">Feel-Dok</div>
        <div className="main-desc">
          2022/07/28 ~ 2022/07/31 서울에서 울릉도를 거쳐 독도까지
        </div>

        <button className="main-btn main-map" onClick={() => navigate("/info")}>
          관광지도 바로가기
        </button>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-by8hxBleKA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="main-footer">
          Haechan Park, Jaesun Park, Seoyeon Park, Jonghyeon Park (not a family)
          (feat. Univ. of Seoul)
        </div>
        <div className="main-footer">
          made by. Jaesun Park{" "}
          <a href="https://github.com/moran991231">GitHub @moran991231</a>
        </div>
      </div>
    </div>
  );
}
