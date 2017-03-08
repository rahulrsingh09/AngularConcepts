import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number, args?: number): number {
    if(value != null){
        return Math.pow(value,2) + args;
    }
    else {
      return 0;
    }
  }

}
