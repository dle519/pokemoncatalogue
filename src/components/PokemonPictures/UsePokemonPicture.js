import { useState, useEffect } from "react";
import usePokemonList from "../PokemonList/UsePokemonListAPI";

// api - sprites --> other --> home --> front_shiny
async function multiAPICall(data) {
  try {
    const responses = await Promise.all(
      data.results.map(async (item) => {
        const result = await fetch(item.url);
        const after = await result.json();
        const picture = after.sprites.other.home.front_default;
        return picture;
      })
    );
    // console.log(responses);
    return { pictures: responses };
  } catch (err) {
    return { err: err };
  }
}

const usePokemonPicture = () => {
  const { data } = usePokemonList();
  const [pics, setPics] = useState();
  const [err, setErr] = useState();
  useEffect(() => {
    async function callAPI() {
      const response = await multiAPICall(data);
      if (response.pictures) {
        setPics(response.pictures);
      }
      if (response.err) {
        setErr(response.err);
      }
    }
    callAPI();
  }, [setPics, setErr, data]);
  return { pics, err };
};

export default usePokemonPicture;
