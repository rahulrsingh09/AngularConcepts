/**
 * Created by SINGH on 2/16/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tab_1 = require('./tab');
var ViewChildContentEgComponent = (function () {
    function ViewChildContentEgComponent() {
    }
    ViewChildContentEgComponent.prototype.ngAfterViewInit = function () {
        // After the view is initialized, this.userProfile will be available
        this.update();
        console.log(this.div);
    };
    ViewChildContentEgComponent.prototype.update = function () {
        this.tab.forEach(function (tab) { return tab.print(); });
    };
    __decorate([
        core_1.ViewChildren(tab_1.Tab), 
        __metadata('design:type', core_1.QueryList)
    ], ViewChildContentEgComponent.prototype, "tab", void 0);
    __decorate([
        // For multiple
        core_1.ViewChild('child'), 
        __metadata('design:type', core_1.ElementRef)
    ], ViewChildContentEgComponent.prototype, "div", void 0);
    ViewChildContentEgComponent = __decorate([
        core_1.Component({
            selector: 'view-child-content',
            template: "\n    <tabs>\n      <tab [tabTitle]=\"'Tab 1'\" (click) = \"update()\">Tab 1 Content</tab>\n      <tab [tabTitle]=\"'Tab X'\">Tab 2 Content</tab>\n    </tabs>\n    <div #child>My Value\n    <div>My Value2</div></div>\n    \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ViewChildContentEgComponent);
    return ViewChildContentEgComponent;
}());
exports.ViewChildContentEgComponent = ViewChildContentEgComponent;
//# sourceMappingURL=view-child-content-eg.component.js.map