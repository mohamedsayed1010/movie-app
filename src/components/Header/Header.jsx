import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import './header.css'
import { Link } from "react-router-dom";
import MovieSlider from "../MovieSlider/MovieSlider";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";







export default function Header() {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false);


  async function getMovies() {
    try {
      setIsLoading(true)
      const { data } = await axios.get("/data/movieData.json");
      setIsLoading(false)
      setMovies(data);
      toast.success("success");
      console.log(data);
    } catch (error) {
      setIsLoading(false)
      toast.error(error.message);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  function toggleModal(){
    setModal(!modal)
  }





  function handleSlideChange(id) {
  const newMovies = structuredClone(movies);
  newMovies.forEach(movie => {
    movie.active = movie._id === id;
  });

  setMovies(newMovies);
}

  return (
    <>
      <div className="header">
        {isLoading && <Loading />}
        {
          !isLoading && movies.length > 0 && movies.map((movie)=>         <div className="movie">
          <img src={movie.bgImg} alt="background img" className={`bgImg ${movie.active ? 'done' : undefined}`}/>
          <div className="container-fluid">
            <div className="row">
              <div className=" col-sm-12 col-lg-7 col-xl-6">
                <div  className={`content ${movie.active ? 'done' : undefined}`}>
                  <img src={movie.titleImg} alt="movieImg-title" className="movieImg-title" />
                  <h4>
                       <span>{movie.year}</span>
                       <span><i>{movie.ageLimit}</i></span>
                       <span>{movie.length}</span>
                       <span>{movie.category}</span>
                  </h4>
                  <p>
                      {movie.description}
                  </p>
                  <div className="button">
                      <Link to={''} className="btn  me-2  text-white rounded-3"><ion-icon name="bookmark-outline"></ion-icon> Book</Link>
                      <Link to={''} className="btn   text-white rounded-3"><ion-icon name="add-outline"></ion-icon>My List</Link>

                  </div>
                </div>
              </div>
              <div className=" col-md-12 col-lg-5  col-xl-6">
                <div className={`date ${movie.active ? 'done' : undefined}`}>
                  <h2>on {movie.date}</h2>
                </div>
                
                <div className={`trailer  d-flex justify-content-center align-items-center ${movie.active ? 'done' : undefined}`}>
                  <a className="playBtn rounded-circle d-flex justify-content-center align-items-center "onClick={toggleModal}><ion-icon name="play-outline"></ion-icon></a>
                  <p>Watch Trailer</p>
                </div>
                {movie.active && <Modal movie={movie} toggleModal={toggleModal} status={modal}/>}
              </div>
            </div>
          </div>
        </div>
)
        }
        {!isLoading && movies.length > 0 && <MovieSlider slides={movies}  handlechange={handleSlideChange}/>}


      </div>
 
    </>
  );
}
