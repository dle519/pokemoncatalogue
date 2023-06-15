import { useEffect, useState } from "react";

// function oldAPICall() {
//   fetch("https://pokeapi.co/api/v2/pokemon/", {
//     method: "GET",
//     crossDomain: true,
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((value) => {
//       console.log(value);
//       return value.json();
//     })
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((err) => console.error(err));
// }

async function betterAPICall() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/", {
      method: "GET",
      crossDomain: true,
      headers: {
        Accept: "application/json",
      },
    });
    const stuff = await response.json();
    return { data: stuff };
  } catch (err) {
    return { error: err };
  }
}

const usePokemonList = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    async function callAPI() {
      const response = await betterAPICall();
      if (response.data) {
        setData(response.data);
      }
      if (response.error) {
        setError(response.error);
      }
    }
    callAPI();
  }, [setData, setError]);
  return { data, error };
};

export default usePokemonList;
