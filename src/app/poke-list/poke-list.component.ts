import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../model/pokemon.model";
import {PokeAPIServiceService} from "../service/poke-apiservice.service";

@Component({
  selector: 'app-poke-list',
  template: `
    <app-poke-card *ngFor="let pokemon of _pokemonsArray"></app-poke-card>
  `,
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  _pokemonsArray!: Pokemon[];

  constructor(private pokemonAPI: PokeAPIServiceService) { }

  recupererPokemon(): void {
    this.pokemonAPI.recupererPokemon()
      .subscribe(
        response => this._pokemonsArray = response,
             error => console.log("Error :: " + error)
      );
  }
  ngOnInit(): void {
    this.recupererPokemon();
  }

}
