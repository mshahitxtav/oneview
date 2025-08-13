import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'oneview-home',

  imports: [AnalogWelcomeComponent],
  template: `
     <oneview-analog-welcome/>
  `,
})
export default class HomeComponent {}
