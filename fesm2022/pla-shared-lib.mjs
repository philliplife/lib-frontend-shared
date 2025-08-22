import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Output, forwardRef, Pipe, Directive } from '@angular/core';
import * as i1$2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR, FormControl, Validators } from '@angular/forms';
import * as i1$1 from 'primeng/floatlabel';
import { FloatLabelModule } from 'primeng/floatlabel';
import * as i5 from 'primeng/inputtext';
import { InputText, InputTextModule } from 'primeng/inputtext';
import * as i3 from 'primeng/select';
import { SelectModule } from 'primeng/select';
import { Message } from 'primeng/message';
import * as i9 from 'primeng/skeleton';
import { SkeletonModule } from 'primeng/skeleton';
import * as i4 from 'primeng/iconfield';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import * as i7 from 'primeng/textarea';
import { TextareaModule } from 'primeng/textarea';
import * as i6 from 'primeng/inputnumber';
import { InputNumberModule } from 'primeng/inputnumber';
import { fromEvent, interval, merge, startWith, map, distinctUntilChanged } from 'rxjs';

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
    class = '';
    style = {};
    disabled = false;
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonPrimaryComponent, isStandalone: true, selector: "pla-button-primary", inputs: { class: "class", style: "style", disabled: "disabled" }, ngImport: i0, template: "<p-button severity=\"primary\" [style]=\"style\" [styleClass]=\"class\" [disabled]=\"disabled\">\n  <ng-content></ng-content>\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-primary', imports: [ButtonModule, CommonModule], template: "<p-button severity=\"primary\" [style]=\"style\" [styleClass]=\"class\" [disabled]=\"disabled\">\n  <ng-content></ng-content>\n</p-button>\n" }]
        }], propDecorators: { class: [{
                type: Input
            }], style: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class PlaButtonSecondaryComponent {
    label = '';
    class = '';
    style = {};
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSecondaryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonSecondaryComponent, isStandalone: true, selector: "lib-pla-button-secondary", inputs: { label: "label", class: "class", style: "style" }, ngImport: i0, template: "<p-button [style]=\"style\" [styleClass]=\"class\" [label]=\"label\" severity=\"secondary\">\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSecondaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pla-button-secondary', imports: [ButtonModule, CommonModule], template: "<p-button [style]=\"style\" [styleClass]=\"class\" [label]=\"label\" severity=\"secondary\">\n</p-button>\n" }]
        }], propDecorators: { label: [{
                type: Input
            }], class: [{
                type: Input
            }], style: [{
                type: Input
            }] } });

class PlaButtonSaveComponent {
    class = '';
    style = {};
    disabled = false;
    onSave = new EventEmitter();
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onSaveClick() {
        this.onSave.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSaveComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonSaveComponent, isStandalone: true, selector: "pla-button-save", inputs: { class: "class", style: "style", disabled: "disabled" }, outputs: { onSave: "onSave" }, ngImport: i0, template: "<p-button [style]=\"style\" [styleClass]=\"class\" label=\"Save\" icon=\"pi pi-save\" [disabled]=\"disabled\" (onClick)=\"onSaveClick()\"></p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSaveComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-save', imports: [ButtonModule, CommonModule], template: "<p-button [style]=\"style\" [styleClass]=\"class\" label=\"Save\" icon=\"pi pi-save\" [disabled]=\"disabled\" (onClick)=\"onSaveClick()\"></p-button>\n" }]
        }], propDecorators: { class: [{
                type: Input
            }], style: [{
                type: Input
            }], disabled: [{
                type: Input
            }], onSave: [{
                type: Output
            }] } });

class PlaButtonOutlinedComponent {
    disabled = false;
    label = '';
    icon = '';
    styleClass = ''; // ใช้สำหรับ CSS class
    style = {}; //ใช้สำหรับ inline style
    onClick = new EventEmitter();
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onActionClick() {
        this.onClick.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonOutlinedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonOutlinedComponent, isStandalone: true, selector: "pla-button-outlined", inputs: { disabled: "disabled", label: "label", icon: "icon", styleClass: "styleClass", style: "style" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<p-button [label]=\"label\" [icon]=\"icon\" [disabled]=\"disabled\" [style]=\"style\" [styleClass]=\"styleClass\"\n  (onClick)=\"onActionClick()\" severity=\"secondary\" outlined>\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonOutlinedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-outlined', imports: [ButtonModule, CommonModule], template: "<p-button [label]=\"label\" [icon]=\"icon\" [disabled]=\"disabled\" [style]=\"style\" [styleClass]=\"styleClass\"\n  (onClick)=\"onActionClick()\" severity=\"secondary\" outlined>\n</p-button>\n" }]
        }], propDecorators: { disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], icon: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], style: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });

class PlaButtonPrimaryIconComponent {
    class = '';
    style = {};
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonPrimaryIconComponent, isStandalone: true, selector: "pla-button-primary-icon", inputs: { class: "class", style: "style", disabled: "disabled", label: "label", icon: "icon" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<p-button [style]=\"style\" [styleClass]=\"class\" [label]=\"label\" [icon]=\"icon\" [disabled]=\"disabled\" (onClick)=\"onActionClick()\"></p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-primary-icon', imports: [ButtonModule, CommonModule], template: "<p-button [style]=\"style\" [styleClass]=\"class\" [label]=\"label\" [icon]=\"icon\" [disabled]=\"disabled\" (onClick)=\"onActionClick()\"></p-button>\n" }]
        }], propDecorators: { class: [{
                type: Input
            }], style: [{
                type: Input
            }], disabled: [{
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonFei, isStandalone: true, selector: "pla-button-fei", ngImport: i0, template: "<div class=\"button-fei-container\">\n  <p-button [label]=\"'Fei Button'\"></p-button>\n</div>\n", styles: [".button-fei-container ::ng-deep .p-button{background-color:var(--color-primary-6)}\n"], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonFei, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-fei', imports: [ButtonModule], template: "<div class=\"button-fei-container\">\n  <p-button [label]=\"'Fei Button'\"></p-button>\n</div>\n", styles: [".button-fei-container ::ng-deep .p-button{background-color:var(--color-primary-6)}\n"] }]
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

class PlaMessageMappingPipe {
    transform(path, arg) {
        if (path) {
            const baseMessage = messageModels[path] ?? '';
            if (arg?.maxValue !== undefined) {
                return `${baseMessage} ${arg.maxValue}`;
            }
            if (arg?.minValue !== undefined) {
                return `${baseMessage} ${arg.minValue}`;
            }
            return baseMessage;
        }
        else {
            return '';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaMessageMappingPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: PlaMessageMappingPipe, isStandalone: true, name: "plaMessage" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaMessageMappingPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'plaMessage',
                    standalone: true,
                }]
        }] });
const messageModels = {
    REQUIRED: 'This field is required',
    MINIMUM: 'This field must be',
    MAXIMUM: 'This field must be',
    PATTERN: 'Please match the requested format',
    RANGE: 'cannot be greater than',
    MAXVALUE: 'This field must not more than',
    MINVALUE: 'This field must not lower than',
};

class CharCountDirective {
    el;
    renderer;
    maxLength = 100;
    inputTypeCount = 'input';
    counterEl;
    wrapperEl;
    valueSub;
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        if (!this.maxLength || !this.inputTypeCount) {
            return;
        }
        this.wrapInput();
        this.createCounter();
        this.watchInputValue();
    }
    ngOnDestroy() {
        this.valueSub?.unsubscribe();
    }
    wrapInput() {
        const input = this.el.nativeElement;
        const parent = this.renderer.parentNode(input);
        this.wrapperEl = this.renderer.createElement('div');
        this.renderer.setStyle(this.wrapperEl, 'position', 'relative');
        this.renderer.setStyle(this.wrapperEl, 'display', 'inline-block');
        this.renderer.setStyle(this.wrapperEl, 'width', '100%');
        this.renderer.insertBefore(parent, this.wrapperEl, input);
        this.renderer.removeChild(parent, input);
        this.renderer.appendChild(this.wrapperEl, input);
    }
    createCounter() {
        this.counterEl = this.renderer.createElement('small');
        this.renderer.setStyle(this.counterEl, 'position', 'absolute');
        this.renderer.setStyle(this.counterEl, 'bottom', this.inputTypeCount === 'input' ? '0.25rem' : '0.75rem');
        this.renderer.setStyle(this.counterEl, 'right', '0.5rem');
        this.renderer.setStyle(this.counterEl, 'font-size', '0.75rem');
        this.renderer.setStyle(this.counterEl, 'color', '#888');
        this.renderer.setStyle(this.counterEl, 'pointer-events', 'none');
        this.renderer.setStyle(this.counterEl, 'padding', '0 0.25rem');
        this.renderer.setAttribute(this.counterEl, 'char-counted', 'true');
        this.renderer.appendChild(this.wrapperEl, this.counterEl);
    }
    watchInputValue() {
        const inputEl = this.el.nativeElement;
        const inputEvents$ = fromEvent(inputEl, 'input');
        const valuePoll$ = interval(200);
        const value$ = merge(inputEvents$, valuePoll$).pipe(startWith(0), map(() => inputEl.value), distinctUntilChanged());
        this.valueSub = value$.subscribe((value) => {
            const length = value.length;
            this.counterEl.innerText = `${length}/${this.maxLength}`;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: CharCountDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.14", type: CharCountDirective, isStandalone: true, selector: "[appCharCount]", inputs: { maxLength: ["appCharCount", "maxLength"], inputTypeCount: "inputTypeCount" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: CharCountDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appCharCount]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { maxLength: [{
                type: Input,
                args: ['appCharCount']
            }], inputTypeCount: [{
                type: Input,
                args: ['inputTypeCount']
            }] } });

class PlaDynamicForm {
    lisFormGroup;
    lisFormDesign = [];
    submitted = false;
    loading = false;
    constructor() { }
    isRequired(controlName) {
        const control = this.lisFormGroup.get(controlName);
        return control?.hasValidator(Validators.required) ?? false;
    }
    classValidate(formControl, submitted = false) {
        if (!formControl)
            return {};
        const isInvalid = formControl.invalid;
        const hasInteracted = formControl.dirty;
        const showError = isInvalid && (submitted || hasInteracted);
        return {
            'ng-invalid': showError,
            'ng-dirty': showError,
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaDynamicForm, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaDynamicForm, isStandalone: true, selector: "pla-dynamic-form", inputs: { lisFormGroup: "lisFormGroup", lisFormDesign: "lisFormDesign", submitted: "submitted", loading: "loading" }, ngImport: i0, template: "<form class=\"grid w-full m-0\">\n  <ng-container [formGroup]=\"lisFormGroup\">\n    <ng-container *ngFor=\"let control of lisFormDesign\">\n      <div\n        *ngIf=\"!control?.hidden\"\n        class=\"{{ control?.class || 'row' }}\"\n        [attr.data-type]=\"control?.type\"\n      >\n        <ng-container\n          *ngIf=\"!loading || control?.type === 'empty'; else loadingTemplate\"\n        >\n          <ng-container [ngSwitch]=\"control?.type\">\n            <div *ngSwitchCase=\"'empty'\" class=\"w-full\"></div>\n            <div *ngSwitchCase=\"'text'\">\n              <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n                <!-- use readonly instead of disable to prevent skipping validation -->\n                <p-iconfield>\n                  <input\n                    pInputText\n                    autocomplete=\"off\"\n                    class=\"w-full\"\n                    [ngClass]=\"\n                      classValidate(\n                        lisFormGroup.controls[control.formControlName],\n                        submitted\n                      )\n                    \"\n                    [id]=\"control.formControlName\"\n                    [name]=\"control.formControlName\"\n                    [formControlName]=\"control.formControlName\"\n                    [readonly]=\"control.readOnly\"\n                    [maxlength]=\"control?.max || 1000\"\n                    (input)=\"control.input ? control.input($event) : ''\"\n                  />\n\n                  <!-- \n                    [appOverlayText]=\"control?.floatingSuffix || ''\"\n                    [appCharCount]=\"control?.appCharCount ? control?.max : null\"\n                   -->\n                  <p-inputicon [class]=\"control.classIcon\" />\n                </p-iconfield>\n\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div>\n\n            <!-- TEXTAREA -->\n            <div *ngSwitchCase=\"'textarea'\">\n              <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n                <textarea\n                  pTextarea\n                  [id]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [formControlName]=\"control.formControlName\"\n                  [minLength]=\"control?.min || 0\"\n                  [maxLength]=\"control?.max || 1000\"\n                  [rows]=\"control?.rows || 5\"\n                  [cols]=\"control?.cols || 30\"\n                  [appCharCount]=\"\n                    control.appCharCount && control.max ? control.max : 0\n                  \"\n                  [fluid]=\"control?.fluid || true\"\n                  [inputTypeCount]=\"\n                    control.appCharCount && control.inputTypeCount\n                      ? control.inputTypeCount\n                      : 'input'\n                  \"\n                  style=\"resize: none\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                ></textarea>\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div>\n\n            <!-- SELECT -->\n            <div class=\"w-full\" *ngSwitchCase=\"'select'\">\n              <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n                <p-select\n                  [inputId]=\"control.formControlName\"\n                  [attr.name]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  appendTo=\"body\"\n                  [id]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [formControlName]=\"control.formControlName\"\n                  [inputId]=\"control.formControlName\"\n                  [options]=\"control.data || []\"\n                  [optionLabel]=\"control.optionLabel || 'name'\"\n                  [optionValue]=\"control.optionValue || 'code'\"\n                  [loading]=\"control.loading\"\n                  class=\"w-full\"\n                  [showClear]=\"control.clear || false\"\n                  [filter]=\"control.filter || false\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                  (onFilter)=\"control.onFilter ? control.onFilter($event) : ''\"\n                  (onChange)=\"\n                    control.onChange\n                      ? control.onChange($event, control.formControlName)\n                      : ''\n                  \"\n                  (onHide)=\"\n                    control.onHide\n                      ? control.onHide($event, control.formControlName)\n                      : ''\n                  \"\n                >\n                  <ng-template #emptyfilter>\n                    <span>Not found</span>\n                  </ng-template>\n                </p-select>\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div>\n\n            <!-- INPUT NUMBER -->\n            <div *ngSwitchCase=\"'number'\">\n              <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n                <p-iconfield>\n                  <p-inputNumber\n                    class=\"w-full\"\n                    mode=\"decimal\"\n                    [inputId]=\"control.formControlName\"\n                    [name]=\"control.formControlName\"\n                    [formControlName]=\"control.formControlName\"\n                    [placeholder]=\"control.placeholder || ''\"\n                    [suffix]=\"control.suffix || ''\"\n                    [prefix]=\"control.prefix || ''\"\n                    [minFractionDigits]=\"control?.digit || null\"\n                    [maxFractionDigits]=\"control?.digit || null\"\n                    [ngClass]=\"\n                      classValidate(\n                        lisFormGroup.controls[control.formControlName],\n                        submitted\n                      )\n                    \"\n                  ></p-inputNumber>\n                  <p-inputicon [class]=\"control.classIcon\" />\n                </p-iconfield>\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div>\n            <!-- Input Group -->\n            <!-- <div *ngSwitchCase=\"'input-group'\">\n              <p-floatlabel variant=\"in\">\n                <p-iconfield>\n                  <div class=\"relative w-full\">\n                    <p-inputNumber\n                      class=\"w-full pr-24\"\n                      [inputId]=\"control.formControlName\"\n                      [name]=\"control.formControlName\"\n                      [formControlName]=\"control.formControlName\"\n                      [min]=\"control?.min || 0\"\n                      [ngClass]=\"\n                        classValidate(\n                          lisFormGroup.controls[control.formControlName],\n                          submitted\n                        )\n                      \"\n                    />\n                    <div class=\"select-text\" *ngIf=\"control.isViewMode\">\n                      {{\n                        getSelectedValue(\n                          control.data,\n                          lisFormGroup.controls[control.subFormControlName]\n                            .value\n                        )\n                      }}\n                    </div>\n\n                    <p-selectbutton\n                      class=\"select-button\"\n                      [ngClass]=\"{\n                        'cursor-not-allowed':\n                          lisFormGroup.controls[control.subFormControlName]\n                            .disabled\n                      }\"\n                      *ngIf=\"control.subFormControlName && !control.isViewMode\"\n                      [formControlName]=\"control.subFormControlName\"\n                      [options]=\"control.data\"\n                      [optionLabel]=\"control.optionLabel || 'name'\"\n                      [optionValue]=\"control.optionValue || 'code'\"\n                      aria-labelledby=\"basic\"\n                      (click)=\"\n                        control?.onClick\n                          ? control.onClick(\n                              lisFormGroup.controls[control.subFormControlName]\n                                .value\n                            )\n                          : ''\n                      \"\n                    />\n                  </div>\n                </p-iconfield>\n\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n            <!-- SELECT BUTTON -->\n            <!-- <div *ngSwitchCase=\"'select-button'\">\n              <p-selectbutton\n                [formControlName]=\"control.formControlName\"\n                [options]=\"control.data\"\n                [optionLabel]=\"control.optionLabel || 'name'\"\n                [optionValue]=\"control.optionValue || 'code'\"\n                aria-labelledby=\"basic\"\n                (onClick)=\"\n                  control?.onClick\n                    ? control.onClick($event, control.formControlName)\n                    : ''\n                \"\n              />\n            </div> -->\n\n            <!-- DATEPICKER -->\n            <!-- <div *ngSwitchCase=\"'datepicker'\">\n              <p-floatlabel variant=\"in\">\n                <p-datepicker\n                  appendTo=\"body\"\n                  [inputId]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [formControlName]=\"control.formControlName\"\n                  [placeholder]=\"control.placeholder\"\n                  showIcon\n                  [dateFormat]=\"control.dateFormat || 'dd-mm-yy'\"\n                  [showTime]=\"control.showTime || false\"\n                  [hourFormat]=\"control.hourFormat || '24'\"\n                  [showButtonBar]=\"control.showButtonBar || false\"\n                  [minDate]=\"lisFormGroup.get(control.minDate)?.value || null\"\n                  [maxDate]=\"lisFormGroup.get(control.maxDate)?.value || null\"\n                  [selectionMode]=\"control.selectionMode || 'single'\"\n                  [readonlyInput]=\"control.readonlyInput || false\"\n                  [fluid]=\"control.fluid || true\"\n                  iconDisplay=\"input\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n            <!-- DROPDOWN AUTO-COMPLETE -->\n            <!-- <div *ngSwitchCase=\"'dropdown'\">\n              <p-floatlabel variant=\"in\">\n                <p-autocomplete\n                  [inputId]=\"control.formControlName\"\n                  [attr.name]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  appendTo=\"body\"\n                  [formControlName]=\"control.formControlName\"\n                  [inputId]=\"control.formControlName\"\n                  optionLabel=\"name\"\n                  optionValue=\"code\"\n                  [dropdown]=\"true\"\n                  [suggestions]=\"options || []\"\n                  class=\"w-full\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                  (completeMethod)=\"\n                    control?.completeMethod\n                      ? control.completeMethod($event)\n                      : ''\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n            <!-- MULTI-SELECT -->\n            <!-- <div class=\"h-full\" *ngSwitchCase=\"'multiselect'\">\n              <p-floatlabel class=\"h-full\" variant=\"in\">\n                <p-multiselect\n                  [showToggleAll]=\"!control.disableToggleAll\"\n                  [inputId]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [display]=\"control.display || 'comma'\"\n                  [maxSelectedLabels]=\"control.maxSelectedLabels || null\"\n                  selectedItemsLabel=\"{0} items selected\"\n                  [filter]=\"true\"\n                  appendTo=\"body\"\n                  [formControlName]=\"control.formControlName\"\n                  [inputId]=\"control.formControlName\"\n                  [options]=\"control.data || []\"\n                  [optionLabel]=\"control.optionLabel || 'name'\"\n                  [optionValue]=\"control.optionValue || 'code'\"\n                  class=\"w-full h-full\"\n                  [optionDisabled]=\"'disabled'\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                  (onFilter)=\"control?.onFilter ? control.onFilter($event) : ''\"\n                  (onChange)=\"\n                    control?.onChange\n                      ? control.onChange($event, control.formControlName)\n                      : ''\n                  \"\n                >\n                </p-multiselect>\n                <label [for]=\"control.formControlName\">\n                  {{ control.label }}\n                  <span *ngIf=\"isRequired(control.formControlName)\">*</span>\n                </label>\n              </p-floatlabel>\n            </div> -->\n\n            <!-- RADIO -->\n            <!-- <div\n              *ngSwitchCase=\"'radio'\"\n              class=\"flex flex-wrap gap-3 align-items-center justify-content-between w-full\"\n            >\n              <ng-container *ngIf=\"!loading; else loadingTemplate\">\n                <h6 class=\"mb-0 text-wrap white-space-normal\">\n                  {{ control?.label }}\n                </h6>\n              </ng-container>\n              <div class=\"flex flex-wrap gap-3\">\n                <ng-container *ngFor=\"let item of control.data\">\n                  <div class=\"field-checkbox col-auto\">\n                    <p-radiobutton\n                      [inputId]=\"control.formControlName + '-' + item.name\"\n                      [name]=\"control.formControlName\"\n                      [value]=\"item.code\"\n                      [formControlName]=\"control.formControlName\"\n                      (onClick)=\"\n                        control?.onClick\n                          ? control.onClick($event, control.formControlName)\n                          : ''\n                      \"\n                    />\n                    <label\n                      [for]=\"control.formControlName + '-' + item.name\"\n                      class=\"ml-2\"\n                      >{{ item.name }}</label\n                    >\n                  </div>\n                </ng-container>\n              </div>\n            </div> -->\n\n            <!-- CHECKBOX -->\n            <!-- <div\n              *ngSwitchCase=\"'checkbox'\"\n              class=\"flex flex-wrap gap-3 align-items-center justify-content-between\"\n            >\n              <ng-container *ngFor=\"let item of control.data\">\n                <div class=\"field-checkbox col-auto\">\n                  <p-checkbox\n                    [inputId]=\"control.formControlName + '-' + item.name\"\n                    [name]=\"control.formControlName\"\n                    [value]=\"item.code\"\n                    [formControlName]=\"control.formControlName\"\n                    (onClick)=\"\n                      control?.onClick\n                        ? control.onClick($event, control.formControlName)\n                        : ''\n                    \"\n                  />\n                  <label\n                    [for]=\"control.formControlName + '-' + item.name\"\n                    class=\"ml-2\"\n                    >{{ item.name }}</label\n                  >\n                </div>\n              </ng-container>\n            </div> -->\n          </ng-container>\n        </ng-container>\n        <ng-template #loadingTemplate>\n          <p-skeleton width=\"100%\" borderRadius=\"1rem\" />\n        </ng-template>\n\n        <!-- Error Message Section -->\n        <div class=\"text-left mt-0\">\n          <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['required'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Required\"\n          >\n            {{ \"REQUIRED\" | plaMessage }}</p-message\n          >\n\n          <!-- MAX -->\n          <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}max\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['max'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ \"MAXVALUE\" | plaMessage : { maxValue: lisFormGroup.get(control.formControlName)?.errors?.['max'].max } }}\n            {{ lisFormGroup.get(control.formControlName)?.errors?.['max'].message }}</p-message\n          >\n\n          <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}min\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['min'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ \"MINVALUE\" | plaMessage : { minValue: lisFormGroup.get(control.formControlName)?.errors?.['min'].min } }}\n            {{ lisFormGroup.get(control.formControlName)?.errors?.['min'].message }}</p-message\n          >\n\n          <!-- Not allow available data -->\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}valueNotAllowed\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ lisFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'].value }}\n            is already in use.</p-message\n          > -->\n\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}upperCaseEnOnly\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ lisFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'].message }}</p-message\n          > -->\n          <!-- {{lisFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] | json}} -->\n          <!-- MESSAGE REQUIRED -->\n\n          <!-- MESSAGE MIN LENGTH -->\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!lisFormGroup.get(control.formControlName)?.errors?.['pattern'] && lisFormGroup.get(control.formControlName)?.errors?.['minlength'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Minlength\"\n          >\n            {{ \"MINIMUM\" | plaMessage : { max: control?.max } }}</p-message\n          > -->\n\n          <!-- MESSAGE MAX LENGTH -->\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!lisFormGroup.get(control.formControlName)?.errors?.['pattern'] && lisFormGroup.get(control.formControlName)?.errors?.['maxlength'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Maxlength\"\n          >\n            {{ \"MAXIMUM\" | plaMessage : { min: control?.min } }}</p-message\n          > -->\n          <!-- RANGE PATTEN -->\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !lisFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              (\n                lisFormGroup.get(control.formControlName)?.errors?.['minTooHigh'] ||\n                lisFormGroup.get(control.formControlName)?.errors?.['maxTooLow']\n              ) &&\n              (lisFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-validator\"\n          >\n            {{\n              \"RANGE\" | plaMessage : { range: control.rangeLabel }\n            }}</p-message\n          > -->\n\n          <!-- RANGE REQUIRED PATTEN -->\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !lisFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              !lisFormGroup.get(control.formControlName)?.errors?.['required'] &&\n              (\n                lisFormGroup.get(control.formControlName)?.errors?.['minRequired'] ||\n                lisFormGroup.get(control.formControlName)?.errors?.['maxRequired']\n              ) &&\n              (lisFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-required-validator\"\n          >\n            {{ \"REQUIRED\" | plaMessage }}</p-message\n          > -->\n\n          <!-- MESSAGE PATTEN -->\n\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}Pattern\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['pattern'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{\n              \"PATTERN\" | plaMessage : { pattern: control?.msgCustom }\n            }}</p-message\n          > -->\n\n          <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}asciiOnly\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['asciiOnly'] === true && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ control?.msgCustom }}</p-message\n          >\n        </div>\n      </div>\n    </ng-container>\n  </ng-container>\n</form>\n", styles: [".input-color{color:var(--color-primary-6)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1$2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i1$1.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "component", type: InputIcon, selector: "p-inputicon, p-inputIcon", inputs: ["styleClass"] }, { kind: "ngmodule", type: IconFieldModule }, { kind: "component", type: i4.IconField, selector: "p-iconfield, p-iconField, p-icon-field", inputs: ["iconPosition", "styleClass"] }, { kind: "ngmodule", type: InputTextModule }, { kind: "directive", type: i5.InputText, selector: "[pInputText]", inputs: ["variant", "fluid", "pSize"] }, { kind: "ngmodule", type: InputNumberModule }, { kind: "component", type: i6.InputNumber, selector: "p-inputNumber, p-inputnumber, p-input-number", inputs: ["showButtons", "format", "buttonLayout", "inputId", "styleClass", "style", "placeholder", "size", "maxlength", "tabindex", "title", "ariaLabelledBy", "ariaLabel", "ariaRequired", "name", "required", "autocomplete", "min", "max", "incrementButtonClass", "decrementButtonClass", "incrementButtonIcon", "decrementButtonIcon", "readonly", "step", "allowEmpty", "locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "variant", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "inputStyle", "inputStyleClass", "showClear", "autofocus", "disabled", "fluid"], outputs: ["onInput", "onFocus", "onBlur", "onKeyDown", "onClear"] }, { kind: "ngmodule", type: TextareaModule }, { kind: "directive", type: i7.Textarea, selector: "[pTextarea]", inputs: ["autoResize", "variant", "fluid", "pSize"], outputs: ["onResize"] }, { kind: "ngmodule", type: SelectModule }, { kind: "component", type: i3.Select, selector: "p-select", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "loadingIcon", "filterPlaceholder", "filterLocale", "variant", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "checkmark", "dropdownIcon", "loading", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "size", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "fluid", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: Message, selector: "p-message", inputs: ["severity", "text", "escape", "style", "styleClass", "closable", "icon", "closeIcon", "life", "showTransitionOptions", "hideTransitionOptions", "size", "variant"], outputs: ["onClose"] }, { kind: "ngmodule", type: SkeletonModule }, { kind: "component", type: i9.Skeleton, selector: "p-skeleton", inputs: ["styleClass", "style", "shape", "animation", "borderRadius", "size", "width", "height"] }, { kind: "directive", type: CharCountDirective, selector: "[appCharCount]", inputs: ["appCharCount", "inputTypeCount"] }, { kind: "pipe", type: PlaMessageMappingPipe, name: "plaMessage" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaDynamicForm, decorators: [{
            type: Component,
            args: [{ selector: 'pla-dynamic-form', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        InputIcon,
                        IconFieldModule,
                        InputTextModule,
                        InputNumberModule,
                        TextareaModule,
                        SelectModule,
                        Message,
                        SkeletonModule,
                        CharCountDirective,
                        PlaMessageMappingPipe,
                    ], standalone: true, template: "<form class=\"grid w-full m-0\">\n  <ng-container [formGroup]=\"lisFormGroup\">\n    <ng-container *ngFor=\"let control of lisFormDesign\">\n      <div\n        *ngIf=\"!control?.hidden\"\n        class=\"{{ control?.class || 'row' }}\"\n        [attr.data-type]=\"control?.type\"\n      >\n        <ng-container\n          *ngIf=\"!loading || control?.type === 'empty'; else loadingTemplate\"\n        >\n          <ng-container [ngSwitch]=\"control?.type\">\n            <div *ngSwitchCase=\"'empty'\" class=\"w-full\"></div>\n            <div *ngSwitchCase=\"'text'\">\n              <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n                <!-- use readonly instead of disable to prevent skipping validation -->\n                <p-iconfield>\n                  <input\n                    pInputText\n                    autocomplete=\"off\"\n                    class=\"w-full\"\n                    [ngClass]=\"\n                      classValidate(\n                        lisFormGroup.controls[control.formControlName],\n                        submitted\n                      )\n                    \"\n                    [id]=\"control.formControlName\"\n                    [name]=\"control.formControlName\"\n                    [formControlName]=\"control.formControlName\"\n                    [readonly]=\"control.readOnly\"\n                    [maxlength]=\"control?.max || 1000\"\n                    (input)=\"control.input ? control.input($event) : ''\"\n                  />\n\n                  <!-- \n                    [appOverlayText]=\"control?.floatingSuffix || ''\"\n                    [appCharCount]=\"control?.appCharCount ? control?.max : null\"\n                   -->\n                  <p-inputicon [class]=\"control.classIcon\" />\n                </p-iconfield>\n\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div>\n\n            <!-- TEXTAREA -->\n            <div *ngSwitchCase=\"'textarea'\">\n              <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n                <textarea\n                  pTextarea\n                  [id]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [formControlName]=\"control.formControlName\"\n                  [minLength]=\"control?.min || 0\"\n                  [maxLength]=\"control?.max || 1000\"\n                  [rows]=\"control?.rows || 5\"\n                  [cols]=\"control?.cols || 30\"\n                  [appCharCount]=\"\n                    control.appCharCount && control.max ? control.max : 0\n                  \"\n                  [fluid]=\"control?.fluid || true\"\n                  [inputTypeCount]=\"\n                    control.appCharCount && control.inputTypeCount\n                      ? control.inputTypeCount\n                      : 'input'\n                  \"\n                  style=\"resize: none\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                ></textarea>\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div>\n\n            <!-- SELECT -->\n            <div class=\"w-full\" *ngSwitchCase=\"'select'\">\n              <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n                <p-select\n                  [inputId]=\"control.formControlName\"\n                  [attr.name]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  appendTo=\"body\"\n                  [id]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [formControlName]=\"control.formControlName\"\n                  [inputId]=\"control.formControlName\"\n                  [options]=\"control.data || []\"\n                  [optionLabel]=\"control.optionLabel || 'name'\"\n                  [optionValue]=\"control.optionValue || 'code'\"\n                  [loading]=\"control.loading\"\n                  class=\"w-full\"\n                  [showClear]=\"control.clear || false\"\n                  [filter]=\"control.filter || false\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                  (onFilter)=\"control.onFilter ? control.onFilter($event) : ''\"\n                  (onChange)=\"\n                    control.onChange\n                      ? control.onChange($event, control.formControlName)\n                      : ''\n                  \"\n                  (onHide)=\"\n                    control.onHide\n                      ? control.onHide($event, control.formControlName)\n                      : ''\n                  \"\n                >\n                  <ng-template #emptyfilter>\n                    <span>Not found</span>\n                  </ng-template>\n                </p-select>\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div>\n\n            <!-- INPUT NUMBER -->\n            <div *ngSwitchCase=\"'number'\">\n              <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n                <p-iconfield>\n                  <p-inputNumber\n                    class=\"w-full\"\n                    mode=\"decimal\"\n                    [inputId]=\"control.formControlName\"\n                    [name]=\"control.formControlName\"\n                    [formControlName]=\"control.formControlName\"\n                    [placeholder]=\"control.placeholder || ''\"\n                    [suffix]=\"control.suffix || ''\"\n                    [prefix]=\"control.prefix || ''\"\n                    [minFractionDigits]=\"control?.digit || null\"\n                    [maxFractionDigits]=\"control?.digit || null\"\n                    [ngClass]=\"\n                      classValidate(\n                        lisFormGroup.controls[control.formControlName],\n                        submitted\n                      )\n                    \"\n                  ></p-inputNumber>\n                  <p-inputicon [class]=\"control.classIcon\" />\n                </p-iconfield>\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div>\n            <!-- Input Group -->\n            <!-- <div *ngSwitchCase=\"'input-group'\">\n              <p-floatlabel variant=\"in\">\n                <p-iconfield>\n                  <div class=\"relative w-full\">\n                    <p-inputNumber\n                      class=\"w-full pr-24\"\n                      [inputId]=\"control.formControlName\"\n                      [name]=\"control.formControlName\"\n                      [formControlName]=\"control.formControlName\"\n                      [min]=\"control?.min || 0\"\n                      [ngClass]=\"\n                        classValidate(\n                          lisFormGroup.controls[control.formControlName],\n                          submitted\n                        )\n                      \"\n                    />\n                    <div class=\"select-text\" *ngIf=\"control.isViewMode\">\n                      {{\n                        getSelectedValue(\n                          control.data,\n                          lisFormGroup.controls[control.subFormControlName]\n                            .value\n                        )\n                      }}\n                    </div>\n\n                    <p-selectbutton\n                      class=\"select-button\"\n                      [ngClass]=\"{\n                        'cursor-not-allowed':\n                          lisFormGroup.controls[control.subFormControlName]\n                            .disabled\n                      }\"\n                      *ngIf=\"control.subFormControlName && !control.isViewMode\"\n                      [formControlName]=\"control.subFormControlName\"\n                      [options]=\"control.data\"\n                      [optionLabel]=\"control.optionLabel || 'name'\"\n                      [optionValue]=\"control.optionValue || 'code'\"\n                      aria-labelledby=\"basic\"\n                      (click)=\"\n                        control?.onClick\n                          ? control.onClick(\n                              lisFormGroup.controls[control.subFormControlName]\n                                .value\n                            )\n                          : ''\n                      \"\n                    />\n                  </div>\n                </p-iconfield>\n\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n            <!-- SELECT BUTTON -->\n            <!-- <div *ngSwitchCase=\"'select-button'\">\n              <p-selectbutton\n                [formControlName]=\"control.formControlName\"\n                [options]=\"control.data\"\n                [optionLabel]=\"control.optionLabel || 'name'\"\n                [optionValue]=\"control.optionValue || 'code'\"\n                aria-labelledby=\"basic\"\n                (onClick)=\"\n                  control?.onClick\n                    ? control.onClick($event, control.formControlName)\n                    : ''\n                \"\n              />\n            </div> -->\n\n            <!-- DATEPICKER -->\n            <!-- <div *ngSwitchCase=\"'datepicker'\">\n              <p-floatlabel variant=\"in\">\n                <p-datepicker\n                  appendTo=\"body\"\n                  [inputId]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [formControlName]=\"control.formControlName\"\n                  [placeholder]=\"control.placeholder\"\n                  showIcon\n                  [dateFormat]=\"control.dateFormat || 'dd-mm-yy'\"\n                  [showTime]=\"control.showTime || false\"\n                  [hourFormat]=\"control.hourFormat || '24'\"\n                  [showButtonBar]=\"control.showButtonBar || false\"\n                  [minDate]=\"lisFormGroup.get(control.minDate)?.value || null\"\n                  [maxDate]=\"lisFormGroup.get(control.maxDate)?.value || null\"\n                  [selectionMode]=\"control.selectionMode || 'single'\"\n                  [readonlyInput]=\"control.readonlyInput || false\"\n                  [fluid]=\"control.fluid || true\"\n                  iconDisplay=\"input\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n            <!-- DROPDOWN AUTO-COMPLETE -->\n            <!-- <div *ngSwitchCase=\"'dropdown'\">\n              <p-floatlabel variant=\"in\">\n                <p-autocomplete\n                  [inputId]=\"control.formControlName\"\n                  [attr.name]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  appendTo=\"body\"\n                  [formControlName]=\"control.formControlName\"\n                  [inputId]=\"control.formControlName\"\n                  optionLabel=\"name\"\n                  optionValue=\"code\"\n                  [dropdown]=\"true\"\n                  [suggestions]=\"options || []\"\n                  class=\"w-full\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                  (completeMethod)=\"\n                    control?.completeMethod\n                      ? control.completeMethod($event)\n                      : ''\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n            <!-- MULTI-SELECT -->\n            <!-- <div class=\"h-full\" *ngSwitchCase=\"'multiselect'\">\n              <p-floatlabel class=\"h-full\" variant=\"in\">\n                <p-multiselect\n                  [showToggleAll]=\"!control.disableToggleAll\"\n                  [inputId]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [display]=\"control.display || 'comma'\"\n                  [maxSelectedLabels]=\"control.maxSelectedLabels || null\"\n                  selectedItemsLabel=\"{0} items selected\"\n                  [filter]=\"true\"\n                  appendTo=\"body\"\n                  [formControlName]=\"control.formControlName\"\n                  [inputId]=\"control.formControlName\"\n                  [options]=\"control.data || []\"\n                  [optionLabel]=\"control.optionLabel || 'name'\"\n                  [optionValue]=\"control.optionValue || 'code'\"\n                  class=\"w-full h-full\"\n                  [optionDisabled]=\"'disabled'\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                  (onFilter)=\"control?.onFilter ? control.onFilter($event) : ''\"\n                  (onChange)=\"\n                    control?.onChange\n                      ? control.onChange($event, control.formControlName)\n                      : ''\n                  \"\n                >\n                </p-multiselect>\n                <label [for]=\"control.formControlName\">\n                  {{ control.label }}\n                  <span *ngIf=\"isRequired(control.formControlName)\">*</span>\n                </label>\n              </p-floatlabel>\n            </div> -->\n\n            <!-- RADIO -->\n            <!-- <div\n              *ngSwitchCase=\"'radio'\"\n              class=\"flex flex-wrap gap-3 align-items-center justify-content-between w-full\"\n            >\n              <ng-container *ngIf=\"!loading; else loadingTemplate\">\n                <h6 class=\"mb-0 text-wrap white-space-normal\">\n                  {{ control?.label }}\n                </h6>\n              </ng-container>\n              <div class=\"flex flex-wrap gap-3\">\n                <ng-container *ngFor=\"let item of control.data\">\n                  <div class=\"field-checkbox col-auto\">\n                    <p-radiobutton\n                      [inputId]=\"control.formControlName + '-' + item.name\"\n                      [name]=\"control.formControlName\"\n                      [value]=\"item.code\"\n                      [formControlName]=\"control.formControlName\"\n                      (onClick)=\"\n                        control?.onClick\n                          ? control.onClick($event, control.formControlName)\n                          : ''\n                      \"\n                    />\n                    <label\n                      [for]=\"control.formControlName + '-' + item.name\"\n                      class=\"ml-2\"\n                      >{{ item.name }}</label\n                    >\n                  </div>\n                </ng-container>\n              </div>\n            </div> -->\n\n            <!-- CHECKBOX -->\n            <!-- <div\n              *ngSwitchCase=\"'checkbox'\"\n              class=\"flex flex-wrap gap-3 align-items-center justify-content-between\"\n            >\n              <ng-container *ngFor=\"let item of control.data\">\n                <div class=\"field-checkbox col-auto\">\n                  <p-checkbox\n                    [inputId]=\"control.formControlName + '-' + item.name\"\n                    [name]=\"control.formControlName\"\n                    [value]=\"item.code\"\n                    [formControlName]=\"control.formControlName\"\n                    (onClick)=\"\n                      control?.onClick\n                        ? control.onClick($event, control.formControlName)\n                        : ''\n                    \"\n                  />\n                  <label\n                    [for]=\"control.formControlName + '-' + item.name\"\n                    class=\"ml-2\"\n                    >{{ item.name }}</label\n                  >\n                </div>\n              </ng-container>\n            </div> -->\n          </ng-container>\n        </ng-container>\n        <ng-template #loadingTemplate>\n          <p-skeleton width=\"100%\" borderRadius=\"1rem\" />\n        </ng-template>\n\n        <!-- Error Message Section -->\n        <div class=\"text-left mt-0\">\n          <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['required'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Required\"\n          >\n            {{ \"REQUIRED\" | plaMessage }}</p-message\n          >\n\n          <!-- MAX -->\n          <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}max\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['max'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ \"MAXVALUE\" | plaMessage : { maxValue: lisFormGroup.get(control.formControlName)?.errors?.['max'].max } }}\n            {{ lisFormGroup.get(control.formControlName)?.errors?.['max'].message }}</p-message\n          >\n\n          <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}min\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['min'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ \"MINVALUE\" | plaMessage : { minValue: lisFormGroup.get(control.formControlName)?.errors?.['min'].min } }}\n            {{ lisFormGroup.get(control.formControlName)?.errors?.['min'].message }}</p-message\n          >\n\n          <!-- Not allow available data -->\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}valueNotAllowed\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ lisFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'].value }}\n            is already in use.</p-message\n          > -->\n\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}upperCaseEnOnly\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ lisFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'].message }}</p-message\n          > -->\n          <!-- {{lisFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] | json}} -->\n          <!-- MESSAGE REQUIRED -->\n\n          <!-- MESSAGE MIN LENGTH -->\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!lisFormGroup.get(control.formControlName)?.errors?.['pattern'] && lisFormGroup.get(control.formControlName)?.errors?.['minlength'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Minlength\"\n          >\n            {{ \"MINIMUM\" | plaMessage : { max: control?.max } }}</p-message\n          > -->\n\n          <!-- MESSAGE MAX LENGTH -->\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!lisFormGroup.get(control.formControlName)?.errors?.['pattern'] && lisFormGroup.get(control.formControlName)?.errors?.['maxlength'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Maxlength\"\n          >\n            {{ \"MAXIMUM\" | plaMessage : { min: control?.min } }}</p-message\n          > -->\n          <!-- RANGE PATTEN -->\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !lisFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              (\n                lisFormGroup.get(control.formControlName)?.errors?.['minTooHigh'] ||\n                lisFormGroup.get(control.formControlName)?.errors?.['maxTooLow']\n              ) &&\n              (lisFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-validator\"\n          >\n            {{\n              \"RANGE\" | plaMessage : { range: control.rangeLabel }\n            }}</p-message\n          > -->\n\n          <!-- RANGE REQUIRED PATTEN -->\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !lisFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              !lisFormGroup.get(control.formControlName)?.errors?.['required'] &&\n              (\n                lisFormGroup.get(control.formControlName)?.errors?.['minRequired'] ||\n                lisFormGroup.get(control.formControlName)?.errors?.['maxRequired']\n              ) &&\n              (lisFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-required-validator\"\n          >\n            {{ \"REQUIRED\" | plaMessage }}</p-message\n          > -->\n\n          <!-- MESSAGE PATTEN -->\n\n          <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}Pattern\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['pattern'] && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{\n              \"PATTERN\" | plaMessage : { pattern: control?.msgCustom }\n            }}</p-message\n          > -->\n\n          <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}asciiOnly\"\n            *ngIf=\"lisFormGroup.get(control.formControlName)?.errors?.['asciiOnly'] === true && (lisFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ control?.msgCustom }}</p-message\n          >\n        </div>\n      </div>\n    </ng-container>\n  </ng-container>\n</form>\n", styles: [".input-color{color:var(--color-primary-6)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { lisFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], lisFormDesign: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }], loading: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class TYPE {
    static TEXT = 'text';
    static NUMBER = 'number';
    static DECIMAL = 'decimal';
    static INPUTGROUP = 'input-group';
    static SELECTBUTTON = 'select-button';
    static TEXTAREA = 'textarea';
    static DROPDOWN = 'dropdown';
    static SELECT = 'select';
    static RADIO = 'radio';
    static MULTISELECT = 'multiselect';
    static CHECKBOX = 'checkbox';
    static EMPTY = 'empty';
    static DATEPICKER = 'datepicker';
}
// export interface IGroupData {
//   id: number;
//   groupName: string;
//   class?: string;
//   data: any[];
// }

class PlaTopbar {
    appName = '';
    firstName = '';
    department = '';
    onMenuButtonClick = new EventEmitter();
    onClick() {
        this.onMenuButtonClick.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTopbar, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaTopbar, isStandalone: true, selector: "pla-topbar", inputs: { appName: "appName", firstName: "firstName", department: "department" }, outputs: { onMenuButtonClick: "onMenuButtonClick" }, ngImport: i0, template: "<div class=\"topbar-start\">\n  <button pButton #menubutton type=\"button\" class=\"topbar-menubutton p-trigger duration-300\" (click)=\"onClick()\">\n    <i class=\"pi pi-bars\"></i>\n    <!-- <img src=\"icon/c-menu.svg\" style=\"width: 1.5rem; margin-left: 0.5rem;\" /> -->\n  </button>\n  <h4 class=\"text-2xl\" style=\"font-weight: 600;text-transform: uppercase;\">{{ appName }}</h4>\n</div>\n<div class=\"layout-topbar-menu-section\">\n  <div app-sidebar></div>\n</div>\n<div class=\"topbar-end\">\n  <ul class=\"topbar-menu\">\n    <li> EN </li>\n    <li class=\"topbar-item\">\n      <ng-container true>\n        <div style=\" display: flex; gap: 15px; align-items: center;\">\n          <div style=\"display: flex; flex-wrap: nowrap; flex-direction: column; align-items: flex-end\">\n            <b style=\"color: var(--color-primary-1); font-size: var(--font-size-4); font-weight: 700\">\n              {{firstName}}\n            </b>\n            <small style=\"font-size: var(--font-size-7); font-weight: 300\">\n              {{department}}\n            </small>\n          </div>\n          <img src=\"icon/user.svg\" style=\"width: 25px\" alt=\"\" />\n        </div>\n      </ng-container>\n    </li>\n  </ul>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "directive", type: i1.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "loading", "severity", "raised", "rounded", "text", "outlined", "size", "plain", "fluid", "label", "icon", "buttonProps"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTopbar, decorators: [{
            type: Component,
            args: [{ selector: 'pla-topbar', imports: [ButtonModule], template: "<div class=\"topbar-start\">\n  <button pButton #menubutton type=\"button\" class=\"topbar-menubutton p-trigger duration-300\" (click)=\"onClick()\">\n    <i class=\"pi pi-bars\"></i>\n    <!-- <img src=\"icon/c-menu.svg\" style=\"width: 1.5rem; margin-left: 0.5rem;\" /> -->\n  </button>\n  <h4 class=\"text-2xl\" style=\"font-weight: 600;text-transform: uppercase;\">{{ appName }}</h4>\n</div>\n<div class=\"layout-topbar-menu-section\">\n  <div app-sidebar></div>\n</div>\n<div class=\"topbar-end\">\n  <ul class=\"topbar-menu\">\n    <li> EN </li>\n    <li class=\"topbar-item\">\n      <ng-container true>\n        <div style=\" display: flex; gap: 15px; align-items: center;\">\n          <div style=\"display: flex; flex-wrap: nowrap; flex-direction: column; align-items: flex-end\">\n            <b style=\"color: var(--color-primary-1); font-size: var(--font-size-4); font-weight: 700\">\n              {{firstName}}\n            </b>\n            <small style=\"font-size: var(--font-size-7); font-weight: 300\">\n              {{department}}\n            </small>\n          </div>\n          <img src=\"icon/user.svg\" style=\"width: 25px\" alt=\"\" />\n        </div>\n      </ng-container>\n    </li>\n  </ul>\n</div>\n" }]
        }], propDecorators: { appName: [{
                type: Input
            }], firstName: [{
                type: Input
            }], department: [{
                type: Input
            }], onMenuButtonClick: [{
                type: Output
            }] } });

/*
 * Public API Surface of pla-shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CharCountDirective, PlaButtonFei, PlaButtonFonComponent, PlaButtonOutlinedComponent, PlaButtonPrimaryComponent, PlaButtonPrimaryIconComponent, PlaButtonSaveComponent, PlaButtonSecondaryComponent, PlaButtonWut, PlaDynamicForm, PlaInputSelect, PlaInputText, PlaMessageMappingPipe, PlaSharedLibComponent, PlaSharedLibService, PlaTopbar, TYPE, messageModels };
//# sourceMappingURL=pla-shared-lib.mjs.map
