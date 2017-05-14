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
      return this.validateAgeObservable(c.value);
  }

  validateAgeObservable( age: number ) {


    return new Observable(observer => {

      if( age === 20 ) {
        observer.next({asyncInvalid: true});
      } else {
        observer.next({asyncInvalid: false});
        console.log('validate');
      }
    });
  }

  validateAgePromise( age: number ) {
    return new Promise(resolve => {
      setTimeout(() => {
        if( age === 20 ) {
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
