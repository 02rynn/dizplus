import { useEffect, useState } from "react";
import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";

function Row({ id, ger }) {
  // const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([{}]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let [index, setIndex] = useState();

  const getMovies = async () => {
    const response = await fetch(
      //pageCnt
      `https://api.themoviedb.org/3/discover/movie?api_key=86fc153457462429d8ff36735a84752d&with_watch_providers=337&with_genres=${id}&watch_region=KR&language=ko&page=2`
    );
    const json = await response.json();

    // console.log("json" + json);
    setMovies(json.results); //api로 부터 얻은 data로 state를 변경
    // console.log("result" + json.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // const getImgUrl = (path) => {
  //   return `https://image.tmdb.org/t/p/w100${path}`;
  // };
  //   console.log(getImgUrl());
  //   const getGenre = (gid) => {
  //     return "";
  //   };

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Rows">
      <div style={{ margin: "45px 40px" }}>
        <h1
          style={{
            color: "white",
            marginBottom: "40px",
            marginLeft: "20px",
            fontFamily: "Happiness-Sans-Title",
          }}
        >
          {ger}
        </h1>
        <Slider {...settings}>
          {movies.map((movie, i) => {
            return (
              <div key={movie.id} style={{ display: "inline-block" }}>
                {/* <img src={getImgUrl(movie.poster_path, 100)} alt="포스터 " /> */}
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setIndex(i);

                    setModalIsOpen(true);
                  }}
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt="포스터 "
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
          <div className="modal_contents">
            <Contents movie={movies} index={index} />
          </div>

          <button
            className="modal_closebtn"
            onClick={() => setModalIsOpen(false)}
          >
            창닫기
          </button>
        </Modal>
      </div>
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

export default Row;
