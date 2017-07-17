import { Component, Input } from '@angular/core';
import { AdComponent }      from './ad.component';
@Component({
  template: `
    <div class="job-ad">
      <p class="myHeader">{{data.headline}}</p> 
      <p>{{data.body}}</p>
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
}
