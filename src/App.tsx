import { useState } from "react";
import "./App.css";
import MovieList, { Movie } from "./data/data";

function getCartMovies(movies: Movie[]) {
  const cartMovies = movies.filter((item) => item.inCart === true);
  return cartMovies;
}

function App() {
  const [movies, setMovies] = useState(MovieList);

  function addMovieToCart(item: Movie) {
    if (item.inCart === false) {
      const moviesCopy = structuredClone(movies);
      const matchedItem = moviesCopy.find((target) => target.id === item.id);
      matchedItem.inCart = true;
      setMovies(moviesCopy);
    }
  }

  function removeMovieFromCart(item: Movie) {
    if (item.inCart === true) {
      const moviesCopy = structuredClone(movies);
      const matchedItem = moviesCopy.find((target) => target.id === item.id);
      matchedItem.inCart = false;
      setMovies(moviesCopy);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>List of few movies below:</h1>
      </header>
      <main className="main">
        <div>
          <ul className="movie-list">
            {movies.map((item) => (
              <li className="movie-item" key={item.id}>
                <img src={item.thumbnail}></img>
                <h4> £{item.price}</h4>
                <button
                  className="movie-btn"
                  onClick={() => {
                    addMovieToCart(item);
                  }}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="cart">
          <h3>Items in cart:</h3>
          <ul className="cart-items__list">
            {getCartMovies(movies).map((item) => (
              <li className="cart-items">
                <img className="img-cart" src={item.thumbnail}></img>
                <h4>{item.title}</h4>
                <h4>£{item.price}</h4>
                <button
                  className="remove-btn"
                  onClick={() => {
                    removeMovieFromCart(item);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
