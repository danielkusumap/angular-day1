import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrl: './pokemondetail.component.css'
})
export class PokemondetailComponent {
  @Input() pokemon:any = null;

}
