import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Pokemon} from "../model/pokemon.model";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  private apiUrl = "https://pokeapi.co/api/v2/pokemon/charizard";

  constructor(private http: HttpClient) { }

  recupererPokemon(): Observable<Pokemon[]>{
    return this.http
      .get(this.apiUrl)
      .pipe(
        map((response: Response) => {
        return <Pokemon[]>response.json();
      })
      );
  }

  private static handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
