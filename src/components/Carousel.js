import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rows from "./Row";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Carousel.css";

function Carousel() {
  // const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [movies, setMovies] = useState([{}]);
  const [index, setIndex] = useState();

  const getMovies = async () => {
    const response = await fetch(
      //pageCnt
      "https://api.themoviedb.org/3/discover/movie?api_key=86fc153457462429d8ff36735a84752d&with_watch_providers=337&watch_region=KR&language=ko&page=2"
    );
    const json = await response.json();
    // console.log("json" + json);
    setMovies(json.results); //api로 부터 얻은 data로 state를 변경
    // console.log("result" + json.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getImgUrl = (path, size = 200) => {
    return `https://image.tmdb.org/t/p/w${size}${path}`;
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div style={{ margin: "100px 40px" }}>
      <h1
        style={{
          color: "white",
          marginBottom: "40px",
          fontFamily: "Happiness-Sans-Title",
        }}
      >
        오늘의 인기영화
      </h1>
      <Slider {...settings}>
        {movies.map((movie, i) => {
          return (
            <div className="imgbox">
              <img
                style={{ cursor: "pointer" }}
                src={getImgUrl(movie.poster_path)}
                alt="포스터 "
                onClick={() => {
                  setIndex(i);
                  setModalIsOpen(true);
                }}
              />

              {/* <h2 style={{ color: "white" }}>{movie.title}</h2> */}
            </div>
          );
        })}
      </Slider>

      <Modal
        index={index}
        className="Modal_main"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <Contents movie={movies} index={index} />
        <button
          className="modal_closebtn"
          onClick={() => setModalIsOpen(false)}
        >
          창닫기{" "}
        </button>
      </Modal>
    </div>
  );
}

function Contents({ movie, index }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div key={movie.id} style={{ display: "inline-block" }}>
      {/* <img src={getImgUrl(movie.poster_path, 100)} alt="포스터 " /> */}
      <div className="imgbox">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {
            setModalIsOpen(true);
          }}
          src={`https://image.tmdb.org/t/p/w200${movie[index].poster_path}`}
          alt="포스터 "
        />
        <div className="contents_box">
          <div className="titlebox">
            <h1>{movie[index].title}</h1>
          </div>
          <div className="overviewbox">{movie[index].overview}</div>
          <div className="releasedate">개봉일: {movie[index].release_date}</div>
          <div className="vote"> 평점: {movie[index].vote_average}</div>
        </div>
      </div>

      {/* <h2 style={{ color: "white" }}>{movie.title}</h2> */}
    </div>
  );
}

export default Carousel;
