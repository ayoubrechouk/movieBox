import { useSelector } from 'react-redux';
import Navbar from "./Components/Navbar";
import MovieCard from "./Components/MovieCard";

function App() {
  const movies = useSelector(state => state.movies);
  const filter = useSelector(state => state.filter);

  const filteredMovies = movies.filter(movie => {
    if (filter === "WATCHLIST") return movie.inWatchlist;
    if (filter === "FAVORITES") return movie.liked;
return true;
  });
  return (
    <div style={{ backgroundColor: "#045e13", minHeight: "100vh" }}>
      <Navbar />
      <div className="container mt-5">
        {filteredMovies.length === 0 ? (
          <h3 className="text-center text-secondary">Aucun film dans cette catégorie found</h3>
        ) : (
          <div className="row">
            {filteredMovies.map(movie => (
              <div className="col-12 col-md-6 col-lg-3" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;