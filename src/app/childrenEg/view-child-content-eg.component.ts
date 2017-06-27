/**
 * Created by SINGH on 2/16/2017.
 */

import {Component, ViewChildren, ViewChild, QueryList, ElementRef, AfterViewInit} from '@angular/core'

import {Tab} from './tab';

@Component({

  selector: 'view-child-content',
  template: `
    
    <div class="row">
      <div class="col-md-8">
        <h3 class="test">
          View Child & Children
        </h3>
      </div>
    
      <div class="col-md-4">
          <span mdTooltip="View Source">
            <a href="https://github.com/rahulrsingh09/AngularConcepts/tree/master/src/app/childrenEg">
              <img src="/assets/images/code.png" alt="Image">
            </a>
          </span>
      </div>
    </div>


    <tabs>
      <tab [tabTitle]="'Tab 1'" (click) = "update()">Tab 1 Content</tab>
       <tab [tabTitle]="'Tab X'">Tab 2 Content</tab>
    </tabs>
    <div #child>Check Console for View Child Example
    <div>Check Console for View Children Example</div></div>
    
  `
})


export class ViewChildContentEgComponent implements AfterViewInit{

  @ViewChildren(Tab) tab: QueryList<Tab>; // For multiple
  @ViewChild('child') div: ElementRef; // Can use for Single // access div inside divs
  ngAfterViewInit() {
    // After the view is initialized, this.userProfile will be available
    this.update();
    console.log(this.div);
  }

  update(){
    this.tab.forEach(tab => tab.print());
  }


}
