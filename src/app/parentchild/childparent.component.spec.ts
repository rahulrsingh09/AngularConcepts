import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildparentComponent } from './childparent.component';

describe('ChildparentComponent', () => {
  let component: ChildparentComponent;
  let fixture: ComponentFixture<ChildparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
