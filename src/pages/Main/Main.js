import "./Main.css";

import pokemon_logo from "../../assets/images/International_Pokémon_logo.svg.png";

import list_icon from "../../assets/icons/list.png";
import panels_icon from "../../assets/icons/panels.png";
import search from "../../assets/icons/search.png";


import { useEffect, useState } from "react";
import { upperCaseFirstLetter, baseStatFormat } from "../../components/formatFunctions";

const Main = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonImages, setPokemonImages] = useState([]);

    useEffect(() => {

        const fetchPokemons = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0");

            if (!response.ok) {
                console.error(`Error while fetching ${response.status}`);
            } else {
                const result = await response.json();
                
                setPokemonList(result.results);
                

                const images = await Promise.all(
                    result.results.map(async (pokemon) => {
                        const data = await fetchPokemonDataByUrl(pokemon.url);
                        return data;
                    })
                );
                console.log(images);
                setPokemonImages(images);
            }
        }

        fetchPokemons();

    }, [])

    const fetchPokemonDataByUrl = async (url) => {
        try{
            const response = await fetch(`${url}`, {
                method: "GET",
                headers:{
                  'Content-Type':'application/json'
                }
              })
        
              if(!response.ok){
                console.error(`Error while fetching ${response.status}`);
              }else{
                  const result = await response.json();
                  
                return result
              }
        }catch(error){
            console.error("Error while loading data: ", error);
        }

    }
  
    useEffect(() => {
        console.log(pokemonImages);
        if(pokemonImages.length == pokemonList.length){
            console.log(pokemonImages);
        }
    }, [pokemonImages])

    return (
        <>
            <section id="main">
                <div className="rigth-panel">
                    <div className="pokemon-logo-container">
                        <img src={pokemon_logo} className="pokemon-logo" />
                        <h1>Pokemon Card Checker</h1>
                    </div>
                </div>
                <div className="main-content">
                    <div className="app-panel">
                        <h1>Pokemons 1365</h1>
                        <div className="search-input-container">
                            <input type="text" />
                            <button>
                                <img src={search} />
                            </button>
                        </div>
                        <div className="app-buttons-group">
                            <button className="app-panel-btn">
                                <img src={list_icon} alt="List icon" />
                                List
                            </button>
                            <button className="app-panel-btn active-button">
                                <img src={panels_icon} alt="Panels icon" />
                                Blocks
                            </button>
                        </div>
                    </div>
                    <section id="pokemons">
                        <div className="pokemon-list">
                            {
                                pokemonList.map((item, index) => (
                                    <div className="pokemon-item" key={index}>
                                        <p className="pokemon-item-number">#{pokemonImages[index] && baseStatFormat(pokemonImages[index].id) }</p>
                                        <div className="bottom-panel">
                                            <img src={pokemonImages[index] && pokemonImages[index].sprites.front_default } alt="Pokemon" />
                                            <h2>{upperCaseFirstLetter(item.name)}</h2>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Main;