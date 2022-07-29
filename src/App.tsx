import { useState } from "react";
import "./App.css";
import MovieList, { Movie } from "./data/data";

function getCartMovies(movies: Movie[]) {
  const cartMovies = movies.filter((item) => item.inCart === true);
  return cartMovies;
}

function App() {
  const [movies, setMovies] = useState(MovieList);
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
                <button className="movie-btn">Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="cart">
          <h3>Items in cart:</h3>
          <ul className="cart-items__list">
            {getCartMovies(movies).map((item) => (
              <li className="cart-items">
                <img
                  className="img-cart"
                  src={item.thumbnail}
                ></img>
                <h4>{item.title}</h4>
                <h4>£{item.price}</h4>
                <button className="remove-btn">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
