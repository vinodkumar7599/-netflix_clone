import "./LoginHome.css";
import React from "react";
import { Link, Switch, Route, useParams, useHistory } from "react-router-dom";
import { Login, Registration } from "./Login";
// import { Nav } from "./nav";
import { AddMovies, Body } from "../body/bodys";
import { useState } from "react";
import { AboutUs } from "./AboutUs";
import { Change } from "../body/Change";
import { Channels, Nav, NotFound } from "./nav";
import { Home } from "./Home";
// import { Login, Registration } from "./Login";

export default function LoginHome() {
  const movies = [
    {
      names: "GRAND MASTI",
      pic: "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/74637349.jpg",
      rating: "9.5",
      summary:
        "Friends Amar, Meet and Prem, who are unhappy with their married lives, decide to go for their college reunion to have fun. However, they get in trouble with the principal and a student.",
    },
    {
      names: "HULK",
      pic: "https://images.news18.com/ibnlive/uploads/2016/04/12931171_1079163228794337_8732305975871635522_n.jpg",
      rating: "6.5",
      summary:
        "Eric Bana stars as scientist Bruce Banner, whose inner demons transform him in the aftermath of a catastrophic experiment; Jennifer Connelly portrays Betty Ross, whose scientific .",
    },
    {
      names: "THOR",
      pic: "http://im.rediff.com/movies/2013/dec/30hollywood-films3.jpg",
      rating: "8.5",
      summary:
        "After wanting to wage war against the Frost Giants, the mighty warrior Thor (Chris Hemsworth) is cast out from Asgard by his father Odin (Sir Anthony Hopkins) , Thor struggles to reclaim his powers",
    },
    {
      names: "RAM SETU",
      pic: "https://htekclub.com/images/2022/10/25/d14btEr1IdwITOpwsktGLYJ8O5v.jpg",
      rating: "9.5",
      summary:
        "An atheist archaeologist turned believer races against time to prove the true existence of the legendary Ram Setu before evil forces destroy the pillar of India's heritage",
    },
    {
      names: "URI",
      pic: "https://upload.wikimedia.org/wikipedia/en/3/3b/URI_-_New_poster.jpg",
      rating: 9.5,
      summary:
        " The Surgical Strike is a 2019 Indian Hindi-language military action film written and directed by debutant Aditya Dhar and produced by Ronnie Screwvala ",
    },
    {
      names: "BLACK ADAM",
      pic: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663085107/amc-cdn/production/2/movies/62300/62331/PosterDynamic/142915.jpg",
      rating: 8.4,
      summary:
        " handling the death of T'Challa, a development that was added to the story after the tragic passing of Chadwick Boseman in 2020. Ramonda, Shuri",
    },
    {
      names: "ONWARD",
      pic: "https://i.ytimg.com/vi/XDrwmLdXzXE/movieposter_en.jpg",
      rating: 7.8,
      summary:
        "Onward is a 2020 American computer-animated urban fantasy adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures",
    },
    {
      names: "WAR",
      pic: "https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/master/pass/must-watch%20action%20movies.jpg",
      rating: 6.8,
      summary:
        "War Movies. Witness the action and angst of war stories across history and around the world in this collection of documentaries, dramas and more",
    },
    {
      names: "PS-I",
      pic: "https://www.cinejosh.com/newsimg/newsmainimg/maniratnam-movie-ps-1-releasing-today_b_3009220839.jpg",
      rating: 5.8,
      summary:
        "Ponniyin Selvan: I ( transl. The Son of Ponni) is a 2022 Indian Tamil-language epic historical action drama film directed by Mani Ratnam, who co-wrote it ",
    },
  ];

  const [moviesList, setMoviesList] = useState([...movies]);
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/login">
          <Nav />
          <Body movies={moviesList} setMovies={setMoviesList} />
            {/* <Login /> */}
          </Route>
          <Route path="/registration">
          <Nav />
          <Body movies={moviesList} setMovies={setMoviesList} />
            {/* <Registration /> */}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/AboutUs">
            <Nav />
            <AboutUs />
          </Route>
          <Route exact path="/Movies">
            <Nav />
            <Body movies={moviesList} setMovies={setMoviesList} />
          </Route>
          <Route path="/AddMovies">
            <Nav />
            <Change movies={moviesList} setMovies={setMoviesList} />
          </Route>
          <Route path="/Channels">
            <Nav />
            <Channels />
          </Route>
          <Route exact path="/login/Movies">
            <Nav />
            <Body movies={moviesList} setMovies={setMoviesList} />
          </Route>
          <Route exact path="/Movies/:id">
            <Nav />
            <MoviesData movies={moviesList} />
          </Route>
          <Route path="/Movies/edit/:id">
            <Nav />
            <Change movies={moviesList} setMovies={setMoviesList} />
          </Route>

          <Route path="**">
          <Nav />
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
function MoviesData({ movies }) {
  const { id } = useParams();
  // const data = movies[id];
  // console.log(data);

  return (
    <div className="dataDiv">
      <div>
        <h1 className="dataName">{movies[id].names}</h1>
        <h3 className="dataRating">{movies[id].rating} ⭐</h3>
        <h5 className="datasummery">
          {movies[id].summary}Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </h5>
      </div>
      <div>
        <img className="imgs" src={movies[id].pic} />
      </div>
    </div>
  );
}
