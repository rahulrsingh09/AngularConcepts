import {Component, Injector} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <div>Hello World {{name}}</div>
  `,
})
export class HelloWorldComponent {
  name = ""

  constructor(private injector: Injector) {
    this.name = this.injector.get('name');
  }
}
