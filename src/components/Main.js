import { useNavigate } from "react-router-dom";
import "./Main.css";
import ReactPlayer from "react-player";
import Carousel from "./Carousel.js";
import React, { Component, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Row from "./Row";

// import { FaPlay } from "react-icons/fa";
// import { FaPlay } from "@fortawesome/free-solid-svg-icons";
// import {} from "@fortawesome/free-regular-svg-icons";
//import YouTube from "react-youtube";

function Main() {
  let navigate = useNavigate();

  return (
    <div className="background">
      <nav className="nav">
        <ul className="nav__list">
          <div className="left">
            <li className="nav__btn">
              <img
                className="logo_img"
                src="images/whitelogo.png"
                onClick={() => {
                  navigate("/main");
                }}
                style={{ cursor: "pointer" }}
              />
            </li>

            <li className="nav__btn">
              <span className="home">홈</span>
            </li>

            <li className="nav__btn">
              <span>TV</span>
            </li>
          </div>

          <div className="right">
            <li className="nav__btn">
              <img
                style={{ cursor: "pointer" }}
                className="search"
                src="images/search.png"
                onClick={() => {
                  navigate("/search");
                }}
              />
            </li>

            <li className="nav__btn">
              <img
                style={{ cursor: "pointer" }}
                id="elsa"
                src="images/엘사증사.jpeg"
                onClick={() => {
                  navigate("/settings");
                }}
              />
            </li>
          </div>
        </ul>
      </nav>

      {/*메인 겨울왕국 소개부분 */}

      <header className="header">
        <div className="video-box" id="area">
          <ReactPlayer
            className="player"
            url={"https://youtu.be/eSEs4B4H-EA"}
            width="500px"
            heigth="220px"
            playing={true}
            muted={true}
            controls={false}
          />

          <div className="video-text">
            <span style={{ color: "white" }}>겨울왕국2</span>

            <div className="buttons">
              <button>
                {/* <FontAwesomeIcon icon="fa-solid fa-play" /> */}
                {/*아이콘 추가하기  */}
                영화 재생하기
              </button>

              <button>{/*아이콘 추가하기  */}+ my list</button>
            </div>

            <div className="overview">
              내 마법의 힘은 어디서 왔을까? 어느날 부턴가 의문의 목소리가 엘사를
              부르고, 평화로운 아렌델 왕국을 위협한다.
              <br />
              트롤은 모든 것은 과거에서 시작되었음을 알려주며 엘사의 힘의 비밀과
              진실을 찾아 떠나야한다고 조언한다.
              <br />
              위험에 빠진 아렌델 왕국을 구해야만 하는 엘사와 안나는 과거의
              진실을 찾아 놀라운 모험을 떠나게 되는데....
            </div>
          </div>
        </div>
      </header>

      {/*로고 버튼 5개 */}

      <div className="undervideo">
        <div className="logo_buttons">
          <div className="button_container">
            <button>
              <img id="디즈니" src="images/월트디즈니로고.png" alt="" />
            </button>
          </div>

          <div className="button_container">
            <button>
              <img id="마블" src="images/마블로고.png" alt="" />
            </button>
          </div>

          <div className="button_container">
            <button>
              <img id="내셔널" src="images/내셔널로고.png" alt="" />
            </button>
          </div>

          <div className="button_container">
            <button>
              <img id="스타" src="images/스타워즈로고.png" alt="" />
            </button>
          </div>

          <div className="button_container">
            <button>
              <img id="픽사" src="images/픽사로고.png" alt="" />
            </button>
          </div>
        </div>

        {/* <div className="slides"> */}
        {/*슬라이더 */}
        <div className="slide1">
          <Carousel />
        </div>

        {/*ROW 부분 */}
        <div className="slide2">
          <Row id="16" ger="애니메이션" />
        </div>

        <div className="slide3">
          <Row id="28" ger="액션" />
        </div>

        <div className="slide4">
          <Row id="10751" ger="가족" />
        </div>

        <div className="slide5">
          <Row id="14" ger="판타지" />
        </div>
      </div>
    </div>
  );
}

export default Main;
