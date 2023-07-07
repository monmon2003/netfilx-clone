import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner"
import Navbar from "./Navbar"
function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Banner/>
    <Row title="Netflix Originals" fetchUrl={requests.base_URL + requests.fetchNetflixOriginals} />
    <Row title="Trending Now" fetchUrl={requests.base_URL + requests.fetchTrending}  />
    <Row title="Top Rated" fetchUrl={requests.base_URL + requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.base_URL + requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.base_URL + requests.fetchComedyMovies} />
    <Row title="Romance Movies" fetchUrl={requests.base_URL + requests.fetchRomanceMovies} />
    <Row title="Horror Movies" fetchUrl={requests.base_URL + requests.fetchHorrorMovies} />
    
    
    </div>
  );
}

export default App;
