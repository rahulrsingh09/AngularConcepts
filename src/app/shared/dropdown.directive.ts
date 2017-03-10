import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  private isOpen:boolean = false;

  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }
  constructor() { }

  @HostListener('click')open(){
    this.isOpen = true;
  }

  @HostListener('mouseleave')close(){
    this.isOpen = false;
  }
}
