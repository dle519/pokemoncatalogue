// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";
import "./demo.scss";
// import Counter from './components/counter/Counter';
import usePokemonList from "./components/PokemonList/UsePokemonListAPI";
import PokemonItemList from "./components/PokemonItemList/PokemonItemList";

async function useMultiAPICall() {
  const { data } = usePokemonList();
  const responses = await Promise.all(
    data.results.map(async (item) => {
      const res = await fetch(item.url);
      const after = await res.json();
      console.log(after);
    })
  );
  console.log(responses);
  return responses;
}

function App() {
  const { data, error } = usePokemonList();
  console.log(data);
  useMultiAPICall();
  return (
    <div className="App">
      {error && <div>hehexd</div>}
      {data?.results?.length > 0 && (
        <div>
          ok count: {data.count}
          <PokemonItemList pokemonList={data.results} />
        </div>
      )}
    </div>
  );
}

export default App;
