import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import SwapiService from '../../services/SwapiServise';

import './App.css';
import ErrorButton from '../ErrorButton';
import PeoplePage from '../PeoplePage';

import { SwapiServiceProvider, SwapiServiceConsumer } from '../SwapiServiceContex';



// const swapi = new SwapiService;

// swapi.getAllStarships().then(starships => {
//   starships.forEach((starship: any) => {
//     console.log(starship.name);
//   });
// })

// swapi.getStarship(1).then(starship => {
//   console.log(starship);
// })

function App() {

  const swapi = new SwapiService;
  const [randomPlanet, setRandomPlanet] = useState(false);
  

  function toggleRandomPlanet() {
    setRandomPlanet((randomPlanet => !randomPlanet))
  }

  

  return (
    <div className="App">
      <SwapiServiceProvider value={swapi} >
      <Header />
      {randomPlanet ? <RandomPlanet /> : null}

      <button className='button' onClick={toggleRandomPlanet}>ToogleRandomePlanet</button>
      <ErrorButton />
      <PeoplePage />
      <PeoplePage />
      <PeoplePage />

    </SwapiServiceProvider>
    </div>
  );
}

export default App;
