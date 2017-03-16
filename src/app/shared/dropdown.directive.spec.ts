import {
  it,
  describe,
  expect,
  inject,
  injectAsync,
  beforeEach,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component} from '@angular/core';


describe('DropDown Directive', () => {

  let mouseenter;

  beforeEachProviders(() => [
    TestComponentBuilder
  ]);

  beforeEach(() => {
    mouseenter = new MouseEvent('click', {});
  });


  it('Style added', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    let template = '<div appDropdown></div>';
    return tcb.overrideTemplate(TestComponent, template)
      .createAsync(TestComponent)
      .then((fixture) => {
        let element = fixture.nativeElement;
        let component = fixture.componentInstance;
        spyOn(component, 'click');
        let div = element.querySelector('div');
        let event = new Event('click');
        div.dispatchEvent(event);

        expect(div.style.className).toEqual('open');

      });
}));

  @Component({
    selector: 'container'
  })

  class TestComponent { }
