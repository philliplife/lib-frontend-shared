import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Output } from '@angular/core';
import * as i1 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i3 from 'primeng/floatlabel';
import { FloatLabelModule } from 'primeng/floatlabel';

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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaSharedLibComponent, isStandalone: true, selector: "lib-pla-shared-lib", ngImport: i0, template: ``, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaSharedLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pla-shared-lib', imports: [], template: `` }]
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonOutlinedComponent, isStandalone: true, selector: "lib-pla-button-outlined", inputs: { label: "label", icon: "icon" }, outputs: { onSave: "onSave" }, ngImport: i0, template: "<p-button [label]=\"label\" [icon]=\"icon\" (onClick)=\"onActionClick()\" severity=\"secondary\" outlined></p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonOutlinedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pla-button-outlined', imports: [ButtonModule], template: "<p-button [label]=\"label\" [icon]=\"icon\" (onClick)=\"onActionClick()\" severity=\"secondary\" outlined></p-button>\n" }]
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

// import {
//   Component,
//   forwardRef,
//   Input,
// } from '@angular/core';
// import {
//   ControlValueAccessor,
//   NG_VALUE_ACCESSOR,
//   NG_VALIDATORS,
//   Validator,
//   AbstractControl,
//   ValidationErrors
// } from '@angular/forms';
// import { FloatLabelModule } from 'primeng/floatlabel';
// import { InputTextModule } from 'primeng/inputtext';
// @Component({
//   selector: 'pla-input-text',
//   imports: [InputTextModule, FloatLabelModule],
//   templateUrl: './pla-input-text.component.html',
//   styleUrl: './pla-input-text.component.css',
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => PlaInputText),
//       multi: true
//     }
//   ]
// })
// export class PlaInputText implements ControlValueAccessor {
//   @Input() type: string = 'text';
//   value: any;
//   disabled = false;
//   onChange: any = () => { };
//   onTouched: any = () => { };
//   writeValue(value: any): void {
//     this.value = value;
//   }
//   registerOnChange(fn: any): void {
//     this.onChange = fn;
//   }
//   registerOnTouched(fn: any): void {
//     this.onTouched = fn;
//   }
//   setDisabledState(isDisabled: boolean): void {
//     this.disabled = isDisabled;
//   }
// }
class PlaInputText {
    field = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaInputText, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaInputText, isStandalone: true, selector: "pla-input-text", inputs: { field: "field" }, providers: [], ngImport: i0, template: "<p-floatlabel variant=\"in\">\n  <input pInputText id=\"value2\" [(ngModel)]=\"field\" autocomplete=\"off\" />\n  <label for=\"value2\">Username</label>\n</p-floatlabel>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: InputTextModule }, { kind: "directive", type: i1$1.InputText, selector: "[pInputText]", inputs: ["variant", "fluid", "pSize"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaInputText, decorators: [{
            type: Component,
            args: [{ selector: 'pla-input-text', imports: [InputTextModule, FormsModule, FloatLabelModule], providers: [], template: "<p-floatlabel variant=\"in\">\n  <input pInputText id=\"value2\" [(ngModel)]=\"field\" autocomplete=\"off\" />\n  <label for=\"value2\">Username</label>\n</p-floatlabel>\n" }]
        }], propDecorators: { field: [{
                type: Input
            }] } });

/*
 * Public API Surface of pla-shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PlaButtonOutlinedComponent, PlaButtonPrimaryComponent, PlaButtonPrimaryIconComponent, PlaButtonSaveComponent, PlaButtonSecondaryComponent, PlaInputText, PlaSharedLibComponent, PlaSharedLibService };
//# sourceMappingURL=pla-shared-lib.mjs.map
