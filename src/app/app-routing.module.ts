import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './feature/products/product-list/product-list.component';
import { UserComponent } from './feature/biodata/user/user.component';
import { PokemonlistComponent } from './feature/pokemon/pokemonlist/pokemonlist.component';
import { PokemonDetailPageComponent } from './feature/pokemon/pokemon-detail-page/pokemon-detail-page.component';
import { DetailBuyPokemonComponent } from './feature/pokemon/detail-buy-pokemon/detail-buy-pokemon.component';
import { EditBuyPokemonComponent } from './feature/pokemon/edit-buy-pokemon/edit-buy-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'biodata',
    component: UserComponent
  },
  {
    path: 'pokemon',
    component: PokemonlistComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailPageComponent
  },
  {
    path: 'detail-buy',
    component: DetailBuyPokemonComponent
  },
  {
    path: 'edit-buy/:id',
    component: EditBuyPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
