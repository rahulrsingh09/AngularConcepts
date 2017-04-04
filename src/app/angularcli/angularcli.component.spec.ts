import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcliComponent } from './angularcli.component';

describe('AngularcliComponent', () => {
  let component: AngularcliComponent;
  let fixture: ComponentFixture<AngularcliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularcliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
