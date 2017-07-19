/**
 * Created by rahul.singh@c1exchange.com on 7/18/2017.
 */

import {Pipe} from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: true
})
export class ReversePipe {
  transform (values) {
    //console.log("pipe called");
    if (values) {
      return values.reverse();
    }
  }
}
