import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentchildComponent } from './parentchild.component';
import {ChildparentComponent} from "./childparent.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


describe('ParentchildComponent', () => {
  let component: ParentchildComponent;
  let fixture: ComponentFixture<ParentchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentchildComponent,ChildparentComponent],
      imports: [BrowserAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.valueToBePassed = "XYZ";
    component.childValue = "CC";
  });

  it('should create Parent Child Component', () => {
    expect(component).toBeDefined()
  });
});
