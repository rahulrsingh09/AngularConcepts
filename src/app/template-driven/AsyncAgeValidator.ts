/**
 * Created by c1xadmin on 5/14/2017.
 */

import {Directive, forwardRef} from "@angular/core";
import {NG_ASYNC_VALIDATORS, Validator, AbstractControl, AsyncValidator} from "@angular/forms";
import {Observable} from "rxjs";


@Directive({
  selector: '[asyncValidator][ngModel]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => AsyncAgeValidator), multi: true

  }]
})

export class AsyncAgeValidator implements Validator{

  validate(c: AbstractControl): Observable<{[key : number] : any}>{
    // return this.validateAgeObservable(c.value);
    return this.validateAgeObservable(c.value).first();
  }

  validateAgeObservable( age: number ) {
    return new Observable(observer => {
      observer.next(age > 18 ? null : {asyncInvalid: true});
      // observer.complete(); or this or .first();
    });
  }

  validateAgePromise( age: number ) {
    return new Promise(resolve => {
      setTimeout(() => {
        if( age < 18 ) {
          resolve({
            asyncInvalid: true
          })
        } else {
          resolve(null);
        }
      }, 4000);
    })
  }


}
