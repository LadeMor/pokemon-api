import "./PokemonCard.css";

import leftArrow from "../../assets/icons/left-arrow.png";

import pikachu from "../../assets/images/pikachu.png";
import weight from "../../assets/icons/weight.png";
import straighten from "../../assets/icons/straighten.png";

const PokemonCard = () => {

    return (
        <div className="card">
            <div className="card-top-panel">
                <div className="card-top-panel-title">
                    <img src={leftArrow}/>
                    <h1>Pikachu</h1>
                </div>
                <p>#025</p>
            </div>
            <div className="stats-block">
                <div className="stats-image-block">
                    <img src={pikachu} alt="Pokemon image" className="pokemon-image"/>
                </div>
                <div className="pokemon-information">
                    <div>
                        <div className="pokemon-tag-list">
                            <div className="pokemon-tag">Electric</div>
                        </div>
                        <h1 className="pokemon-description-title">About</h1>
                        <div className="pokemon-stats-description">
                            <div className="pokemon-stats-description-item">
                                <div className="pokemon-stats-description-item-title">
                                    <img src={weight} alt="Weight icon"/>
                                    <p className="pokemon-weight-text">6,0 kg</p>
                                </div>
                                <p className="pokemon-stat-name">Weight</p>
                            </div>
                            <div className="pokemon-stats-description-item center-item">
                                <div className="pokemon-stats-description-item-title">
                                    <img src={straighten} alt="Weight icon"/>
                                    <p className="pokemon-weight-text">0,4 m</p>
                                </div>
                                <p className="pokemon-stat-name">Weight</p>
                            </div>
                            <div className="pokemon-stats-description-item">
                                <div className="pokemons-move-list">
                                    <p className="pokemon-weight-text">Mega Punch</p>
                                    <p className="pokemon-weight-text">Pay-Day</p>
                                </div>
                                <p className="pokemon-stat-name">Weight</p>
                            </div>
                        
                        </div>
                        <p className="pokemon-description">
                                Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.
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
                                <div className="pokemon-base-stats-attitude-list-item">
                                    <p>035</p>
                                    <div className="pokemon-stat-proggres-bar-bg">
                                        <div className="pokemon-stat-proggres-bar-fill"></div>
                                    </div>
                                </div>
                                <div className="pokemon-base-stats-attitude-list-item">
                                    <p>035</p>
                                    <div className="pokemon-stat-proggres-bar-bg">
                                        <div className="pokemon-stat-proggres-bar-fill"></div>
                                    </div>
                                </div>
                                <div className="pokemon-base-stats-attitude-list-item">
                                    <p>035</p>
                                    <div className="pokemon-stat-proggres-bar-bg">
                                        <div className="pokemon-stat-proggres-bar-fill"></div>
                                    </div>
                                </div>
                                <div className="pokemon-base-stats-attitude-list-item">
                                    <p>035</p>
                                    <div className="pokemon-stat-proggres-bar-bg">
                                        <div className="pokemon-stat-proggres-bar-fill"></div>
                                    </div>
                                </div>
                                <div className="pokemon-base-stats-attitude-list-item">
                                    <p>035</p>
                                    <div className="pokemon-stat-proggres-bar-bg">
                                        <div className="pokemon-stat-proggres-bar-fill"></div>
                                    </div>
                                </div>
                                <div className="pokemon-base-stats-attitude-list-item">
                                    <p>035</p>
                                    <div className="pokemon-stat-proggres-bar-bg">
                                        <div className="pokemon-stat-proggres-bar-fill"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PokemonCard;