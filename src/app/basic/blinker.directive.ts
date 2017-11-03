import { style } from '@angular/animations';

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({ selector: '[blinker]' })

export class BlinkerDirective {
  constructor(private r2 : Renderer2, private el : ElementRef ){
    setInterval(() => {
      let style = "hidden";
      if(this.el.nativeElement.style.visibility && this.el.nativeElement.style.visibility == "hidden"){
        style = "visible";
      }
      this.r2.setStyle(this.el.nativeElement,'visibility',style);
    }, 1000)
  }
}