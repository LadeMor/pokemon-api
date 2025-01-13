import { useEffect, useState } from "react";

import "./PokemonCard.css";

import leftArrow from "../../assets/icons/left-arrow.png";

import pikachu from "../../assets/images/pikachu.png";
import weight from "../../assets/icons/weight.png";
import straighten from "../../assets/icons/straighten.png";

const PokemonCard = () => {

    const pokemonId = 25;

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

    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    
    const baseStatFormat = (stat) => {
        return stat < 100 ? `0${stat}` : stat ;
    }

    const upperCaseFirstLetter = (word) => {
        const firstLetter = word.substring(0, 1).toUpperCase();
        const secondPart = word.substring(1, word.length);
        
        return firstLetter + secondPart;
    }

    const divineByTen = (number) => {
        return number / 10;
    }

    const selectPokemonTypeColor = (type) => {
        switch(type.toLowerCase()){
            case "bug":
                return "#A7B723";
                break;
            case "dark":
                return "#75574C";
                break;
            case "dragon":
                return "#7037FF";
                break;
            case "electric":
                return "#F9CF30";
                break;
            case "fairy":
                return "#E69EAC";
                break;
            case "fighting":
                return "#C12239";
                break;
            case "fire":
                return "#F57D31";
                break;
            case "flying":
                return "#A891EC";
                break;
            case "ghost":
                return "#70559B";
                break;
            case "normal":
                return "#AAA67F";
                break;
            case "grass":
                return "#74CB48";
                break;
            case "ground":
                return "#DEC16B";
                break;
            case "ice":
                return "#9AD6DF";
                break;
            case "poison":
                return "#A43E9E";
                break;
            case "psychic":
                return "#FB5584";
                break;
            case "rock":
                return "#B69E31";
                break;
            case "steel":
                return "#B7B9D0";
                break;
            case "water":
                return "#6493EB";
                break;
        }
    }

    return (
        <>
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
        </>
    );

}

export default PokemonCard;