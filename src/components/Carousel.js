import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

function Carousel() {
  // const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([{}]);
  let [pageCnt, setPageCnt] = useState(0);

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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div style={{ margin: "100px 0px" }}>
      <h1 style={{ color: "white", marginBottom: "40px" }}>오늘의 인기영화</h1>
      <Slider {...settings}>
        {movies.map((movie) => {
          return (
            <div>
              <img src={getImgUrl(movie.poster_path)} alt="포스터 " />
              <h2 style={{ color: "white" }}>{movie.title}</h2>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
