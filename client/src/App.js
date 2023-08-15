import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [backenData, setBackendData] = useState([]);

  useEffect(()=>{
    //http://localhost:5000/api/getAllPokemon backend api
    fetch('http://localhost:5000/api/getAllPokemon')
    .then(async(res)=>{
      //receive the data in json
      const data = await res.json();

      // console.log(data);
      //save
      setBackendData(data);
    })
  },[]);

  // console.log(backenData);

  return (
    <div className="App">
      <h1>This is a List of Pokemons</h1>
      {backenData.payload?.length > 0 ? backenData.payload.map((pokemon, index)=>{
        // console.log(pokemon);
        return   <div key={index}>
                      <ul>
                        <li>{pokemon.Name}</li>
                      </ul> 
                  </div>
      }) : <p>Loading...</p> }
    </div>
  );
}

export default App;
