import { ConfirmDirective } from './confirm.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectivesComponent } from "./directives.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('ConfirmDirective', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;
  let inputEl: DebugElement;
  let directiveInstance;
  let directiveEl;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesComponent,ConfirmDirective]
    });
    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('button'));


    directiveEl = fixture.debugElement.query(By.directive(ConfirmDirective));
    directiveInstance= directiveEl.injector.get(ConfirmDirective);

  });

  it('clicking on Button', () => {
    inputEl.triggerEventHandler('click',['$event']);
    expect(directiveInstance.value).toBe('Rahul');
  });


});
