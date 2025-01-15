import "./Main.css";

import pokemon_logo from "../../assets/images/International_Pokémon_logo.svg.png";

import list_icon from "../../assets/icons/list.png";
import panels_icon from "../../assets/icons/panels.png";
import search from "../../assets/icons/search.png";

const Main = () => {
    return (
        <>
            <section id="main">
                <div className="rigth-panel">
                    <div className="pokemon-logo-container">
                        <img src={pokemon_logo} className="pokemon-logo"/>
                        <h1>Pokemon Card Checker</h1>
                    </div>
                </div>  
                <div className="main-content">
                    <div className="app-panel">
                        <h1>Pokemons 1365</h1>
                        <div className="search-input-container">
                            <input type="text"/>
                            <button>
                                <img src={search}/>
                            </button>
                        </div>
                        <div className="app-buttons-group">
                            <button className="app-panel-btn">
                                <img src={list_icon} alt="List icon"/>
                                List
                            </button>
                            <button className="app-panel-btn active-button">
                                <img src={panels_icon} alt="Panels icon"/>
                                Blocks
                            </button>
                        </div>
                    </div>
                    <section id="pokemons">
                        <div className="pokemon-list">

                        </div>
                    </section>
                </div>  
            </section>
        </>
    );
}

export default Main;