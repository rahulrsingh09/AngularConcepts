import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

export function  validate(c: AbstractControl): Observable<{[key : number] : any}>{
    // return this.validateAgeObservable(c.value);
    return validateAgeObservable(c.value).first();
  }

  function validateAgeObservable( age: number ) {
    return new Observable(observer => {
      setTimeout(()=> {observer.next(age > 18 ?  null: {inValid: true});} ,5000);
      // observer.complete(); or this or .first();
    });
  }

