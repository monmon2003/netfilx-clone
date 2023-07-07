import React,{useState,useEffect} from "react";
import axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.css";

const imgURL = "https://image.tmdb.org/t/p/w500/";
function Row({title,fetchUrl}){
    const [movies,setMovies]=useState([]);
    const [trailerURL,setTrailerURL] = useState("");
    useEffect(()=>{
         //if [] run once when the row loads and don't run again
         async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
       
    },[fetchUrl]);

    const handleClick = (movie) => {
        if(trailerURL){
            setTrailerURL('');
        }
        else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name || " ")
            
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'));
            })
            .catch(err =>{
                console.log(err);
            })
            }
        }
    

    const opts = {
        height:"550",
        width:"100%",
        playerVars:{
            //https://developers.google.com/youtube/player_parameters
            autoplay:1
        }
    }
    return(
        <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map((movie) =>{
                return(
                    <img key={movie.id} className="row_poster"  src={`${imgURL}${ movie.poster_path}`} alt={movie.name} onClick={()=>handleClick(movie)}/>
                )
            })}
        </div>
        {trailerURL && <Youtube videoId={trailerURL} opts={opts}/>}
        </div>
    );
}
export default Row;