import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

import PokemonCard from './components/PokemonCard/PokemonCard';
import PokemonInfo from './pages/PokemonInfo/PokemonInfo';



function App() {

  
  return (
    <div className="App">
      <PokemonInfo/>
    </div>
  );
}

export default App;
