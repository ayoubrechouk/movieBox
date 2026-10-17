import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  const currentFilter = useSelector(state => state.filter);

  const watchlistCount = movies.filter(m => m.inWatchlist).length;
  const likedCount = movies.filter(m => m.liked).length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand text-success fw-bold">MovieBox</span>
      <div className="d-flex gap-3 ms-auto">
        <button 
          className={`btn ${currentFilter === "ALL" ? "btn-success" : "btn-outline-light"}`} 
          onClick={() => dispatch({ type: "SET_FILTER", payload: "ALL" })}>
          Tous les films
        </button>
        <button 
          className={`btn ${currentFilter === "WATCHLIST" ? "btn-success" : "btn-outline-light"}`} 
          onClick={() => dispatch({ type: "SET_FILTER", payload: "WATCHLIST" })}>
          Watchlist <span className="badge bg-light text-dark">{watchlistCount}</span>
        </button>
        <button 
          className={`btn ${currentFilter === "FAVORITES" ? "btn-success" : "btn-outline-light"}`} 
          onClick={() => dispatch({ type: "SET_FILTER", payload: "FAVORITES" })}>
          Favoris <span className="badge bg-light text-dark">{likedCount}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;