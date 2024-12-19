import { Component } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { addToCart } from '../../../state/cart/cart.actions'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrl: './pokemon-detail-page.component.css',
})
export class PokemonDetailPageComponent {
  pokemon: any;
  pokemonId: string | null = null;
  evolutions: any[] = [];
  evoIndex = 0;
  pokemonToBuy: any = '';
  tempEvolutions: any[] = [];

  showForm: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  async ngOnInit() {
    this.pokemonId = this.route.snapshot.paramMap.get('id');
    if (!this.pokemonId) {
      return;
    }

    const pokemonDetail = await this.pokemonService.getPokemonByName(
      this.pokemonId
    );
    const pokemonSpecies = await this.pokemonService.getPokemonDetails(
      pokemonDetail.species.url
    );

    const pokemonEvolution = await this.pokemonService.getPokemonEvolution(
      pokemonSpecies.evolution_chain.url
    );

    let pokemonDetails = await this.pokemonService.getPokemonByName(
      pokemonEvolution.chain.species.name
    );
    this.evolutions.push(pokemonDetails);
    await this.extractEvolution(pokemonEvolution.chain.evolves_to[0]);
    this.pokemon = await this.pokemonService.getPokemonByName(
      pokemonEvolution.chain.species.name
    );
    // console.log("evolutions", this.evolutions);
  }

  async extractEvolution(evoDetail: any) {
    if (evoDetail.evolves_to.length >= 0) {
      let pokemonDetails = await this.pokemonService.getPokemonByName(
        evoDetail.species.name
      );
      this.evolutions.push(pokemonDetails);
      this.extractEvolution(evoDetail.evolves_to[0]);
    }
    return;
  }

  async evolvePokemon() {
    if (this.evoIndex < this.evolutions.length - 1) {
      this.evoIndex++;
      this.pokemon = await this.pokemonService.getPokemonByName(
        this.evolutions[this.evoIndex].name
      );
    }
  }

  async devolvePokemon() {
    if (this.evoIndex >= 1) {
      this.evoIndex--;
      this.pokemon = await this.pokemonService.getPokemonByName(
        this.evolutions[this.evoIndex].name
      );
    }
  }

  async selectEvolution(index: number) {
    this.evoIndex = index;
    this.pokemon = await this.pokemonService.getPokemonByName(
      this.evolutions[this.evoIndex].name
    );
  }

  playCry() {
    let audio = new Audio();
    audio.src = this.pokemon.cries.latest;
    audio.load();
    audio.play();
  }

  goBack() {
    this.router.navigate(['/pokemon']);
  }

  async formBuy(pokemon: any) {
    this.pokemonToBuy = pokemon;
    this.showForm = !this.showForm;
    // for (let i = 0; i < this.evolutions.length; i++) {
    //   this.tempEvolutions.push(await this.selectEvolution(i));
    // }
  }

  addToCart(pokemon: any) {
    const cartItem = { pokemon, quantity: 1 };
    alert(`Pokemon ${cartItem.pokemon.name} has been added to your cart!`);
    this.store.dispatch(addToCart(cartItem));
  }
}
