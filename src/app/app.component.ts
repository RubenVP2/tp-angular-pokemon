import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- TopBar -->
    <app-top-bar></app-top-bar>
    <!-- Conteneur des card -->
    <app-poke-list></app-poke-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tp';
}
