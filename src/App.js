import React, { useState, useEffect } from 'react';
import Card from './card';
import Afficher from './afficher';
import FightCard from './fightCard';
import './App.css';

const API_URL = "https://api-pokemon-fr.vercel.app/api/v1/pokemon";

function App() {
  const [poke, setPoke] = useState(null);
  const [info, setInfo] = useState(null);
  const [fightInitiated, setFightInitiated] = useState(false);
  const [pokeSelectorFight, setpokeSelectorFight] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setPoke(data);
      }
    }

    fetchData();
  }, []);
  function afficherPoke(e) {
    setInfo(e) 
    if (fightInitiated) {
      setpokeSelectorFight(e)
      
    }
  }
  function enableFight() {
    setFightInitiated(true)
  }

  return (
    <div className="App">
      <h1 className="App-title">Poke-Fight</h1>
      <div className="App-intro">
        {poke === null ? 
          <div className='pokemonLoading'></div> 
        : 
          <div className="container-cards">
            <Afficher info={info}/>
            <FightCard poke={poke}  afficher={afficherPoke} fightInitiated={fightInitiated} pokeSelectorFight={pokeSelectorFight} enableFight={enableFight}/>
            <h4>List Pokemon</h4>
            <Card poke={poke}  afficher={afficherPoke}/>
          </div>}
        
      </div>
    </div>
  );
}

export default App;