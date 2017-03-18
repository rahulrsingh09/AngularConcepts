import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {DropdownDirective} from "./dropdown.directive";
import {By} from "@angular/platform-browser";


@Component({
  template: `
  <ul class="nav navbar-nav">
    <li class="dropdown" appDropdown>
    </li>
  </ul>
`
})
class TestComponent { }


describe('DropdownDirective',()=>{
  var fixture;
  var des;
  beforeEach(() => {

    fixture = TestBed.configureTestingModule({
      declarations: [ DropdownDirective, TestComponent ]
    })
      .createComponent(TestComponent);
      fixture.detectChanges();
      des = fixture.debugElement.query(By.css('li'));

  });

  it('should have open class attached after click on li ', () => {
      des.triggerEventHandler('click',['$event']);
      fixture.detectChanges();
      expect(des.nativeElement.classList.contains('open')).toBeTruthy();
  });

  it('should have 1 DropDown Element Attached',()=>{
      var elements = fixture.debugElement.queryAll(By.directive(DropdownDirective));
      expect(elements.length).toBe(1);
  })

});
