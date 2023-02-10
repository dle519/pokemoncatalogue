// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import "./demo.scss";
// import Counter from './components/counter/Counter';
import usePokemonList from "./components/PokemonList/UsePokemonListAPI";
import PokemonItemList from "./components/PokemonItemList/PokemonItemList";

function App() {
  const { data, error } = usePokemonList();
  console.log(data);
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
