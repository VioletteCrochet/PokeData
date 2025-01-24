import { Component } from '@angular/core';
import { PokemonPreviewComponent } from "../../partials/pokemon-preview/pokemon-preview.component";

@Component({
  selector: 'app-pokedex',
  imports: [PokemonPreviewComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
}
