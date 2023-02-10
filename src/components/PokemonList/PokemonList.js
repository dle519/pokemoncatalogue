import React from "react";

function PokemonList({ list }) {
  return (
    <>
      {list.map((value, index) => {
        return <div key={index}>{value}</div>;
      })}
    </>
  );
}

export default PokemonList;
