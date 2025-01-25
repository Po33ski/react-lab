import './App.css';
import "milligram";
import {useState} from "react";
import MovieForm from "./MovieForm";
import MoviesList from './MoviesList';


function App() {
  const [addMovieIsClicked, setAddMovieIsClicked] = useState(true);
  const [movies, setMovies] = useState([ 
    {title: "Wall-E",
      year: 2000
    },
    {title: "Pulp Fiction",
      year: 2001
    },
    {title: "Matrix",
      year: 2002
    },
    {title: "1670",
      year: 2003}
  ])


  return (
    <div>
        <h1>My favourite movies to watch</h1>
     <div>
      <MoviesList movies={movies}/>
        <div>
        {addMovieIsClicked ? 
          <button onClick={(addMovieIsClicked)=>{setAddMovieIsClicked(!addMovieIsClicked)}}>I want add movie</button> :
          <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])} 
          buttonLabel="Add movie" 
          isClicked={(addMovieIsClicked)=>{setAddMovieIsClicked(!addMovieIsClicked)}}
          />
          }
        </div>
    </div>
    </div>
  );
}
export default App;



// return (
//   <div>
//     <h1>My favourite movies to watch</h1>
//     <div>
//     <h1>Titles</h1>
//     <ul>
//         {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
//     </ul>
//     </div>
//       <h2>My favourite movie for today is {title}</h2>
//         {title.length > 0 && <div>{message}</div>}
      
      
//       <div>
//         <input type="text" value={title} onChange={handleChange}/>
//         <button type="button" onClick={() => alert(title)}>Pokaz Tytul filmu</button>
//       </div>
//   </div>
// );