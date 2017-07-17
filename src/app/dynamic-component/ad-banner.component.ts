import {
  Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy,
  AfterContentInit
} from '@angular/core';
import {AdItem} from "./ad-item";
import {DynamicDirectiveDirective} from "./dynamic-directive.directive";
import {AdComponent} from "./ad.component";


@Component({
  selector: 'add-banner',
  template: `
          
              <div class="ad-banner">
                <p class="myHeader">Advertisements</p>
                <ng-template appDynamicDirective></ng-template>
              </div>

            `
})
export class AdBannerComponent implements AfterContentInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAddIndex: number = -1;
  @ViewChild(DynamicDirectiveDirective) adHost: DynamicDirectiveDirective;
  subscription: any;
  interval: any;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
