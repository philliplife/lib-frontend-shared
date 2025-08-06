import * as i0 from '@angular/core';
import { Component, Injectable } from '@angular/core';

class PlaButtonPrimaryComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonPrimaryComponent, isStandalone: true, selector: "lib-pla-button-primary", ngImport: i0, template: "<p>pla-button-primary works!</p>\n", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pla-button-primary', imports: [], template: "<p>pla-button-primary works!</p>\n" }]
        }] });

class PlaSharedLibService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaSharedLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaSharedLibService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaSharedLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class PlaSharedLibComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaSharedLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaSharedLibComponent, isStandalone: true, selector: "lib-pla-shared-lib", ngImport: i0, template: `
    <p>
      pla-shared-lib works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaSharedLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pla-shared-lib', imports: [], template: `
    <p>
      pla-shared-lib works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of pla-shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PlaButtonPrimaryComponent, PlaSharedLibComponent, PlaSharedLibService };
//# sourceMappingURL=pla-shared-lib.mjs.map
