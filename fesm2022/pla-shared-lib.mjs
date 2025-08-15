import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import * as i1$1 from 'primeng/floatlabel';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import * as i3 from 'primeng/select';
import { SelectModule } from 'primeng/select';

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
    fullWidth = false;
    disabled = false;
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonPrimaryComponent, isStandalone: true, selector: "pla-button-primary", inputs: { fullWidth: "fullWidth", disabled: "disabled" }, ngImport: i0, template: "<p-button severity=\"primary\" [style]=\"{ width: fullWidth ? '100%' : null }\">\n  <ng-content></ng-content>\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-primary', imports: [ButtonModule, CommonModule], template: "<p-button severity=\"primary\" [style]=\"{ width: fullWidth ? '100%' : null }\">\n  <ng-content></ng-content>\n</p-button>\n" }]
        }], propDecorators: { fullWidth: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class PlaButtonSecondaryComponent {
    label = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSecondaryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonSecondaryComponent, isStandalone: true, selector: "lib-pla-button-secondary", inputs: { label: "label" }, ngImport: i0, template: "<p-button [label]=\"label\" severity=\"secondary\">\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSecondaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pla-button-secondary', imports: [ButtonModule, CommonModule], template: "<p-button [label]=\"label\" severity=\"secondary\">\n</p-button>\n" }]
        }], propDecorators: { label: [{
                type: Input
            }] } });

class PlaButtonSaveComponent {
    disabled = false;
    onSave = new EventEmitter();
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onSaveClick() {
        this.onSave.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSaveComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonSaveComponent, isStandalone: true, selector: "pla-button-save", inputs: { disabled: "disabled" }, outputs: { onSave: "onSave" }, ngImport: i0, template: "<p-button label=\"Save\" icon=\"pi pi-save\" [disabled]=\"disabled\" (onClick)=\"onSaveClick()\"></p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSaveComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-save', imports: [ButtonModule, CommonModule], template: "<p-button label=\"Save\" icon=\"pi pi-save\" [disabled]=\"disabled\" (onClick)=\"onSaveClick()\"></p-button>\n" }]
        }], propDecorators: { disabled: [{
                type: Input
            }], onSave: [{
                type: Output
            }] } });

class PlaButtonOutlinedComponent {
    disabled = false;
    label = '';
    icon = '';
    class = '';
    style = {};
    onClick = new EventEmitter();
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onActionClick() {
        this.onClick.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonOutlinedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonOutlinedComponent, isStandalone: true, selector: "pla-button-outlined", inputs: { disabled: "disabled", label: "label", icon: "icon", class: "class", style: "style" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<p-button [style]=\"style\" [class]=\"class\" [label]=\"label\" [icon]=\"icon\" [disabled]=\"disabled\" (onClick)=\"onActionClick()\" severity=\"secondary\" outlined [style]=\"{ color: '#000000'}\"></p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonOutlinedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-outlined', imports: [ButtonModule, CommonModule], template: "<p-button [style]=\"style\" [class]=\"class\" [label]=\"label\" [icon]=\"icon\" [disabled]=\"disabled\" (onClick)=\"onActionClick()\" severity=\"secondary\" outlined [style]=\"{ color: '#000000'}\"></p-button>\n" }]
        }], propDecorators: { disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], icon: [{
                type: Input
            }], class: [{
                type: Input
            }], style: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });

class PlaButtonPrimaryIconComponent {
    disabled = false;
    label = '';
    icon = '';
    onClick = new EventEmitter();
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onActionClick() {
        this.onClick.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonPrimaryIconComponent, isStandalone: true, selector: "pla-button-primary-icon", inputs: { disabled: "disabled", label: "label", icon: "icon" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<p-button [label]=\"label\" [icon]=\"icon\" [disabled]=\"disabled\" (onClick)=\"onActionClick()\"></p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-primary-icon', imports: [ButtonModule, CommonModule], template: "<p-button [label]=\"label\" [icon]=\"icon\" [disabled]=\"disabled\" (onClick)=\"onActionClick()\"></p-button>\n" }]
        }], propDecorators: { disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], icon: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });

class PlaInputText {
    label = '';
    type = 'text';
    class = '';
    style = {};
    value = '';
    disabled = false;
    onChange = () => { };
    onTouched = () => { };
    writeValue(value) {
        this.value = value ?? '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onInputChange(event) {
        this.value = event.target.value;
        this.onChange(this.value);
        this.onTouched();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaInputText, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaInputText, isStandalone: true, selector: "pla-input-text", inputs: { label: "label", type: "type", class: "class", style: "style" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PlaInputText),
                multi: true
            }
        ], ngImport: i0, template: "<p-floatlabel variant=\"in\">\n  <input pInputText [style]=\"style\" [class]=\"class\" [id]=\"`${label}_frm`\"  [value]=\"value\" (input)=\"onInputChange($event)\" (blur)=\"onTouched()\" [disabled]=\"disabled\" autocomplete=\"off\" />\n  <label [for]=\"`${label}_frm`\">{{ label }}</label>\n</p-floatlabel>\n", styles: [""], dependencies: [{ kind: "directive", type: InputText, selector: "[pInputText]", inputs: ["variant", "fluid", "pSize"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i1$1.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: ReactiveFormsModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaInputText, decorators: [{
            type: Component,
            args: [{ selector: 'pla-input-text', imports: [InputText, FloatLabelModule, ReactiveFormsModule], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PlaInputText),
                            multi: true
                        }
                    ], template: "<p-floatlabel variant=\"in\">\n  <input pInputText [style]=\"style\" [class]=\"class\" [id]=\"`${label}_frm`\"  [value]=\"value\" (input)=\"onInputChange($event)\" (blur)=\"onTouched()\" [disabled]=\"disabled\" autocomplete=\"off\" />\n  <label [for]=\"`${label}_frm`\">{{ label }}</label>\n</p-floatlabel>\n" }]
        }], propDecorators: { label: [{
                type: Input
            }], type: [{
                type: Input
            }], class: [{
                type: Input
            }], style: [{
                type: Input
            }] } });

class PlaButtonFonComponent {
    label = '';
    onSave = new EventEmitter();
    onSaveClick() {
        this.onSave.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonFonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonFonComponent, isStandalone: true, selector: "pla-button-fon", inputs: { label: "label" }, outputs: { onSave: "onSave" }, ngImport: i0, template: "<p-button [label]=\"label\" icon=\"pi pi-cloud\" (onClick)=\"onSaveClick()\"></p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonFonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-fon', imports: [ButtonModule], template: "<p-button [label]=\"label\" icon=\"pi pi-cloud\" (onClick)=\"onSaveClick()\"></p-button>\n" }]
        }], propDecorators: { label: [{
                type: Input
            }], onSave: [{
                type: Output
            }] } });

class PlaButtonWut {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonWut, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonWut, isStandalone: true, selector: "pla-button-wut", ngImport: i0, template: "<p-button severity=\"secondary\">\n  <ng-content></ng-content>\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonWut, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-wut', imports: [ButtonModule], template: "<p-button severity=\"secondary\">\n  <ng-content></ng-content>\n</p-button>\n" }]
        }] });

class PlaButtonFei {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonFei, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonFei, isStandalone: true, selector: "pla-button-fei", ngImport: i0, template: "<!-- <p>pla-button-fei works!</p> -->\n<p-button\n  [label]=\"'Fei Button'\"\n  severity=\"secondary\"\n  outlined\n></p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonFei, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-fei', imports: [ButtonModule], template: "<!-- <p>pla-button-fei works!</p> -->\n<p-button\n  [label]=\"'Fei Button'\"\n  severity=\"secondary\"\n  outlined\n></p-button>\n" }]
        }] });

class PlaInputSelect {
    drpData = [];
    label = '';
    style = {};
    class = '';
    innerControl = new FormControl();
    onChange = (_) => { };
    onTouched = () => { };
    writeValue(value) {
        this.innerControl.setValue(value, { emitEvent: false });
    }
    registerOnChange(fn) {
        this.onChange = fn;
        this.innerControl.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        isDisabled ? this.innerControl.disable({ emitEvent: false })
            : this.innerControl.enable({ emitEvent: false });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaInputSelect, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaInputSelect, isStandalone: true, selector: "pla-input-select", inputs: { drpData: "drpData", label: "label", style: "style", class: "class" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PlaInputSelect),
                multi: true
            }
        ], ngImport: i0, template: "<p-floatlabel class=\"w-full md:w-56\" variant=\"in\">\n  <p-select\n    [style]=\"style\"\n    [class]=\"class\"\n    [id]=\"`${label}_frm`\"\n    optionLabel=\"name\"\n    [options]=\"drpData\"\n    [formControl]=\"innerControl\"\n    (blur)=\"onTouched()\"\n  ></p-select>\n  <label [for]=\"`${label}_frm`\">{{label}}</label>\n</p-floatlabel>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i1$1.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: SelectModule }, { kind: "component", type: i3.Select, selector: "p-select", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "loadingIcon", "filterPlaceholder", "filterLocale", "variant", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "checkmark", "dropdownIcon", "loading", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "size", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "fluid", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaInputSelect, decorators: [{
            type: Component,
            args: [{ selector: 'pla-input-select', standalone: true, imports: [FloatLabelModule, ReactiveFormsModule, SelectModule], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PlaInputSelect),
                            multi: true
                        }
                    ], template: "<p-floatlabel class=\"w-full md:w-56\" variant=\"in\">\n  <p-select\n    [style]=\"style\"\n    [class]=\"class\"\n    [id]=\"`${label}_frm`\"\n    optionLabel=\"name\"\n    [options]=\"drpData\"\n    [formControl]=\"innerControl\"\n    (blur)=\"onTouched()\"\n  ></p-select>\n  <label [for]=\"`${label}_frm`\">{{label}}</label>\n</p-floatlabel>\n" }]
        }], propDecorators: { drpData: [{
                type: Input
            }], label: [{
                type: Input
            }], style: [{
                type: Input
            }], class: [{
                type: Input
            }] } });

/*
 * Public API Surface of pla-shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PlaButtonFei, PlaButtonFonComponent, PlaButtonOutlinedComponent, PlaButtonPrimaryComponent, PlaButtonPrimaryIconComponent, PlaButtonSaveComponent, PlaButtonSecondaryComponent, PlaButtonWut, PlaInputSelect, PlaInputText, PlaSharedLibComponent, PlaSharedLibService };
//# sourceMappingURL=pla-shared-lib.mjs.map
