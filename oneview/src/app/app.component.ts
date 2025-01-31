import { NgScrollbarModule } from 'ngx-scrollbar';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'oneview-root',
  imports: [RouterOutlet, NgScrollbarModule],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {}
