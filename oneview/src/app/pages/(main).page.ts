import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  imports: [RouterOutlet],
  template: `
     <h1>This is test </h1>
     <router-outlet></router-outlet> 
  `,
})
export default class OneviewComponent {
}
