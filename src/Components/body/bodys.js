import {useState} from "react";
import "./bodys.css";
import { Link, useHistory ,useParams} from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
// import { Change } from "./Change";
// import Button from '@mui/material/Button';

  
export  function Body({movies, setMovies}){
   
  return(
        <div className="box">
        {movies.map((abc , index) => (
           <BodyDiv key={index} id={index} name={abc.names} pic={abc.pic} rate={abc.rating} summary={abc.summary} movies={movies} setMovies={setMovies} />
        ))};
        </div>
      );
};
export  function BodyDiv ({id, name, pic, rate ,summary,movies ,setMovies}){
  const history = useHistory();
  
    return(
        
          <div className="box1">
            <img className="img" alt="name" src={pic}/>
            <h3 className="name">{name}</h3>
            <h5 className="rate">{rate} ⭐ </h5>
            {/* <button onClick={() => (history.push("/Movies/"+ id))} >info</button> */}
            <InfoIcon  onClick={() => (history.push("/Movies/"+ id))} />
            <DeleteIcon onClick={() => {
              var delet = movies.splice(id,1)
              {console.log(delet)}
              {console.log(movies)}
              setMovies([...movies])}}/>
              <ChangeCircleIcon
              onClick={()=>  (history.push("/Movies/edit/"+ id)) 
                           
            }          
              />
            <p className="summary">{summary}</p>
            
         </div>
        
    );
}
// export function AddMovies({movies , setMovies }) {
//   const {id}=useParams();
//   const [name, setname] = useState()
//   const [Pic, setPic] = useState()
//   const [rating, setrating] = useState()
//   const [summery, setsummery] = useState()
  
 

//   const moviesObj = {
//       names:name,
//       pic:Pic,
//       rating:rating,
//       summery:summery
//   }
//   {console.log(movies)}
//   return (
//       <div className="inputdiv">
//           <input className="inputs" value={name} onChange={(event)=>{setname(event.target.value)}} placeholder="Enter the name"/><br/>
//           <input className="inputs" value={Pic} onChange={(event)=>{setPic(event.target.value)}} placeholder="Enter the Pic"/><br/>
//           <input className="inputs" value={rating}  onChange={(event)=>{setrating(event.target.value)}} placeholder="Enter the rating"/><br/>
//           <input className="inputs" value={summery} onChange={(event)=>{setsummery(event.target.value)}} placeholder="Enter the summery"/><br/>
//           {/* <input onChange={(event)=>{setname(event.target.value)}} placeholder="Enter the name"/> */}
//           <Link to="/Movies"> <button onClick={()=>{setMovies([...movies, moviesObj])}} >Add Movies  </button> </Link>
//           {/* <Link to = "/Movies" > <button onClick={()=>{setData( data.names = name , data.Pic = Pic , data.rating = rating , data.summery = summery )}} > Save </button> </Link> */}
        
//       </div>
//          );
// }
