import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesComponent } from './directives.component';
import {FormsModule} from "@angular/forms";
import {ConfirmDirective} from "./confirm.directive";

describe('DirectivesComponent', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ FormsModule ],
        declarations: [ DirectivesComponent,ConfirmDirective ], // declare the test component
      })
        .compileComponents();  // compile template and css


      fixture = TestBed.createComponent(DirectivesComponent);
      component = fixture.componentInstance;

    }));



    it('should have a defined Directive component', () => {
      expect(component).toBeDefined();
    });

  });

