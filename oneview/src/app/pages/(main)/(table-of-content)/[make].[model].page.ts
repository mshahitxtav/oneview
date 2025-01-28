
 import { Component, Input } from '@angular/core'; 



@Component({
  standalone: true,
  imports: [],
  template: `
     <p>table page works!! {{make}} {{ model }}</p>
  `,
})
export default class TOCPage {
  @Input() make!: string;
  @Input() model!: string;
} 
