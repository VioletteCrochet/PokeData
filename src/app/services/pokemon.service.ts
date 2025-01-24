import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly http: HttpClient = inject(HttpClient) 
  
  getPokemon(): Observable<any> {
    return this.http.get<any>(environment.api_url_pokemon)
  }

  getPokemonbyId(id: any): Observable<any> {
    const url = `${environment.api_url_pokemon}/${id}`;
    return this.http.get<any>(url);
  }
}
