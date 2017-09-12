import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../deploy/src/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
