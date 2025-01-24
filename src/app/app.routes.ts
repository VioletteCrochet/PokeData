import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GenerationsComponent } from './pages/generations/generations.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
    {path: "", title: "Home", component: HomeComponent},
    {path: "pokedex", title: "Pokédex", component: PokedexComponent},
    {path: "generations", title: "Générations", component: GenerationsComponent},
    {path: "contact", title: "Contact",  component: ContactComponent},
    {path: "pokemonDetail/:id", title: "Pokémon", component: PokemonDetailComponent},


    {path: "**", title: "Not Found", component: PageNotFoundComponent},    
];
