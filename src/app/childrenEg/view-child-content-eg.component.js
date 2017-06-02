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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tab_1 = require("./tab");
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
    return ViewChildContentEgComponent;
}());
__decorate([
    core_1.ViewChildren(tab_1.Tab)
], ViewChildContentEgComponent.prototype, "tab", void 0);
__decorate([
    core_1.ViewChild('child')
], ViewChildContentEgComponent.prototype, "div", void 0);
ViewChildContentEgComponent = __decorate([
    core_1.Component({
        selector: 'view-child-content',
        template: "\n    <tabs>\n      <tab [tabTitle]=\"'Tab 1'\" (click) = \"update()\">Tab 1 Content</tab>\n      <tab [tabTitle]=\"'Tab X'\">Tab 2 Content</tab>\n    </tabs>\n    <div #child>My Value\n    <div>My Value2</div></div>\n    \n  "
    })
], ViewChildContentEgComponent);
exports.ViewChildContentEgComponent = ViewChildContentEgComponent;
