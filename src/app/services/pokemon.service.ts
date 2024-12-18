import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor() {
    console.log('PokemonService: Constructor called');
  }

  async getPokemonList(limit: number = 20) {
    const response = await axios.get(`${this.apiUrl}?limit=${limit}`);
    return response.data.results;
  }

  async getPokemonDetails(url: string) {
    const response = await axios.get(url);
    return response.data;
  }

  async getPokemonByName(name: string) {
    const response = await axios.get(`${this.apiUrl}/${name}`);
    return response.data;
  }

  async getPokemonEvolution(url: string){
    const response = await axios.get(url);
    return response.data;
  }
}
