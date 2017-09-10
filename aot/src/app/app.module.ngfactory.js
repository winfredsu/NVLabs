"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("../../../src/app/app.module");
var i2 = require("../../../src/app/app.component");
var i3 = require("./home/home.component.ngfactory");
var i4 = require("./platform/platform.component.ngfactory");
var i5 = require("./simulator/simulator.component.ngfactory");
var i6 = require("./showcase/showcase.component.ngfactory");
var i7 = require("./explore/explore.component.ngfactory");
var i8 = require("./about/about.component.ngfactory");
var i9 = require("./terms/terms.component.ngfactory");
var i10 = require("./app.component.ngfactory");
var i11 = require("@angular/common");
var i12 = require("@angular/platform-browser");
var i13 = require("@angular/router");
var i14 = require("@agm/core/utils/browser-globals");
var i15 = require("@agm/core/services/maps-api-loader/maps-api-loader");
var i16 = require("@agm/core/services/maps-api-loader/lazy-maps-api-loader");
var i17 = require("../../../src/app/home/home.component");
var i18 = require("../../../src/app/platform/platform.component");
var i19 = require("../../../src/app/simulator/simulator.component");
var i20 = require("../../../src/app/showcase/showcase.component");
var i21 = require("../../../src/app/explore/explore.component");
var i22 = require("../../../src/app/about/about.component");
var i23 = require("../../../src/app/terms/terms.component");
var i24 = require("../../../src/app/app-routing.module");
var i25 = require("@agm/core/core.module");
exports.AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.HomeComponentNgFactory, i4.PlatformComponentNgFactory, i4.PlatformOverviewComponentNgFactory,
                    i4.PlatformGettingStartedComponentNgFactory, i4.PlatformTechspecsComponentNgFactory,
                    i4.PlatformDownloadsComponentNgFactory, i5.SimulatorComponentNgFactory,
                    i5.SimulatorOverviewComponentNgFactory, i5.SimulatorGettingStartedComponentNgFactory,
                    i5.SimulatorDocumentationComponentNgFactory, i5.SimulatorExamplesComponentNgFactory,
                    i6.ShowcaseComponentNgFactory, i6.SelfPoweredWearablesComponentNgFactory,
                    i6.TransientComputingComponentNgFactory, i6.LowPowerIoTComponentNgFactory,
                    i7.ExploreComponentNgFactory, i7.RecommendedReadingComponentNgFactory,
                    i7.NVPFundamentalsComponentNgFactory, i8.AboutComponentNgFactory, i9.TermsComponentNgFactory,
                    i10.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]),
        i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i11.NgLocalization, i11.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []),
        i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i12.DomSanitizer, i12.ɵe, [i11.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i12.DomSanitizer]),
        i0.ɵmpd(4608, i12.HAMMER_GESTURE_CONFIG, i12.HammerGestureConfig, []),
        i0.ɵmpd(5120, i12.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i12.ɵDomEventsPlugin(p0_0), new i12.ɵKeyEventsPlugin(p1_0),
                new i12.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i11.DOCUMENT, i11.DOCUMENT, i11.DOCUMENT, i12.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i12.EventManager, i12.EventManager, [i12.EVENT_MANAGER_PLUGINS, i0.NgZone]),
        i0.ɵmpd(135680, i12.ɵDomSharedStylesHost, i12.ɵDomSharedStylesHost, [i11.DOCUMENT]),
        i0.ɵmpd(4608, i12.ɵDomRendererFactory2, i12.ɵDomRendererFactory2, [i12.EventManager,
            i12.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i12.ɵDomRendererFactory2]), i0.ɵmpd(6144, i12.ɵSharedStylesHost, null, [i12.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i12.Meta, i12.Meta, [i11.DOCUMENT]), i0.ɵmpd(4608, i12.Title, i12.Title, [i11.DOCUMENT]), i0.ɵmpd(5120, i13.ActivatedRoute, i13.ɵf, [i13.Router]), i0.ɵmpd(4608, i13.NoPreloading, i13.NoPreloading, []), i0.ɵmpd(6144, i13.PreloadingStrategy, null, [i13.NoPreloading]),
        i0.ɵmpd(135680, i13.RouterPreloader, i13.RouterPreloader, [i13.Router, i0.NgModuleFactoryLoader,
            i0.Compiler, i0.Injector, i13.PreloadingStrategy]), i0.ɵmpd(4608, i13.PreloadAllModules, i13.PreloadAllModules, []), i0.ɵmpd(5120, i13.ROUTER_INITIALIZER, i13.ɵi, [i13.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i13.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i14.WindowRef, i14.WindowRef, []),
        i0.ɵmpd(4608, i14.DocumentRef, i14.DocumentRef, []), i0.ɵmpd(4608, i15.MapsAPILoader, i16.LazyMapsAPILoader, [i16.LAZY_MAPS_API_CONFIG, i14.WindowRef,
            i14.DocumentRef]), i0.ɵmpd(512, i11.CommonModule, i11.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i12.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i13.ɵb()];
        }, []), i0.ɵmpd(512, i13.ɵg, i13.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0) {
            return [i12.ɵc(p0_0, p0_1), i13.ɵh(p1_0)];
        }, [[2, i12.NgProbeToken], [2, i0.NgProbeToken], i13.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver,
            i0.ApplicationInitStatus]), i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]),
        i0.ɵmpd(512, i12.BrowserModule, i12.BrowserModule, [[3, i12.BrowserModule]]),
        i0.ɵmpd(1024, i13.ɵa, i13.ɵd, [[3, i13.Router]]), i0.ɵmpd(512, i13.UrlSerializer, i13.DefaultUrlSerializer, []), i0.ɵmpd(512, i13.ChildrenOutletContexts, i13.ChildrenOutletContexts, []), i0.ɵmpd(256, i13.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i11.LocationStrategy, i13.ɵc, [i11.PlatformLocation,
            [2, i11.APP_BASE_HREF], i13.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i11.Location, i11.Location, [i11.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i13.ROUTES, function () {
            return [[{ path: '', redirectTo: '/home', pathMatch: 'full' }, { path: 'home',
                        component: i17.HomeComponent }, { path: 'platform', component: i18.PlatformComponent,
                        children: [{ path: '', redirectTo: 'overview', pathMatch: 'full' }, { path: 'overview',
                                component: i18.PlatformOverviewComponent }, { path: 'getting-started',
                                component: i18.PlatformGettingStartedComponent }, { path: 'techspecs',
                                component: i18.PlatformTechspecsComponent }, { path: 'downloads',
                                component: i18.PlatformDownloadsComponent }] }, { path: 'simulator',
                        component: i19.SimulatorComponent, children: [{ path: '', redirectTo: 'overview',
                                pathMatch: 'full' }, { path: 'overview', component: i19.SimulatorOverviewComponent },
                            { path: 'getting-started', component: i19.SimulatorGettingStartedComponent },
                            { path: 'documentation', component: i19.SimulatorDocumentationComponent },
                            { path: 'examples', component: i19.SimulatorExamplesComponent }] },
                    { path: 'showcase', component: i20.ShowcaseComponent }, { path: 'showcase/self-powered-wearables',
                        component: i20.SelfPoweredWearablesComponent }, { path: 'showcase/transient-computing',
                        component: i20.TransientComputingComponent }, { path: 'showcase/low-power-iot',
                        component: i20.LowPowerIoTComponent }, { path: 'explore', component: i21.ExploreComponent },
                    { path: 'explore/recommended-reading', component: i21.RecommendedReadingComponent },
                    { path: 'explore/nvp-fundamentals', component: i21.NVPFundamentalsComponent },
                    { path: 'about', component: i22.AboutComponent }, { path: 'terms-and-conditions',
                        component: i23.TermsComponent }]];
        }, []), i0.ɵmpd(1024, i13.Router, i13.ɵe, [i0.ApplicationRef, i13.UrlSerializer,
            i13.ChildrenOutletContexts, i11.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i13.ROUTES, i13.ROUTER_CONFIGURATION, [2, i13.UrlHandlingStrategy],
            [2, i13.RouteReuseStrategy]]), i0.ɵmpd(512, i13.RouterModule, i13.RouterModule, [[2, i13.ɵa], [2, i13.Router]]), i0.ɵmpd(512, i24.AppRoutingModule, i24.AppRoutingModule, []), i0.ɵmpd(512, i25.AgmCoreModule, i25.AgmCoreModule, []),
        i0.ɵmpd(512, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i16.LAZY_MAPS_API_CONFIG, { apiKey: 'AIzaSyDFquj9AnLZG3zPXBPdovChfCxujtu2V8E' }, [])]);
});
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovTlZMYWJzL3NyYy9hcHAvYXBwLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9OVkxhYnMvc3JjL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
//# sourceMappingURL=app.module.ngfactory.js.map