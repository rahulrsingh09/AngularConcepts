import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocComponent } from './poc.component';

describe('PocComponent', () => {
  let component: PocComponent;
  let fixture: ComponentFixture<PocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
