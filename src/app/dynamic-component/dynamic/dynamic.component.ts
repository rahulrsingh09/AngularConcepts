import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ReflectiveInjector } from '@angular/core';
import { AngularService } from "app/shared/angular.service";

import { HelloWorldComponent } from 'app/dynamic-component/dynamic/hello-world-component';
import { WorldHelloComponent } from './world-hello-component';

@Component({
  selector: 'dynamic',
  entryComponents: [HelloWorldComponent, WorldHelloComponent],
  template: `<div #dynamicContainer></div>`
})
export class DynamicComponent implements OnInit{

  currentComponent = null;

  @ViewChild('dynamicContainer' , {read : ViewContainerRef}) decorator : ViewContainerRef;  

  @Input() set componentData (data : {component: any , inputs :any}){
    if (!data){
      return;
    }
    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(data.inputs).map((inputName) => {return {provide: inputName, useValue: data.inputs[inputName]};});
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    
    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.decorator.parentInjector);
    
    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(data.component);
    
    // We create the component using the factory and the injector
    let component = factory.create(injector);
    //console.log(component.hostView);
    // We insert the component into the dom container
    this.decorator.insert(component.hostView);
    // We can destroy the old component is we like by calling destroy
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
    
    this.currentComponent = component;
    this.currentComponent.instance.ref = component;
    
  }


  constructor(private resolver : ComponentFactoryResolver) {}

  ngOnInit() {
    //this.ads = this.service.getAds();
  }

}
