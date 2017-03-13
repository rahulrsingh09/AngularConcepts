import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewencapsulationComponent } from './viewencapsulation.component';

describe('ViewencapsulationComponent', () => {
  let component: ViewencapsulationComponent;
  let fixture: ComponentFixture<ViewencapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewencapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewencapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
