import './App.css';
import {useState} from "react";

function App() {
  const [title, setTitle] = useState('Wall-E');
  function handleChange(event) {
    setTitle(event.target.value);
}

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>My favourite movie for today is {title}</h2>
          <div>
          <input type="text" value={title} onChange={handleChange}/>
          <button type="button" onClick={() => alert(title)}>Pokaz Tytul filmu</button>
          </div>
      </div>
  );
}
export default App;