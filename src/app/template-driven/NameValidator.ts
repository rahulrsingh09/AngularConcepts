import {AbstractControl, ValidatorFn, Validator, FormControl, NG_VALIDATORS} from "@angular/forms";
import {Directive} from '@angular/core';

function validateName(): ValidatorFn {
  return (c : AbstractControl) => {
    let isValid = c.value === 'Rahul';
    if(isValid){
      return null;
    }else{
      return {
        nameRahul: {
          valid: false
        }
      };
    }

  }
}

@Directive({
  selector: '[nameRahul][ngModel]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true
  }]
})

export class NameValidatorDirective implements Validator{

  validator: ValidatorFn;

  constructor() {
    this.validator = validateName();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}
