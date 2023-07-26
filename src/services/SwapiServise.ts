export default class SwapiService {

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