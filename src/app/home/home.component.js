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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("../app.component");
var material_1 = require("@angular/material");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, document, appComponent, title) {
        this.dialog = dialog;
        this.document = document;
        this.appComponent = appComponent;
        this.title = title;
        title.setTitle('NVLabs');
    }
    HomeComponent.prototype.onWindowScroll = function () {
        if (this.document.body.scrollTop > 60 || this.document.documentElement.scrollTop > 60) {
            // add a page-on-scroll class to header 
            this.appComponent.addClass('page-on-scroll');
        }
        else {
            // remove page-on-scroll class 
            this.appComponent.removeClass('page-on-scroll');
        }
    };
    HomeComponent.prototype.onResize = function (event) {
        this.height = event.target.innerHeight;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.appComponent.removeClass('page-on-scroll');
        this.height = window.innerHeight;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.appComponent.addClass('page-on-scroll');
    };
    HomeComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(NVPOneMinuteDialog, {
            width: '800px',
            height: '600px'
        });
    };
    __decorate([
        core_1.HostListener('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onWindowScroll", null);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onResize", null);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-home',
            templateUrl: './home.component.html'
            // styleUrls: ['./app.component.css']	
        }),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __param(2, core_1.Input('AppComponent')),
        __metadata("design:paramtypes", [material_1.MdDialog,
            Document,
            app_component_1.AppComponent,
            platform_browser_1.Title])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var NVPOneMinuteDialog = /** @class */ (function () {
    function NVPOneMinuteDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    NVPOneMinuteDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvp-one-minute-dialog',
            templateUrl: './nvp-one-minute-dialog.html'
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef])
    ], NVPOneMinuteDialog);
    return NVPOneMinuteDialog;
}());
exports.NVPOneMinuteDialog = NVPOneMinuteDialog;
//# sourceMappingURL=home.component.js.map