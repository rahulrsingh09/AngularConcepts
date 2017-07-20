/**
 * Created by SINGH on 2/16/2017.
 */

import {Component, ViewChildren, ViewChild, QueryList, ElementRef, AfterViewInit} from '@angular/core'

import {Tab} from './tab';

@Component({

  selector: 'view-child-content',
  template: `
      
    <div class="row">
      <div class="col-md-12">
        <p class="myHeader">
          View Child & Children + Some Notes on Angular Common Questions :D<span mdTooltip="View Source">
        <a href="https://github.com/rahulrsingh09/AngularConcepts/tree/master/src/app/childrenEg">
          <img src="code.png" alt="Image">
        </a>
      </span>
        </p>
      </div>
    </div>
    <hr>
    <tabs>
       <tab [tabTitle]="'View Child Tab'" (click) = "update()"><p>Click on me & see Console Log Press F12</p></tab>
       <tab [tabTitle]="'Test View Children Tab'"><p>Data inside Tab can add component Also</p></tab>
    </tabs>
    <div class="small">
    <div #child>Check Console for View Child Example
    <div>Check Console for View Children Example</div></div>
    </div>
  `,
  styles : ['.small { font-size: 10px; }']
})


export class ViewChildContentEgComponent implements AfterViewInit{

  @ViewChildren(Tab) tab: QueryList<Tab>; // For multiple
  @ViewChild('child') div: ElementRef; // Can use for Single // access div inside divs
  ngAfterViewInit() {
    // After the view is initialized, this.userProfile will be available
    this.update();
    console.log("Due to ngAfterview Init and ViewChild"+JSON.stringify(this.div));
  }

  update(){
    this.tab.forEach(tab => tab.print());
  }


}
