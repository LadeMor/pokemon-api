import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

import PokemonCard from './components/PokemonCard/PokemonCard';



function App() {

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/23", {
        method: "GET",
        headers:{
          'Content-Type':'application/json'
        }
      })

      if(!response.ok){
        console.error(`Error while fetching ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    }

    fetchData();
  }, [])

  return (
    <div className="App">
      <PokemonCard/>
    </div>
  );
}

export default App;
