import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './feature/products/product-list/product-list.component';
import { UserComponent } from './feature/biodata/user/user.component';
import { PokemonlistComponent } from './feature/pokemon/pokemonlist/pokemonlist.component';
import { PokemonDetailPageComponent } from './feature/pokemon/pokemon-detail-page/pokemon-detail-page.component';
import { DetailBuyPokemonComponent } from './feature/pokemon/detail-buy-pokemon/detail-buy-pokemon.component';
import { EditBuyPokemonComponent } from './feature/pokemon/edit-buy-pokemon/edit-buy-pokemon.component';
import { LoginComponent } from './feature/user/login/login.component';
import { authActivateGuard } from './guard/authactivate.guard';
import { CanDeactivateGuard } from './guard/cancomponentdeactivate';
import { CartDetailComponent } from './feature/cart-detail/cart-detail.component';
import { CheckOutComponent } from './feature/check-out/check-out.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'biodata',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pokemon',
    component: PokemonlistComponent,
     canActivate: [authActivateGuard]
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailPageComponent,
    canActivate: [authActivateGuard]
  },
  {
    path: 'detail-buy',
    component: DetailBuyPokemonComponent,
    canActivate: [authActivateGuard]
  },
  {
    path: 'edit-buy/:id',
    component: EditBuyPokemonComponent,
    canActivate: [authActivateGuard],
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'cart-detail',
    component: CartDetailComponent
  },
  {
    path: 'check-out',
    component: CheckOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
