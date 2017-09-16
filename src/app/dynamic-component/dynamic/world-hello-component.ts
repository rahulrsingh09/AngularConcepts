import {Component, Injector} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <p> <span class="label label-danger">{{name}}</span></p>
  `,
})
export class WorldHelloComponent {
  name = ""
  ref : any;

  constructor(private injector: Injector) {
    this.name = this.injector.get('name');
  }

  removeComponent(){
    this.ref.destroy();
  }
}
