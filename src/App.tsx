import { useState } from 'react'
import './App.css'
import MovieList, {Movie} from './data/data'

function App() {
const [movies, setMovies]=useState(MovieList)
  return (
    <div className="App">
      <header>
        <h1>
          List of few movies below:
        </h1>
      </header>
    <main className='main'>
<div>
  <ul className='movie-list'>
{movies.map((item)=>(
  <li key={item.id}>
  <img src= {item.thumbnail}></img>
  <h4> £{item.price}</h4>
  <button>Add to Cart</button>
  </li>
))}
  </ul>
</div>
    </main>
    </div>
  )
}

export default App
