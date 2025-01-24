import { Component } from '@angular/core';
import { Pokemon } from '../../types/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  pokemon?: Pokemon

  constructor(
    private readonly service: PokemonService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Récupérer le paramètre 'id' depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // Appelle le service pour récupérer les détails du Pokémon
      this.service.getPokemonbyId(id).subscribe({
        next: (postResponse: Pokemon) => {
          this.pokemon = postResponse;
          console.log(this.pokemon);
        },
        error: (err: Error) => {
          console.error(err);
        }
      });
    } else {
      console.error('ID non trouvé dans l\'URL');
    }
  }
}