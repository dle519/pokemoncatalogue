import React from "react";
import PokemonItem from "../pokemonItem/PokemonItem";
import usePokemonPicture from "../PokemonPictures/UsePokemonPicture";
import styles from "./PokemonItemList.module.css";

// comment line 8 and 15 out then uncomment to reload the pictures
function PokemonItemList({ pokemonList } = {}) {
  const { pics } = usePokemonPicture();
  function buildPokemon(pokemon, index) {
    return (
      <PokemonItem
        key={index}
        name={pokemon.name}
        url={pokemon.url}
        img={pics[index]}
      />
    );
  }
  return (
    <div className={styles["pokemon-list"]}>
      {pokemonList.map(buildPokemon)}
    </div>
  );
}

export default PokemonItemList;
