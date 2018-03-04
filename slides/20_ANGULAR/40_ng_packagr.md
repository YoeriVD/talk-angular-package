# ng packagr!

https://medium.com/@nikolasleblanc/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e

--

## create folder with components

--
##  create `public-api.ts`
```typescript
import { NgModule, ModuleWithProviders } from '@angular/core';
//...
import { ToastyModule } from 'ng2-toasty';



export * from './sd-auth/sd-auth.module';
//...
export * from './sd-translate/sd-translate.module';


const SDMODULES = [SdHeaderModule, SdSidebarModule, SdFrameModule, SdCardModule, SdLocalStorageModule, SdSearchModule,
  SdLoadingBarModule, SdConfirmationModule, SdToastModule];

@NgModule({
  imports: [
    SdHeaderModule.forRoot(), SdSidebarModule.forRoot(), SdFrameModule.forRoot(), SdCardModule.forRoot(),
    SdLocalStorageModule.forRoot(), SdSearchModule.forRoot(), SdLoadingBarModule.forRoot(), SlimLoadingBarModule.forRoot(),
    SdConfirmationModule.forRoot(), SdToastModule.forRoot(), ToastyModule.forRoot()
  ],
  exports: SDMODULES
})
export class SdUiRootModule {
}

@NgModule({ imports: SDMODULES, exports: SDMODULES })
export class SdUiModule {
  static forRoot(): ModuleWithProviders { return { ngModule: SdUiRootModule }; }
}

```
--

## create `package.json` 
```json
{
    "name": "@sdworx/sd-components",
    "version": "0.0.3",
    "license": "MIT",
    "private": false,
    "repository": "https://sdworx.visualstudio.com/Webstack/_git/sdworx-ui/",
    "dependencies": {
    },
    "devDependencies": {
    },
    "peerDependencies": {
        "@angular/animations": "^5.0.0",
        "@angular/common": "^5.0.0",
        "@angular/compiler": "^5.0.0",
        "@angular/core": "^5.0.0",
        "@angular/forms": "^5.0.0",
        "@angular/http": "^5.0.0",
        "@angular/platform-browser": "^5.0.0",
        "@angular/platform-browser-dynamic": "^5.0.0",
        "@angular/router": "^5.0.0",
        "@ng-bootstrap/ng-bootstrap": "^1.0.0-beta.7",
        "@sdworx/webkit": "^1.10.0",
        "core-js": "^2.4.1",
        "ng2-toasty": "4.0.3",
        "ng2-slim-loading-bar": "4.0.0",
        "oidc-client": "^1.4.1",
        "rxjs": "^5.5.2",
        "zone.js": "^0.8.14"
    }
  }
```
--
## and `ng-package.json`
```json
{
    "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
    "src": ".",
    "dest": "../../packagedist",
    "workingDirectory": ".ng_pkg_build",
    "lib": {
      "entryFile": "public_api.ts",
      "__externals": "see https://github.com/dherges/ng-packagr/issues/85 and https://github.com/dherges/ng-packagr/issues/135 ",
      "externals": {
        "@ng-bootstrap/ng-bootstrap": "@ng-bootstrap/ng-bootstrap",
        "oidc-client": "oidc-client",
        "ng2-slim-loading-bar": "ng2-slim-loading-bar",
        "ng2-toasty": "ng2-toasty"
      }
    }
}
```
--

## add build script to root package.json

```json
"scripts": {
  "packagr": "ng-packagr -p src/sd-components-src/ng-package.json",
  "postpackagr": "node scripts/copy-readme.js",
  "linklocal": "npm link packagedist"
}
```
--
<!-- .slide: data-background="img/futurama.gif" -->

<!-- .slide: style="color:white" -->
build and enjoy!
```batch
npm run packagr
npm run linklocal
ng serve
```
--
## last but not least
```batch
cd package
npm publish
```