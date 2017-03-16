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


describe('DropDown Diretive', () => {

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
        let div = fixture.nativeElement.querySelector('div');

        fixture.detectChanges();

        expect(div.style.className).toEqual('open');

      });
}));

  @Component({
    selector: 'container'
  })

  class TestComponent { }
