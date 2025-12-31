import './Card.css'
export default function Card({movie}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-2">
        <div className="movie-card">
            <img src={movie.previewImg} alt="preview img" className='img-fluid' />
            <p>{movie.length} | {movie.category}</p>
        <div className="content">
            <h4>{movie.title}</h4>
            <div className="card-icons">
                <ion-icon name="add-outline"></ion-icon>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </div>
        </div>
    </div>
  )
}
