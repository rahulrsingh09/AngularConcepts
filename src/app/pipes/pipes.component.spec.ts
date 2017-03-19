import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesComponent } from './pipes.component';
import {FormsModule} from "@angular/forms";


import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'square'})
class MockPipe implements PipeTransform {
  transform(value: number): number {
    //Do stuff here, if you want
    return value;
  }
}


describe('PipesComponent', () => {
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ PipesComponent,MockPipe ], // declare the test component
    })
      .compileComponents().then(()=>TestBed.createComponent(PipesComponent));  // compile template and css
  }));

  fixture = TestBed.createComponent(PipesComponent);
  component = fixture.componentInstance;


  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

});
