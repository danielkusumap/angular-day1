import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrl: './pokemondetail.component.css'
})
export class PokemondetailComponent {
  @Input() pokemon:any = null;

  constructor(private router : Router){}

  goToDetail(pokemon: any) {
    const urlParts = pokemon.url.split('/');
    console.log(urlParts);
    const id = urlParts[urlParts.length - 2]; // ID adalah bagian sebelum "/" terakhir
    console.log(id);
    this.router.navigate(['/pokemon', id]);
  }
}
