import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { first } from 'rxjs/operators';

export function  validate(c: AbstractControl): Observable<{[key : number] : any}>{
    // return this.validateAgeObservable(c.value);
    return validateAgeObservable(c.value).pipe(first());
  }

  function validateAgeObservable( age: number ) {
    return new Observable(observer => {
      setTimeout(()=> {observer.next(age > 18 ?  null: {inValid: true});} ,2000);
      // observer.complete(); or this or .first();
    });
  }

export function emailValidator(control: AbstractControl):{[key: string]: boolean} {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
              return {invalid:true};
        }
        return null;
    }