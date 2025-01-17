import { useEffect, useState } from "react";

import "./PokemonCard.css";

import leftArrow from "../../assets/icons/left-arrow.png";

import pikachu from "../../assets/images/pikachu.png";
import weight from "../../assets/icons/weight.png";
import straighten from "../../assets/icons/straighten.png";

import { 
    hexToRgba, 
    baseStatFormat, 
    upperCaseFirstLetter, 
    divineByTen, 
    selectPokemonTypeColor } from "../formatFunctions";
import { useParams } from "react-router-dom";

const PokemonCard = () => {

    const {pokemon_id} = useParams();

    const pokemonId = pokemon_id;

    const [pokemonData, setPokemonData] = useState(null);
    const [characteristicsData, setCharacteristicsData] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, {
            method: "GET",
            headers:{
              'Content-Type':'application/json'
            }
          })
    
          if(!response.ok){
            console.error(`Error while fetching ${response.status}`);
          }else{
            const result = await response.json();
            console.log(result);
            setPokemonData(result);
          }
    
          
        }
    
        fetchPokemonData();
    }, [])

    useEffect(() => {
        const fetchCharacteristicsData = async () => {
          const response = await fetch(`https://pokeapi.co/api/v2/characteristic/${pokemonId}`, {
            method: "GET",
            headers:{
              'Content-Type':'application/json'
            }
          })
    
          if(!response.ok){
            console.error(`Error while fetching ${response.status}`);
          }else{
            const result = await response.json();
            console.log(result);
            setCharacteristicsData(result);
          }
    
          
        }
    
        fetchCharacteristicsData();
    }, [])

    useEffect(() => {
        if(pokemonData){
            document.documentElement.style.setProperty("--pokemon-main-color", selectPokemonTypeColor(pokemonData.types[0].type.name));
            document.documentElement.style.setProperty("--pokemon-opacity-color", hexToRgba(selectPokemonTypeColor(pokemonData.types[0].type.name), 0.2));
        }
    }, [pokemonData])

    

    return (
        <>
        <section id="pokemon-card-container">
            {pokemonData ? 
                <div className="card">
                    <div className="card-top-panel">
                        <div className="card-top-panel-title">
                            <img src={leftArrow}/>
                            <h1>{upperCaseFirstLetter(pokemonData.name)}</h1>
                        </div>
                        <p>#{baseStatFormat(pokemonData.id)}</p>
                    </div>
                    <div className="stats-block">
                        <div className="stats-image-block">
                            <img src={pokemonData.sprites.front_default} alt="Pokemon image" className="pokemon-image"/>
                        </div>
                        <div className="pokemon-information">
                            <div>
                                <div className="pokemon-tag-list">
                                    {
                                        pokemonData.types.map((item) => (
                                            <div className="pokemon-tag" style={{backgroundColor:`${selectPokemonTypeColor(item.type.name)}`}}>{item.type.name}</div>
                                        ))
                                    }
                                </div>
                                <h1 className="pokemon-description-title">About</h1>
                                <div className="pokemon-stats-description">
                                    <div className="pokemon-stats-description-item">
                                        <div className="pokemon-stats-description-item-title">
                                            <img src={weight} alt="Weight icon"/>
                                            <p className="pokemon-weight-text">{divineByTen(pokemonData.weight)} kg</p>
                                        </div>
                                        <p className="pokemon-stat-name">Weight</p>
                                    </div>
                                    <div className="pokemon-stats-description-item center-item">
                                        <div className="pokemon-stats-description-item-title">
                                            <img src={straighten} alt="Weight icon"/>
                                            <p className="pokemon-weight-text">{divineByTen(pokemonData.height)} m</p>
                                        </div>
                                        <p className="pokemon-stat-name">Weight</p>
                                    </div>
                                    <div className="pokemon-stats-description-item">
                                        <div className="pokemons-move-list">
                                            <p className="pokemon-weight-text">{upperCaseFirstLetter(pokemonData.moves[0].move.name)}</p>
                                            <p className="pokemon-weight-text">{upperCaseFirstLetter(pokemonData.moves[1].move.name)}</p>
                                        </div>
                                        <p className="pokemon-stat-name">Moves</p>
                                    </div>
                                
                                </div>
                                <p className="pokemon-description">
                                        {characteristicsData ? characteristicsData.descriptions[7].description : "Loading.."}
                                </p>
                            </div>
                            <div className="pokemon-base-stats">
                                <h1 className="pokemon-base-stats-title">Base Stats</h1>
                                <div className="pokemon-base-stats-attitude">
                                    <div className="pokemon-base-stats-attitude-title-list">
                                        <p>HP</p>
                                        <p>ATK</p>
                                        <p>DEF</p>
                                        <p>SATK</p>
                                        <p>SDEF</p>
                                        <p>SPD</p>
                                    </div>
                                    <div className="vertical-line"></div>
                                    <div className="pokemon-base-stats-attitude-list">
                                        {pokemonData.stats.map((item) => (
                                            <div className="pokemon-base-stats-attitude-list-item">
                                                <p>{baseStatFormat(item.base_stat)}</p>
                                                <div className="pokemon-stat-proggres-bar-bg">
                                                    <div 
                                                    className="pokemon-stat-proggres-bar-fill"
                                                    style={{
                                                        width: `${item.base_stat / 2}%`,
                                                        borderTopRightRadius:`${item.base_stat >= 100 ? 4 : 0}px`,
                                                        borderBottomRightRadius:`${item.base_stat >= 100 ? 4 : 0}px`,
                                                    }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            : 
                <h1>Loading...</h1>}
        </section>
        
        </>
    );

}

export default PokemonCard;