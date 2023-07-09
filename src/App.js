import React, { useState, useEffect } from 'react';
import Card from './card';
import Afficher from './afficher';
import './App.css';

const API_URL = "https://api-pokemon-fr.vercel.app/api/v1/pokemon";

function App() {
  const [poke, setPoke] = useState(null);
  const [info, setInfo] = useState(null);

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
    console.log(e);
    setInfo(e) 
  }

  return (
    <div className="App">
      <h1 className="App-title">Poke-Fight</h1>
      <div className="App-intro">
        <div className="container-cards">
          <Afficher info={info}/>
          <h4>List Pokemon</h4>
          <Card poke={poke}  afficher={afficherPoke}/>
        </div>
      </div>
    </div>
  );
}

export default App;