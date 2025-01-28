
 import { Component, Input } from '@angular/core'; 



@Component({
  standalone: true,
  imports: [],
  template: `
     <p>document page works!! {{ make }} {{ model }} {{ pub }} {{ url }}</p>
  `,
})
export default class DocumentPage {
  @Input() make!: string;
  @Input() model!: string;
  @Input() pub!: string;
  @Input() url!: string;
} 
