import { Component, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItems } from '../../state/cart/cart.selector';
import { addToCart, clearCart, removeFromCart } from '../../../app/state/cart/cart.actions';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent implements OnChanges{
  cartItems$;
  constructor(private store: Store){
    this.cartItems$ = this.store.select(selectCartItems);
  }

  ngOnChanges(){
    this.cartItems$ = this.store.select(selectCartItems);
  }

  addToCart(pokemon: any) {
    const cartItem = { pokemon, quantity: 1 };
    this.store.dispatch(addToCart(cartItem));
  }

  removeItem(pokemonName: string): void {
    this.store.dispatch(removeFromCart({ pokemonName }));
  }

  clearCart(): void {
    this.store.dispatch(clearCart());
  }
}
