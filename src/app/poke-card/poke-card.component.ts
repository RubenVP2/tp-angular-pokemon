import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../model/pokemon.model";

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  @Input() pokemon?: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
