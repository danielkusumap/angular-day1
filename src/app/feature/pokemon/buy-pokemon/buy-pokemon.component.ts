import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '../../../services/pokemon.service';
import { RealtimeDatabaseService } from '../../../services/realtime-database.service';

@Component({
  selector: 'app-buy-pokemon',
  templateUrl: './buy-pokemon.component.html',
  styleUrl: './buy-pokemon.component.css'
})
export class BuyPokemonComponent {
  @Input() pokemon:any = null;
  @Input() showForm:boolean = false;
  @Input() evolutions:any = [];
  selectedPokemons: string[] = []; 

  constructor(private realtimeDatabase: RealtimeDatabaseService){}

  buyForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    pokemonToBuy: new FormControl(''),
  });

  onSubmit() {
    // console.log('Form Submitted!', this.buyForm.value);
    this.buyForm.value.pokemonToBuy = this.selectedPokemons.join(',');
    // console.log(this.buyForm.valid);
    if (this.buyForm.valid) {
      this.realtimeDatabase.saveFormSubmission(this.buyForm.value)
      this.buyForm.reset();
      this.selectedPokemons = [];
      alert('Form Submitted Successfully!');
    }
  }

  togglePokemonSelection(pokemonName: string): void {
    const index = this.selectedPokemons.indexOf(pokemonName);
    if (index === -1) {
      this.selectedPokemons.push(pokemonName);
    } else {
      this.selectedPokemons.splice(index, 1);
    }
  }
}
