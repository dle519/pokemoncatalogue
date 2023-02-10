import React from "react";
import PokemonItem from "../pokemonItem/PokemonItem";

function PokemonItemList({ pokemonList } = {}) {
  return (
    <>
      {pokemonList.map((poke) => {
        return <PokemonItem key={poke.name} name={poke.name} url={poke.url} />;
      })}
    </>
  );
}

export default PokemonItemList;
