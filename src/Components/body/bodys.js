import { useState } from "react";
import "./bodys.css";
import { Link, useHistory, useParams } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import { Change } from "./Change";
// import Button from '@mui/material/Button';

export function Body({ movies, setMovies }) {
  return (
    <div className="box">
      {movies.map((abc, index) => (
        <BodyDiv
          key={index}
          id={index}
          name={abc.names}
          pic={abc.pic}
          rate={abc.rating}
          summary={abc.summary}
          movies={movies}
          setMovies={setMovies}
        />
      ))}
    </div>
  );
}
export function BodyDiv({ id, name, pic, rate, summary, movies, setMovies }) {
  const history = useHistory();

  return (
    <div>
      <div className="box1">
        <img className="img" alt="name" src={pic} />
        <h3 className="name">{name}</h3>
        <h5 className="rate">{rate} ⭐ </h5>
        {/* <button onClick={() => (history.push("/Movies/"+ id))} >info</button> */}
        <InfoIcon onClick={() => history.push("/Movies/" + id)} />
        <DeleteIcon
          onClick={() => {
            var delet = movies.splice(id, 1);
            {
              console.log(delet);
            }
            {
              console.log(movies);
            }
            setMovies([...movies]);
          }}
        />
        <ChangeCircleIcon onClick={() => history.push("/Movies/edit/" + id)} />
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}

export default function Data() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <h1>react</h1>
      <Carousel responsive={responsive}>
        <div><h1>item 1</h1></div>
        <div><h1>item 1</h1></div>
        <div><h1>item 1</h1></div>
        <div></div>
      </Carousel>
      
    </div>
  );
}
