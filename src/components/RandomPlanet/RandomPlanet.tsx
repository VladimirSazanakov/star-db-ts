import React, {useState} from 'react';
import SwapiService from '../../services/SwapiServise';

import './RandomPlanet.css';

const RandomPlanet = () => {

  const swapiService = new SwapiService;

  const [planet, setPlanet ] = useState({
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  })

  const updatePlanet = () => {
    const id: any = Math.floor(Math.random()*25)+2;
    swapiService
      .getPlanet(id)
      .then((planet1: any ) => {
        setPlanet({
          id: id,
          name: planet1.name,
          population: planet1.population,
          rotationPeriod: planet1.rotation_period,
          diameter: planet1.diameter
        })
      })
  }

  updatePlanet();

  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <div className='random-planet jumbotron rounded'>
      <img className='planet-image' 
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
      <div>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population: </span>
            <span>{population}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period: </span>
            <span>{rotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter: </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default RandomPlanet;
