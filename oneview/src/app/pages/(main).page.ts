import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  imports: [RouterOutlet],
  template: `
  <div class="bg-background h-full w-full">
    <h1>This is test </h1>
    <router-outlet></router-outlet> 
  </div>
  `,
})
export default class OneviewComponent {
}
