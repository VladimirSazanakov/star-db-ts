import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import SwapiService from '../../services/SwapiServise';

import './App.css';



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

  function toggleRandomPlanet(){
    setRandomPlanet((randomPlanet => !randomPlanet))
  }

  return (
    <div className="App">
      <Header />
      {randomPlanet ? <RandomPlanet />: null}

      <button className='button' onClick={toggleRandomPlanet}>ToogleRandomePlanet</button>
      <div className='row md2'>
        <div className='col-md-6'>
          <ItemList />
        </div>
        <div className='col-md-6'>
          <PersonDetails />
        </div>
      </div>


    </div>
  );
}

export default App;
