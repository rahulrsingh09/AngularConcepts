import {Component, Input} from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <p class="myHeader">Featured Hero Profile</p>
      <p>{{data.name}}</p>
      <p>{{data.bio}}</p>
      <p><strong>Hire this hero today!</strong></p>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}
