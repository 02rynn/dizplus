import { useEffect, useState } from "react";
import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Row({ id, ger }) {
  // const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([{}]);
  let [pageCnt, setPageCnt] = useState(0);
  let [genre, setGenres] = useState([]);

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

  const getImgUrl = (path) => {
    return `https://image.tmdb.org/t/p/w100${path}`;
  };
  //   console.log(getImgUrl());
  //   const getGenre = (gid) => {
  //     return "";
  //   };
  /*
  장르 id
  28: 액션
  16: 애니메이션
  10751 : 가족
  14: 판타지 
  10719 : 로맨스 
  */
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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

  console.log(movies);
  return (
    <div className="Rows">
      <div style={{ margin: "100px 0px" }}>
        <h1
          style={{ color: "white", marginBottom: "40px", marginLeft: "10px" }}
        >
          {ger}
        </h1>
        <Slider {...settings}>
          {movies.map((movie, i) => {
            return (
              <div key={movie.id} style={{ display: "inline-block" }}>
                {/* <img src={getImgUrl(movie.poster_path, 100)} alt="포스터 " /> */}
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt="포스터 "
                />
                <h2 style={{ color: "white" }}>{movie.title}</h2>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Row;
