
import { baseStatFormat, upperCaseFirstLetter } from "../formatFunctions";

import "./PokemonList.css";

import right_arrow from "../../assets/icons/arrow-ios-forward.svg";
import left_arrow from "../../assets/icons/arrow-ios-back.svg";
import { NavLink } from "react-router-dom";

const PokemonList = ({pokemonList, handlePreviousPage, handleNextPage, currentPage, pokemonImages}) => {

    return(
        <>
             <section id="pokemons">
                        <div className="pokemon-list">
                            {
                               pokemonImages.length > 0 && pokemonList.length > 0 ? pokemonList.map((item, index) => (
                                    <NavLink to={`/pokemon/${pokemonImages[index].id}`} className="pokemon-link">
                                        <div className="pokemon-item" key={index}>
                                            <p className="pokemon-item-number">#{pokemonImages[index] && baseStatFormat(pokemonImages[index].id) }</p>
                                            <div className="bottom-panel">
                                                <img src={pokemonImages[index] && pokemonImages[index].sprites.front_default } alt="Pokemon" />
                                                <h2>{upperCaseFirstLetter(item.name)}</h2>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))
                                :
                                <h1>Loading...</h1>
                            }

                        </div>
                        <div className="paggination-handle">
                            <img src={left_arrow} alt="Left arrow" onClick={handlePreviousPage}/>
                            <h3>{currentPage}</h3>
                            <img src={right_arrow} alt="Right arrow" onClick={handleNextPage}/>
                        </div>
                    </section>
        </>
    );
}

export default PokemonList;