import React, { Component } from "react";
import "./Settings.css";

function Settings() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className="settings-screen">
      <div className="slides">
        <div className="img_container">
          <img src="images/앵그리.jpg" />
        </div>
        <div className="img_container">
          <img src="images/라푼젤.jpg" />
        </div>
        <div className="img_container">
          <img src="images/미니마우스.png" />
        </div>
        <div className="img_container">
          <img src="images/바넬로피.jpg" />
        </div>
        <div className="img_container">
          <img src="images/엘사증사.jpeg" />
        </div>
        <div className="img_container">
          <img src="images/토끼.jpg" />
        </div>
      </div>

      <div className="btn">
        <button id="프로필편집">프로필 편집</button>
      </div>

      <div className="settings_menus">
        <div className="settings_menu">
          <p>관심 콘텐츠</p>
        </div>

        <div className="settings_menu">
          <p>앱설정</p>
        </div>

        <div className="settings_menu">
          <p>계정</p>
        </div>

        <div className="settings_menu">
          <p>법률센터</p>
        </div>

        <div className="settings_menu">
          <p>고객센터</p>
        </div>

        <div className="settings_menu">
          <p>로그아웃</p>
        </div>

        <div className="settings_menu">
          <p>관심 콘텐츠</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
