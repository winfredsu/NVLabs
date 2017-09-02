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
var TabOnClickScroll = /** @class */ (function () {
    function TabOnClickScroll(document, el) {
        this.document = document;
        this.el = el;
    }
    TabOnClickScroll.prototype.onClick = function () {
        if (this.document.body.scrollTop < this.scrollY ||
            this.el.nativeElement.classList.contains('active')) {
        }
        else {
            window.scrollTo(0, this.scrollY);
        }
    };
    __decorate([
        core_1.Input('tabOnClickScroll'),
        __metadata("design:type", Number)
    ], TabOnClickScroll.prototype, "scrollY", void 0);
    __decorate([
        core_1.HostListener('click', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TabOnClickScroll.prototype, "onClick", null);
    TabOnClickScroll = __decorate([
        core_1.Directive({ selector: '[tabOnClickScroll]' }),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [Document,
            core_1.ElementRef])
    ], TabOnClickScroll);
    return TabOnClickScroll;
}());
exports.TabOnClickScroll = TabOnClickScroll;
//# sourceMappingURL=tabOnClickScroll.directive.js.map