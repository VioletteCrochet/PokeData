import { Component } from '@angular/core';
import { Pokemon } from '../../types/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-preview',
  imports: [],
  templateUrl: './pokemon-preview.component.html',
  styleUrl: './pokemon-preview.component.scss'
})
export class PokemonPreviewComponent {
  pokemons?: Pokemon[];
  link: string = "pokemonDetail"
  
 constructor(private readonly service: PokemonService) {}

 ngOnInit() {
  this.service.getPokemon().subscribe({
    next: (postResponse: any) => {
      console.log(postResponse)
      this.pokemons = postResponse
    },
    error: (err: Error) => {
      console.error(err)
    }
  })
 }
}
