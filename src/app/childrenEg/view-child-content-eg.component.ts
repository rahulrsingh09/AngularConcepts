/**
 * Created by SINGH on 2/16/2017.
 */

import {Component, ViewChildren, ViewChild, QueryList, ElementRef, AfterViewInit} from '@angular/core'

import {Tab} from './tab';

@Component({

  selector: 'view-child-content',
  templateUrl: './view-child.html',
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
