import './App.css';
import "milligram";
import {useState} from "react";

const movies = [

  {title: "Wall-E"},

  {title: "Pulp Fiction"},

  {title: "Matrix"},

  {title: "1670"},

];
function App() {
  const [title, setTitle] = useState('Wall-E');
  function handleChange(event) {
    setTitle(event.target.value);
}

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
        <ul>
            {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
        </ul>
        </div>
          <h2>My favourite movie for today is {title}</h2>
            {title.length > 0 && <div>{message}</div>}
          <div>
            <input type="text" value={title} onChange={handleChange}/>
            <button type="button" onClick={() => alert(title)}>Pokaz Tytul filmu</button>
          </div>
      </div>
  );
}
export default App;