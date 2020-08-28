import { Component } from '@angular/core';

@Component({
  selector: 'app-root',


  // template: `<app-menu-bar></app-menu-bar><app-menu-interno></app-menu-interno><router-outlet></router-outlet>`,
  // template: `<router-outlet></router-outlet>`,
  //styleUrls: ['./app.component.scss']

  template: `<app-menu-bar></app-menu-bar><router-outlet></router-outlet>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'samsung-evaluation-ui';
}
