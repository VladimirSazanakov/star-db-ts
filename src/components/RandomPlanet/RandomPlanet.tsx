import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/SwapiServise';

import './RandomPlanet.css';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const RandomPlanet = () => {

  const swapiService = new SwapiService;

  const [planet, setPlanet] = useState({
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  })

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const updatePlanet = () => {
    console.log('Function updatePlanet');
    const id: any = Math.floor(Math.random() * 26) + 2;
    // const id: any = 4000;
    swapiService
      .getPlanet(id)
      .then((planet1: any) => {
        setPlanet({
          id: id,
          name: planet1.name,
          population: planet1.population,
          rotationPeriod: planet1.rotation_period,
          diameter: planet1.diameter
        })
        setLoading(false);
      })
      .catch(onError);
  }

  let interval: any;

  useEffect(() => {
    interval = setInterval(updatePlanet, 5000);
    console.log("use Effect []");
    // updatePlanet();
    return () => {
      console.log('component Will Unmount');
      clearInterval(interval);
    };

  }, []);



  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <div className='random-planet jumbotron rounded'>
      {loading ? <Spinner /> : error ? <ErrorIndicator /> : <PlanetView planet={planet} />}
      {/* <img className='planet-image'
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
        </div> */}

    </div>
  )

}

function PlanetView({ planet }: any) {
  console.log('Planet view');
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <>
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
    </>
  )
}

export default RandomPlanet;
