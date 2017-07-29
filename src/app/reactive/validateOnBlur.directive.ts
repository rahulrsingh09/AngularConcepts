
import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[validate-onblur]',
  host: {
    '(focus)': 'onFocus($event)',
    '(blur)': 'onBlur($event)'
  }
})
export class ValidateOnBlurDirective {
    constructor(public formControl: NgControl) {
    }

    onFocus($event) {
      this.formControl.control.markAsUntouched({onlySelf: false});
    }

    onBlur($event) {
      this.formControl.control.markAsTouched({onlySelf: true});
    }
}