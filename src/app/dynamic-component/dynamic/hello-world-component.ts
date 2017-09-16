import {Component, Injector} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <p><span class="label label-primary">{{name}}</span></p><button md-raised-button color = "primary" (click)="removeComponent()" > Destroy me </button>
    <ngx-gist [gistId]="'rahulrsingh09/271aaff4cb134685ed7a62197670938c'" [file] = "'27.ts'" style="height:600px"></ngx-gist>
    <br>
  `,
})
export class HelloWorldComponent {
  name = "";
  ref: any;

  constructor(private injector: Injector) {
    this.name = this.injector.get('name');
  }

  removeComponent(){
    this.ref.destroy();
  }
}
