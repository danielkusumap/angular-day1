import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';
import { PokemonDetailPageComponent } from './pokemon-detail-page/pokemon-detail-page.component';
import { BuyPokemonComponent } from './buy-pokemon/buy-pokemon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailBuyPokemonComponent } from './detail-buy-pokemon/detail-buy-pokemon.component';
import { EditBuyPokemonComponent } from './edit-buy-pokemon/edit-buy-pokemon.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokemonlistComponent,
    PokemondetailComponent,
    PokemonDetailPageComponent,
    BuyPokemonComponent,
    DetailBuyPokemonComponent,
    EditBuyPokemonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PokemonModule { }
