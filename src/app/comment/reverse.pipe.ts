/**
 * Created by rahul.singh@c1exchange.com on 7/18/2017.
 */

import {Pipe} from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe {
  transform (values) {
    if (values) {
      return values.reverse();
    }
  }
}
