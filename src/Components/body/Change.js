import "./change.css"
import {useParams ,Link} from "react-router-dom";
import {useState} from "react";
export function Change({ movies ,setMovies}) {
  
  const {id}=useParams();
  console.log(id);
  const [data, setData] = useState(movies[id])
  const [name, setName] = useState( (id != null || id != undefined )? data.names : "" )
  const [Pic, setPic] = useState((id != null || id != undefined )? data.Pic : "")
  const [rating, setRating] = useState((id != null || id != undefined )? data.rating : "")
  const [summery, setSummery] = useState((id != null || id != undefined )? data.summary : "")
  
  const moviesObj = {
    names:name,
    pic:Pic,
    rating:rating,
    summery:summery
}
  
  return (
    <div className="inputdiv">
          <input className="inputs" onChange={(event)=>{setName(event.target.value)}} value={name} placeholder="name" /><br/>
          <input className="inputs" onChange={(event)=>{setPic(event.target.value)}} value={Pic} placeholder="pic"/><br/>
          <input className="inputs" onChange={(event)=>{setRating(event.target.value)}} value={rating} placeholder="rating"/>
          <br/>
          <input className="inputs" onChange={(event)=>{setSummery(event.target.value)}} value={summery} placeholder="summary" />
          <br/>
         <Link to="/Movies"> 
          <button   onClick={()=>{  
             btn()
          }} 
            > {(id != null || id != undefined )?  " Save" :" Add Movies"}
           </button> 
           </Link>
 
    </div>
  );
  function btn (){
  
    if(id != null || id != undefined ){
      setData( data.names = name , data.Pic = Pic , data.rating = rating , data.summery = summery )
    }else{
      setMovies([...movies, moviesObj])
    }

} 
}

