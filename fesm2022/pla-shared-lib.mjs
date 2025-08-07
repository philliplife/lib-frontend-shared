import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Output } from '@angular/core';
import * as i1 from 'primeng/button';
import { ButtonModule } from 'primeng/button';

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

class PlaButtonPrimaryComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonPrimaryComponent, isStandalone: true, selector: "lib-pla-button-primary", ngImport: i0, template: "<p-button severity=\"primary\">\n  <ng-content></ng-content>\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pla-button-primary', imports: [ButtonModule], template: "<p-button severity=\"primary\">\n  <ng-content></ng-content>\n</p-button>\n" }]
        }] });

class PlaButtonSecondaryComponent {
    label = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSecondaryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonSecondaryComponent, isStandalone: true, selector: "lib-pla-button-secondary", inputs: { label: "label" }, ngImport: i0, template: "<p-button [label]=\"label\" severity=\"secondary\">\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSecondaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pla-button-secondary', imports: [ButtonModule], template: "<p-button [label]=\"label\" severity=\"secondary\">\n</p-button>\n" }]
        }], propDecorators: { label: [{
                type: Input
            }] } });

class PlaButtonSaveComponent {
    onSave = new EventEmitter();
    onSaveClick() {
        this.onSave.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSaveComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonSaveComponent, isStandalone: true, selector: "lib-pla-button-save", outputs: { onSave: "onSave" }, ngImport: i0, template: "<p-button label=\"Save\" icon=\"pi pi-save\" (onClick)=\"onSaveClick()\"></p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSaveComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pla-button-save', imports: [ButtonModule], template: "<p-button label=\"Save\" icon=\"pi pi-save\" (onClick)=\"onSaveClick()\"></p-button>\n" }]
        }], propDecorators: { onSave: [{
                type: Output
            }] } });

class PlaButtonOutlinedComponent {
    label = '';
    icon = '';
    onSave = new EventEmitter();
    onActionClick() {
        this.onSave.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonOutlinedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonOutlinedComponent, isStandalone: true, selector: "lib-pla-button-outlined", inputs: { label: "label", icon: "icon" }, outputs: { onSave: "onSave" }, ngImport: i0, template: "<p-button [label]=\"label\" [icon]=\"icon\" (onClick)=\"onActionClick()\" outlined></p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonOutlinedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pla-button-outlined', imports: [ButtonModule], template: "<p-button [label]=\"label\" [icon]=\"icon\" (onClick)=\"onActionClick()\" outlined></p-button>\n" }]
        }], propDecorators: { label: [{
                type: Input
            }], icon: [{
                type: Input
            }], onSave: [{
                type: Output
            }] } });

class PlaButtonPrimaryIconComponent {
    label = '';
    icon = '';
    onSave = new EventEmitter();
    onActionClick() {
        this.onSave.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonPrimaryIconComponent, isStandalone: true, selector: "lib-pla-button-primary-icon", inputs: { label: "label", icon: "icon" }, outputs: { onSave: "onSave" }, ngImport: i0, template: "<p-button [label]=\"label\" [icon]=\"icon\" (onClick)=\"onActionClick()\"></p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pla-button-primary-icon', imports: [ButtonModule], template: "<p-button [label]=\"label\" [icon]=\"icon\" (onClick)=\"onActionClick()\"></p-button>\n" }]
        }], propDecorators: { label: [{
                type: Input
            }], icon: [{
                type: Input
            }], onSave: [{
                type: Output
            }] } });

/*
 * Public API Surface of pla-shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PlaButtonOutlinedComponent, PlaButtonPrimaryComponent, PlaButtonPrimaryIconComponent, PlaButtonSaveComponent, PlaButtonSecondaryComponent, PlaSharedLibComponent, PlaSharedLibService };
//# sourceMappingURL=pla-shared-lib.mjs.map
