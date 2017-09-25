import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <nav>
          <a routerLink='/dashboard' routerLinkActive='active'>Dashboard</a>
          <a routerLink='heroes' routerLinkActive='active'>Heroes</a>
      </nav>
      <hero-search></hero-search>
      <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'Tour of Heroes';
}
