import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  styles: [`
    .pane{
      padding: 1em;
    }
  `],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content> <!--neccessary to display data between the <tab> selector-->
    </div>
  `
})
export class Tab {
  @Input('tabTitle') title: string;
  @Input() active = false;

  print(){
      console.log("View Child Example");
  }
}