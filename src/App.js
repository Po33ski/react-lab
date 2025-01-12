import './App.css';
import "milligram";
import {useState} from "react";



function App() {
  const [title, setTitle] = useState('Wall-E');
  const [year, setYear] = useState(1994);
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


  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleYear(event) {
    setYear(event.target.value);
  }

  // function addMovie(){
  //   setMovies([...movies, {title: title}]);
  // }

  let message;
  if (title.length < 5) {
    message = <div>Tytul jest bardzo krotki</div>
  } 
  else if (title.lenght < 15){
    message = <div>Tytuł jest ekstra, w sam raz na plakat przed kinem!</div>;
  } else {
    message = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;
  }

  return (
      <div>
        <h1>My favourite movies to watch</h1>
        <div>
        <h1>Titles</h1>
        <ul>
            {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
        </ul>
        </div>
          <h2>Add Movie</h2>
            <h3>Titel</h3>
            <input type="text" value={title} onChange={handleTitle}/>
            {title.length > 0 && <div>{message}</div>}
            <h3>Year</h3>
            <input type="number" value={year} onChange={handleYear}/>
            <button type="button" onClick={() => {setMovies([...movies, {title: title, year: year}])}}>Dodaj</button>
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