import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './feature/products/product-list/product-list.component';
import { UserComponent } from './feature/biodata/user/user.component';
import { PokemonlistComponent } from './feature/pokemon/pokemonlist/pokemonlist.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
