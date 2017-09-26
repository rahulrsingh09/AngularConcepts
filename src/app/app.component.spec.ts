/**
 * Created by SINGH on 3/13/2017.
 */
import {async, ComponentFixture, TestBed, ComponentFixtureAutoDetect, inject} from '@angular/core/testing';

import { AppComponent } from './app.component';
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {AngularService} from "./shared/angular.service";
import {HttpModule} from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


describe('TestComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true},
         AngularService
      ],
      imports: [HttpModule,MaterialModule,BrowserAnimationsModule],
      schemas: [ NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges(); this is beacuse we imported the Component Auto Detect
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
  }));


  it('should display Title as Hello Angular', () => {
    console.log("Angular "+el.textContent);
    expect(el.textContent).toContain("Hello Angular");
  });


});
