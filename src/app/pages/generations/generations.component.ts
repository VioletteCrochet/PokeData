import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.scss'
})
export class GenerationsComponent {
  generations: any[] = [
    {num: 1, name: 'Rouge et Vert'},
    {num: 2, name: "Or et Argent"},
    {num: 3, name: "Ruby et Saphir"},
    {num: 4, name: "Diamant et Perle"},
    {num: 5, name: "Noir et Blanc"},
    {num: 6, name: "X et Y"},
    {num: 7, name: "Soleil et Lune"},
    {num: 8, name: "Epée et Bouclier"},
    {num: 9, name: "Ecarlate et Violet"}
    

  ]
}


