import React from "react";
import { backgrounds } from "../components/backgrounds";
import "../styles/Main.css";

export default function Main() {
  let back_img = Number(new Date().getSeconds()) % backgrounds.length;

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
        <div className="main-desc">2022/07/28 ~ 2022/07/31 </div>
        <div className="main-desc">서울에서 울릉도를 거쳐 독도까지 </div>
        <button className="main-btn-map">관광지도</button>
        <button className="main-btn-video">유투브 링크</button>
        <div className="main-footer">
          Haechan Park, Jaesun Park, Seoyeon Park, Jonghyun Park (not a family)
        </div>
        <div className="main-footer">
          made by. Jaesun Park,{" "}
          <a href="https://github.com/moran991231">GitHub @moran991231</a>
        </div>
      </div>
    </div>
  );
}
