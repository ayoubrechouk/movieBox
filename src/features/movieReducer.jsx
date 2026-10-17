export const initialState={
    movies: [
    { id: 1, title: "Harakiri", year: 1962, rating: 4.7, poster: "https://m.media-amazon.com/images/M/MV5BZThiZjU5ZDQtZDI4Mi00ZGYyLTkzOTktYmIzZTFlZTkxYzg5XkEyXkFqcGc@._V1_.jpg",liked: false, inWatchlist: false },
    { id: 2, title: "The Human Condition III", year: 1961, rating: 4.6, poster: "https://m.media-amazon.com/images/M/MV5BZDQ0ZjgwMWUtYWQzNi00YjNjLWFhMmUtYTRiZjZkNWY3NDkxXkEyXkFqcGc@._V1_.jpg",liked: false, inWatchlist: false },
    { id: 3, title: "12 Angry Men", year: 1957, rating: 4.6, poster: "https://image.tmdb.org/t/p/original/ppd84D2i9W8jXmsyInGyihiSyqz.jpg" ,liked: false, inWatchlist: false},
    { id: 4, title: "Come and See", year: 1985, rating: 4.6, poster: "https://image.tmdb.org/t/p/original/c3dMbkY872FiEU1yNuhss2Cn0x0.jpg" ,liked: false, inWatchlist: false },
    { id: 5, title: "Seven Samurai", year: 1954, rating: 4.6, poster: "https://i.etsystatic.com/23647903/r/il/e46965/2582824610/il_570xN.2582824610_sypp.jpg",liked: false, inWatchlist: false },
    { id: 6, title: "High and Low", year: 1963, rating: 4.6, poster: "https://image.tmdb.org/t/p/original/tgNjemQPG96uIezpiUiXFcer5ga.jpg",liked: false, inWatchlist: false },
    { id: 7, title: "The Godfather Part II", year: 1974, rating: 4.6, poster: "https://static.wikia.nocookie.net/godfather/images/8/87/The_Godfather_Part_II.jpg/revision/latest?cb=20100520182416",liked: false, inWatchlist: false },
    { id: 8, title: "The Shawshank Redemption", year: 1994, rating: 4.6, poster: "https://images.squarespace-cdn.com/content/v1/5c75dfa97d0c9166551f52b1/9351f4e2-94f9-42e2-81df-003d5fe7b8e0/9964546b0ba1f6e14a6045e34b341f8ca2a3569752c5afed95b89682fcde1a68._RI_V_TTW_.jpg",liked: false, inWatchlist: false },
    { id: 9, title: "The Human Condition I", year: 1959, rating: 4.6, poster: "https://thumb.wikimedia.org/wikipedia/en/thumb/d/dd/The_Human_Condition_VideoCover.jpeg/250px-The_Human_Condition_VideoCover.jpeg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",liked: false, inWatchlist: false },
    { id: 10, title: "City of God", year: 2002, rating: 4.6, poster: "https://www.onderhond.com/thumbs/img/posters/300xauto/city-god.webp" ,liked: false, inWatchlist: false}
  ]
};



export const MovieReducer = (state=initialState,action)=>{
    switch (action.type){
        case "ADD":
            return {...state,
        movies: state.movies.map(movie => 
          movie.id === action.payload ? { ...movie, inWatchlist: true } : movie
        )};
        case "REMOVE":
            return {...state,
        movies: state.movies.map(movie => 
          movie.id === action.payload ? { ...movie, inWatchlist: false } : movie
        )};
        case "TOGGLE_LIKE":
            return {
        ...state,
        movies: state.movies.map(movie => 
          movie.id === action.payload ? { ...movie, liked: !movie.liked } : movie
        )
      };
      case "SET_FILTER":
            return { ...state, filter: action.payload };
    default :
        return state;
    }
}