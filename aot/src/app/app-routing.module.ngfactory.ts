/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../src/app/app-routing.module';
import * as i2 from './home/home.component.ngfactory';
import * as i3 from './platform/platform.component.ngfactory';
import * as i4 from './simulator/simulator.component.ngfactory';
import * as i5 from './showcase/showcase.component.ngfactory';
import * as i6 from './explore/explore.component.ngfactory';
import * as i7 from './about/about.component.ngfactory';
import * as i8 from './terms/terms.component.ngfactory';
import * as i9 from '@angular/router';
import * as i10 from '@angular/common';
import * as i11 from '../../../src/app/home/home.component';
import * as i12 from '../../../src/app/platform/platform.component';
import * as i13 from '../../../src/app/simulator/simulator.component';
import * as i14 from '../../../src/app/showcase/showcase.component';
import * as i15 from '../../../src/app/explore/explore.component';
import * as i16 from '../../../src/app/about/about.component';
import * as i17 from '../../../src/app/terms/terms.component';
export const AppRoutingModuleNgFactory:i0.NgModuleFactory<i1.AppRoutingModule> = i0.ɵcmf(i1.AppRoutingModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.HomeComponentNgFactory,i3.PlatformComponentNgFactory,i3.PlatformOverviewComponentNgFactory,
              i3.PlatformGettingStartedComponentNgFactory,i3.PlatformTechspecsComponentNgFactory,
              i3.PlatformDownloadsComponentNgFactory,i4.SimulatorComponentNgFactory,
              i4.SimulatorOverviewComponentNgFactory,i4.SimulatorGettingStartedComponentNgFactory,
              i4.SimulatorDocumentationComponentNgFactory,i4.SimulatorExamplesComponentNgFactory,
              i5.ShowcaseComponentNgFactory,i5.SelfPoweredWearablesComponentNgFactory,
              i5.TransientComputingComponentNgFactory,i5.LowPowerIoTComponentNgFactory,
              i6.ExploreComponentNgFactory,i6.RecommendedReadingComponentNgFactory,
              i6.NVPFundamentalsComponentNgFactory,i7.AboutComponentNgFactory,i8.TermsComponentNgFactory]],
              [3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(5120,i9.ActivatedRoute,
          i9.ɵf,[i9.Router]),i0.ɵmpd(4608,i9.NoPreloading,i9.NoPreloading,([] as any[])),
          i0.ɵmpd(6144,i9.PreloadingStrategy,(null as any),[i9.NoPreloading]),i0.ɵmpd(135680,
              i9.RouterPreloader,i9.RouterPreloader,[i9.Router,i0.NgModuleFactoryLoader,
                  i0.Compiler,i0.Injector,i9.PreloadingStrategy]),i0.ɵmpd(4608,i9.PreloadAllModules,
              i9.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i0.NgProbeToken,() => {
            return [i9.ɵb()];
          },([] as any[])),i0.ɵmpd(4608,i9.ɵg,i9.ɵg,[i0.Injector]),i0.ɵmpd(5120,i0.APP_INITIALIZER,
              (p0_0:any) => {
                return [i9.ɵh(p0_0)];
              },[i9.ɵg]),i0.ɵmpd(5120,i9.ROUTER_INITIALIZER,i9.ɵi,[i9.ɵg]),i0.ɵmpd(5120,
              i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
                return [p0_0];
              },[i9.ROUTER_INITIALIZER]),i0.ɵmpd(1024,i9.ɵa,i9.ɵd,[[3,i9.Router]]),
          i0.ɵmpd(512,i9.UrlSerializer,i9.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,
              i9.ChildrenOutletContexts,i9.ChildrenOutletContexts,([] as any[])),i0.ɵmpd(256,
              i9.ROUTER_CONFIGURATION,{},([] as any[])),i0.ɵmpd(1024,i10.LocationStrategy,
              i9.ɵc,[i10.PlatformLocation,[2,i10.APP_BASE_HREF],i9.ROUTER_CONFIGURATION]),
          i0.ɵmpd(512,i10.Location,i10.Location,[i10.LocationStrategy]),i0.ɵmpd(512,
              i0.NgModuleFactoryLoader,i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i9.ROUTES,() => {
            return [[{path:'',redirectTo:'/home',pathMatch:'full'},{path:'home',component:i11.HomeComponent},
                {path:'platform',component:i12.PlatformComponent,children:[{path:'',
                    redirectTo:'overview',pathMatch:'full'},{path:'overview',component:i12.PlatformOverviewComponent},
                    {path:'getting-started',component:i12.PlatformGettingStartedComponent},
                    {path:'techspecs',component:i12.PlatformTechspecsComponent},{path:'downloads',
                        component:i12.PlatformDownloadsComponent}]},{path:'simulator',
                    component:i13.SimulatorComponent,children:[{path:'',redirectTo:'overview',
                        pathMatch:'full'},{path:'overview',component:i13.SimulatorOverviewComponent},
                        {path:'getting-started',component:i13.SimulatorGettingStartedComponent},
                        {path:'documentation',component:i13.SimulatorDocumentationComponent},
                        {path:'examples',component:i13.SimulatorExamplesComponent}]},
                {path:'showcase',component:i14.ShowcaseComponent},{path:'showcase/self-powered-wearables',
                    component:i14.SelfPoweredWearablesComponent},{path:'showcase/transient-computing',
                    component:i14.TransientComputingComponent},{path:'showcase/low-power-iot',
                    component:i14.LowPowerIoTComponent},{path:'explore',component:i15.ExploreComponent},
                {path:'explore/recommended-reading',component:i15.RecommendedReadingComponent},
                {path:'explore/nvp-fundamentals',component:i15.NVPFundamentalsComponent},
                {path:'about',component:i16.AboutComponent},{path:'terms-and-conditions',
                    component:i17.TermsComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i9.Router,i9.ɵe,[i0.ApplicationRef,i9.UrlSerializer,
              i9.ChildrenOutletContexts,i10.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i9.ROUTES,i9.ROUTER_CONFIGURATION,[2,i9.UrlHandlingStrategy],
              [2,i9.RouteReuseStrategy]]),i0.ɵmpd(512,i9.RouterModule,i9.RouterModule,
              [[2,i9.ɵa],[2,i9.Router]]),i0.ɵmpd(512,i1.AppRoutingModule,i1.AppRoutingModule,
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovTlZMYWJzL3NyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L05WTGFicy9zcmMvYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
