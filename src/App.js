import { useEffect, useState } from 'react';
import './App.css';
import Movies from './components/Movies';

function App() {

  const [popular , setPopular] = useState([])

  useEffect(() => {
    fetchPopular()
  },[])

  const fetchPopular = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bfcf8c712c1faff84ccf1710a0da049e&language=en-US&page=1");
    const movies = await data.json()
    setPopular(movies.results)
  }
  
  return (
    <div className="App">
          <div className="popular-movies">
            {popular.map((movie) => {
              return <Movies key={movie.id} movie={movie}/>
            })}
          </div>
    </div>
  );
}

export default App;
