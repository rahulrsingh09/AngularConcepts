import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by rahul.singh@c1exchange.com on 7/9/2017.
 */

@Pipe({
  name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform{

  transform(value: any[], q: string) {
    if (!q || q === '') {
      return value;
    }
    return value.filter(item => -1 < item.comment.toLowerCase().indexOf(q.toLowerCase()));
  }
}
