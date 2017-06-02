import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDynamicDirective]'
})
export class DynamicDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
