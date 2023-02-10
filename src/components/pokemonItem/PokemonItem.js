import React from "react";

function PokemonItem({ name, url }) {
  return (
    <div>
      {name} :- {url}
    </div>
  );
}

export default PokemonItem;
