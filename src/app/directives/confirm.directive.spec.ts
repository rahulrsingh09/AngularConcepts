import { ConfirmDirective } from './confirm.directive';
import { TestBed } from "@angular/core/testing";
import { DirectivesComponent } from "./directives.component";
import { ComponentFixture } from "@angular/core/typings/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('ConfirmDirective', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;
  let inputEl: DebugElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesComponent,ConfirmDirective]
    });
    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('button'));
  });

  it('clicking on Button', () => {
    inputEl.triggerEventHandler('click', ['$event']);
    spyOn(window, 'alert');
    expect(window.alert).toHaveBeenCalled();
  });

  });
