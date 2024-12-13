import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';



@NgModule({
  declarations: [
    PokemonlistComponent,
    PokemondetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
