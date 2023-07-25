import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url: string) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Manual Error Could not fetch ${url}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id: number) {
    return this.getResource(`/people/${id.toString()}`);
  }

  async getAllPlanets() {
    const res = await this.getResource('/planets/');
    return res.results;
  }

  getPlanet(id: number) {
    return this.getResource(`/planets/${id.toString()}`);
  }

  async getAllStarships() {
    const res = await this.getResource('/starships/');
    return res.results;
  }

  getStarship(id: number) {
    return this.getResource(`/planets/${id.toString()}`);
  }
}

const swapi = new SwapiService;

swapi.getAllStarships().then(starships => {
  starships.forEach((starship: any) => {
    console.log(starship.name);
  });
})

swapi.getStarship(1).then(starship => {
  console.log(starship);
})

function App() {

  const swapi = new SwapiService;

  /*
  swapi.getAllPeople().then(body => {
    body.forEach((el: any) => {
      console.log(el.name)
    })
  });

  swapi.getPerson(3).then(person => {
    console.log(person);
  })

  swapi.getAllPlanets().then(planets => {
    planets.forEach((planet: any) => {
      console.log(planet.name);
    });
  })

  swapi.getPlanet(1).then(planet => {
    console.log(planet);
  })

  swapi.getAllStarships().then(starships => {
    starships.forEach((starship: any) => {
      console.log(starship.name);
    });
  })

  swapi.getStarship(1).then(starship => {
    console.log(starship);
  })
*/
  return (
    <div className="App">

    </div>
  );
}

export default App;
