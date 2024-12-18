import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RealtimeDatabaseService } from '../../../services/realtime-database.service';
import { PokemonService } from '../../../services/pokemon.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-buy-pokemon',
  templateUrl: './edit-buy-pokemon.component.html',
  styleUrl: './edit-buy-pokemon.component.css',
})
export class EditBuyPokemonComponent implements OnInit {
  buyId: string = "";
  pokemonToBuy: any[] = [];

  constructor(private realtimeDatabase: RealtimeDatabaseService, private route: ActivatedRoute, private router : Router, private pokemonService: PokemonService){}

  buyForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    pokemonToBuy: new FormControl(''),
  });

  async ngOnInit() {
    this.buyId = this.route.snapshot.paramMap.get('id') || '';
    if (!this.buyId) {
      return;
    }
    const buyObject = await this.realtimeDatabase.getFormSubmission(this.buyId);

    if (buyObject.pokemonToBuy && Array.isArray(buyObject.pokemonToBuy)) {
      this.pokemonToBuy = await Promise.all(
        buyObject.pokemonToBuy.map(async (pokemonName: string) => {
          return this.pokemonService.getPokemonByName(pokemonName);
        })
      );
    }
    console.log(this.pokemonToBuy)
    this.buyForm.patchValue(buyObject);
  }

  async saveChanges(){
    if (this.buyForm.invalid) {
      this.buyForm.markAllAsTouched();
      return;
    }

    const updatedData = {
      ...this.buyForm.value,
      pokemonToBuy: this.pokemonToBuy.map((pokemon) => pokemon.name), // Save only Pokémon names
    };

    try {
      await this.realtimeDatabase.updateFormSubmission(
        this.buyId,
        updatedData
      );
      this.router.navigate(['/detail-buy']);
    } catch (error) {
      console.error('Error updating submission:', error);
    }
  }
}
