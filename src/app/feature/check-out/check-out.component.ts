import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BuyPokemonComponent } from '../pokemon/buy-pokemon/buy-pokemon.component';
import { selectCartItems } from '../../state/cart/cart.selector';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css',
})
export class CheckOutComponent implements OnInit {
  cartItems$;
  constructor(private store: Store, private pokemonService: PokemonService) {
    this.cartItems$ = this.store.select(selectCartItems);
  }

  ngOnInit() {
    if (!(typeof window !== 'undefined' && !!window.sessionStorage)) {
      return;
    }
    const cartDetail = sessionStorage.getItem('cart');

    if (!cartDetail) {
      return;
    }

    try {
      const cartObject = JSON.parse(cartDetail);
      for (const item of cartObject.items) {
        console.log(item);
      }
    } catch (error) {
      console.error('Error parsing cart detail:', error);
    }
  }
}
