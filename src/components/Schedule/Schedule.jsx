import './schedule.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Card from '../Card/Card';


export default function Schedule() {

    const [data, setData] = useState([]);
    const [movies, setMovies] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");


function getDisplayedMovies() {
  if (activeFilter === "all") {
    setMovies(data)
    return movies;
  }
  return movies.filter(movie => movie.category === activeFilter);
}





  async function getMovies() {
    try {
      const { data } = await axios.get("/data/movieData.json");
      setData(data);
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(()=>{
    setMovies(data)
  }, [data])
  return (
    <section id='schedule' className='schedule'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className='section-title'>opening this week</h4>
                </div>
                <div className="row">
                 
                 <div className="filters d-flex flex-wrap gap-2 gap-sm-3 mb-4">
  <button
    className={activeFilter === "all" ? "active" : ""}
    onClick={() => setActiveFilter("all")}
  >
    All
  </button>

  <button
    className={activeFilter === "Action" ? "active" : ""}
    onClick={() => setActiveFilter("Action")}
  >
    Action
  </button>

  <button
    className={activeFilter === "Romance" ? "active" : ""}
    onClick={() => setActiveFilter("Romance")}
  >
    Romance
  </button>

  <button
    className={activeFilter === "Horror" ? "active" : ""}
    onClick={() => setActiveFilter("Horror")}
  >
    Horror
  </button>
  <button
    className={activeFilter === "Thriller" ? "active" : ""}
    onClick={() => setActiveFilter("Thriller")}
  >
    Thriller
  </button>
  <button
    className={activeFilter === "Adventure" ? "active" : ""}
    onClick={() => setActiveFilter("Adventure")}
  >
    Adventure
  </button>
</div>

                </div>
                <div className="row mt-5">
                      {movies && movies.length >0 && getDisplayedMovies()?.map((movie)=>{
                       return <Card key={movie._id} movie={movie}/>
                      })}
                </div>
            </div>
    </section>
  )
}
