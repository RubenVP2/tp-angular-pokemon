import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
    <nav>
      <h1>PokeStart</h1>
    </nav>
  `,
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
