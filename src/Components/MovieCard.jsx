import { useDispatch } from 'react-redux';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleWatchlist = () => {
    if (movie.inWatchlist) {
      dispatch({ type: "REMOVE", payload: movie.id });
    } else {
      dispatch({ type: "ADD", payload: movie.id });
    }
  };

  return (
    <div className="card bg-dark text-white border-secondary mb-3 shadow">
      <img src={movie.poster} className="card-img-top" alt={movie.title} style={{ height: "400px", objectFit: "cover" }} />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{movie.title}</h5>
        <p className="card-text text-muted">{movie.year} | {movie.genre}</p>
        
        <div className="d-flex justify-content-between mt-3">
          <button 
            className={`btn btn-sm ${movie.inWatchlist ? "btn-warning" : "btn-outline-warning"}`} 
            onClick={handleWatchlist}>
            {movie.inWatchlist ? "Remove Watchlist" : "Add Watchlist"}
          </button>
          <button 
            className={`btn btn-sm ${movie.liked ? "btn-danger" : "btn-outline-danger"}`} 
            onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: movie.id })}>
            {movie.liked ? "Liked" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;