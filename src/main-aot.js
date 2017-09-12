"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var app_module_ngfactory_1 = require("../deploy/src/app/app.module.ngfactory");
var core_1 = require("@angular/core");
if (!/localhost/.test(document.location.host)) {
    core_1.enableProdMode();
}
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
//# sourceMappingURL=main-aot.js.map