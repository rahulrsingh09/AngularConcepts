import{PipeTransform,Pipe} from '@angular/core';

@Pipe({
  name:'relativeTime'
})

export class RelativeTimeFilterPipe implements PipeTransform{

  transform(inputDate:string):string{
    var current = new Date().valueOf();
    var input = new Date(parseInt(inputDate)).valueOf();
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - input;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
      return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
      return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
    }

    else {
      console.log('inside the if condition', elapsed);
      return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
    }

  }
}
