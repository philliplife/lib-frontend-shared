import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Output, forwardRef, Directive, Pipe, inject } from '@angular/core';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR, FormControl, Validators, FormsModule } from '@angular/forms';
import * as i3 from 'primeng/floatlabel';
import { FloatLabelModule } from 'primeng/floatlabel';
import * as i5 from 'primeng/inputtext';
import { InputText, InputTextModule } from 'primeng/inputtext';
import * as i4 from 'primeng/select';
import { SelectModule } from 'primeng/select';
import * as i3$4 from 'primeng/skeleton';
import { SkeletonModule } from 'primeng/skeleton';
import * as i4$1 from 'primeng/iconfield';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { fromEvent, interval, merge, startWith, map, distinctUntilChanged, BehaviorSubject, tap, catchError, throwError } from 'rxjs';
import * as i4$2 from 'primeng/textarea';
import { TextareaModule } from 'primeng/textarea';
import * as i5$1 from 'primeng/inputnumber';
import { InputNumberModule } from 'primeng/inputnumber';
import * as i3$1 from 'primeng/radiobutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import * as i3$2 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i4$3 from 'primeng/multiselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { Message } from 'primeng/message';
import * as i4$4 from 'primeng/datepicker';
import { DatePickerModule } from 'primeng/datepicker';
import * as i3$3 from 'primeng/toggleswitch';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SelectButton } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import * as i4$5 from 'primeng/api';
import * as i3$5 from 'primeng/divider';
import { DividerModule } from 'primeng/divider';
import * as i2$1 from 'primeng/dialog';
import { DialogModule } from 'primeng/dialog';
import * as i3$6 from 'angular-svg-icon';
import { AngularSvgIconModule } from 'angular-svg-icon';
import * as i2$2 from 'primeng/stepper';
import { StepperModule } from 'primeng/stepper';
import { StepsModule } from 'primeng/steps';
import * as i1$2 from '@angular/common/http';
import { HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import Swal from 'sweetalert2';
import { filter, take, switchMap, catchError as catchError$1 } from 'rxjs/operators';

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
    iconPos = 'left';
    get mergedStyle() {
        return { ...this.style, color: '#000' };
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onActionClick() {
        this.onClick.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonOutlinedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonOutlinedComponent, isStandalone: true, selector: "pla-button-outlined", inputs: { disabled: "disabled", label: "label", icon: "icon", styleClass: "styleClass", style: "style", iconPos: "iconPos" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<p-button [label]=\"label\" [icon]=\"icon\" [iconPos]=\"iconPos\" [disabled]=\"disabled\" [style]=\"mergedStyle\" [styleClass]=\"styleClass\"\n  (onClick)=\"onActionClick()\" severity=\"secondary\" outlined>\n  <ng-content></ng-content>\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonOutlinedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-outlined', imports: [ButtonModule, CommonModule], template: "<p-button [label]=\"label\" [icon]=\"icon\" [iconPos]=\"iconPos\" [disabled]=\"disabled\" [style]=\"mergedStyle\" [styleClass]=\"styleClass\"\n  (onClick)=\"onActionClick()\" severity=\"secondary\" outlined>\n  <ng-content></ng-content>\n</p-button>\n" }]
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
            }], iconPos: [{
                type: Input
            }] } });

class PlaButtonPrimaryIconComponent {
    styleClass = ''; // ใช้สำหรับ CSS class
    style = {}; //ใช้สำหรับ inline style
    disabled = false;
    label = '';
    icon = '';
    onClick = new EventEmitter();
    iconPos = 'left';
    get mergedStyle() {
        return { ...this.style };
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onActionClick() {
        this.onClick.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonPrimaryIconComponent, isStandalone: true, selector: "pla-button-primary-icon", inputs: { styleClass: "styleClass", style: "style", disabled: "disabled", label: "label", icon: "icon", iconPos: "iconPos" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<p-button  [style]=\"mergedStyle\" [styleClass]=\"styleClass\" [label]=\"label\" [icon]=\"icon\" [iconPos]=\"iconPos\" [disabled]=\"disabled\" (onClick)=\"onActionClick()\">\n  <ng-content></ng-content>\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-primary-icon', imports: [ButtonModule, CommonModule], template: "<p-button  [style]=\"mergedStyle\" [styleClass]=\"styleClass\" [label]=\"label\" [icon]=\"icon\" [iconPos]=\"iconPos\" [disabled]=\"disabled\" (onClick)=\"onActionClick()\">\n  <ng-content></ng-content>\n</p-button>\n" }]
        }], propDecorators: { styleClass: [{
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
            }], iconPos: [{
                type: Input
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
        ], ngImport: i0, template: "<p-floatlabel variant=\"in\">\n  <input pInputText [style]=\"style\" [class]=\"class\" [id]=\"`${label}_frm`\"  [value]=\"value\" (input)=\"onInputChange($event)\" (blur)=\"onTouched()\" [disabled]=\"disabled\" autocomplete=\"off\" />\n  <label [for]=\"`${label}_frm`\">{{ label }}</label>\n</p-floatlabel>\n", styles: [""], dependencies: [{ kind: "directive", type: InputText, selector: "[pInputText]", inputs: ["variant", "fluid", "pSize"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: ReactiveFormsModule }] });
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
        ], ngImport: i0, template: "<p-floatlabel class=\"w-full md:w-56\" variant=\"in\">\n  <p-select\n    [style]=\"style\"\n    [class]=\"class\"\n    [id]=\"`${label}_frm`\"\n    optionLabel=\"name\"\n    [options]=\"drpData\"\n    [formControl]=\"innerControl\"\n    (blur)=\"onTouched()\"\n  ></p-select>\n  <label [for]=\"`${label}_frm`\">{{label}}</label>\n</p-floatlabel>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: SelectModule }, { kind: "component", type: i4.Select, selector: "p-select", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "loadingIcon", "filterPlaceholder", "filterLocale", "variant", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "checkmark", "dropdownIcon", "loading", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "size", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "fluid", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }] });
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

class TYPE {
    static TEXT = 'text';
    static NUMBER = 'number';
    static DECIMAL = 'decimal';
    static INPUTGROUP = 'input-group';
    static SELECTBUTTON = 'select-button';
    static TEXTAREA = 'textarea';
    static DROPDOWN = 'dropdown';
    static SELECT = 'select';
    static SELECT_OBS = 'select-obs';
    static RADIO = 'radio';
    static MULTISELECT = 'multiselect';
    static CHECKBOX = 'checkbox';
    static EMPTY = 'empty';
    static DATEPICKER = 'datepicker';
    static TOGGLESWITCH = 'toggleswitch';
}

const isRequired = (controlName, lisFormGroup) => {
    const control = lisFormGroup.get(controlName);
    return control?.hasValidator(Validators.required) ?? false;
};
const classValidate = (formControl, submitted = false) => {
    if (!formControl)
        return {};
    const isInvalid = formControl.invalid;
    const hasInteracted = formControl.dirty;
    const showError = isInvalid && (submitted || hasInteracted);
    return {
        'ng-invalid': showError,
        'ng-dirty': showError,
    };
};

class PlaFormSelectComponent {
    listFormGroup;
    control;
    submitted = false;
    isRequired = isRequired;
    classValidate = classValidate;
    ngOnInit() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormSelectComponent, isStandalone: true, selector: "pla-form-select", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted" }, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-select\n      [inputId]=\"control.formControlName\"\n      [attr.name]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      appendTo=\"body\"\n      [id]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"control.data || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      [loading]=\"control.loading\"\n      class=\"w-full\"\n      [showClear]=\"control.clear || false\"\n      [filter]=\"control.filter || false\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName)\n          : ''\n      \"\n      (onHide)=\"\n        control.onHide ? control.onHide($event, control.formControlName) : ''\n      \"\n    >\n      <ng-template #emptyfilter>\n        <span>Not found</span>\n      </ng-template>\n    </p-select>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: SelectModule }, { kind: "component", type: i4.Select, selector: "p-select", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "loadingIcon", "filterPlaceholder", "filterLocale", "variant", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "checkmark", "dropdownIcon", "loading", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "size", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "fluid", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-select', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        SelectModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-select\n      [inputId]=\"control.formControlName\"\n      [attr.name]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      appendTo=\"body\"\n      [id]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"control.data || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      [loading]=\"control.loading\"\n      class=\"w-full\"\n      [showClear]=\"control.clear || false\"\n      [filter]=\"control.filter || false\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName)\n          : ''\n      \"\n      (onHide)=\"\n        control.onHide ? control.onHide($event, control.formControlName) : ''\n      \"\n    >\n      <ng-template #emptyfilter>\n        <span>Not found</span>\n      </ng-template>\n    </p-select>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n" }]
        }], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class OverlayTextDirective {
    el;
    renderer;
    overlayText = '';
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        const input = this.el.nativeElement;
        const parent = this.renderer.parentNode(input);
        // Create wrapper with relative positioning
        const wrapper = this.renderer.createElement('div');
        this.renderer.setStyle(wrapper, 'position', 'relative');
        this.renderer.setStyle(wrapper, 'display', 'inline-block');
        this.renderer.setStyle(wrapper, 'width', '100%');
        // Create overlay text element
        const overlay = this.renderer.createElement('span');
        this.renderer.setStyle(overlay, 'position', 'absolute');
        this.renderer.setStyle(overlay, 'top', '50%');
        this.renderer.setStyle(overlay, 'right', '0.5rem');
        this.renderer.setStyle(overlay, 'transform', 'translateY(-50%)');
        this.renderer.setStyle(overlay, 'pointer-events', 'none');
        this.renderer.setStyle(overlay, 'padding-right', '0.5rem');
        this.renderer.setStyle(overlay, 'color', '#888');
        this.renderer.setStyle(overlay, 'font-size', '0.9em');
        this.renderer.setAttribute(overlay, 'floating-suffix', 'true');
        this.renderer.setProperty(overlay, 'innerText', this.overlayText);
        // Rebuild DOM
        this.renderer.insertBefore(parent, wrapper, input);
        this.renderer.removeChild(parent, input);
        this.renderer.appendChild(wrapper, input);
        this.renderer.appendChild(wrapper, overlay);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: OverlayTextDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.14", type: OverlayTextDirective, isStandalone: true, selector: "[appOverlayText]", inputs: { overlayText: ["appOverlayText", "overlayText"] }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: OverlayTextDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appOverlayText]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { overlayText: [{
                type: Input,
                args: ['appOverlayText']
            }] } });

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
        this.renderer.setStyle(this.counterEl, 'bottom', this.inputTypeCount === 'input' ? '0.8rem' : '0.75rem');
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

class PlaFormInputTextComponent {
    control;
    listFormGroup;
    formControl;
    submitted = false;
    valueChange = new EventEmitter();
    isRequired = isRequired;
    classValidate = classValidate;
    ngOnInit() { }
    onValueChange(newValue) {
        this.control.value = newValue;
        this.valueChange.emit(newValue);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaFormInputTextComponent, isStandalone: true, selector: "pla-form-input-text", inputs: { control: "control", listFormGroup: "listFormGroup", formControl: "formControl", submitted: "submitted" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<ng-container *ngIf=\"control.formControlName\">\n  <div [formGroup]=\"listFormGroup\">\n    <p-floatlabel variant=\"in\">\n      <p-iconfield\n        [attr.iconPosition]=\"\n          control.classIcon ? control.iconPosition ?? 'left' : null\n        \"\n      >\n        <!-- Render icon on the LEFT -->\n        @if(control.classIcon && (control.iconPosition ?? 'left') === 'left'){\n        <p-inputIcon [class]=\"control.classIcon\"></p-inputIcon>\n        }\n        <input\n          pInputText\n          [formControlName]=\"control.formControlName\"\n          class=\"w-full\"\n          [id]=\"control.formControlName\"\n          [name]=\"control.formControlName\"\n          [readonly]=\"control.readOnly\"\n          [maxlength]=\"control.max || 1000\"\n          [appOverlayText]=\"control.floatingSuffix || ''\"\n          [appCharCount]=\"control.appCharCount && control.max ? control.max : 0\"\n          [inputTypeCount]=\"'input'\"\n        />\n        <!-- Render icon on the RIGHT -->\n        @if(control.classIcon && (control.iconPosition ?? 'left') === 'right'){\n        <p-inputIcon [class]=\"control.classIcon\"></p-inputIcon>\n        }\n      </p-iconfield>\n      <label [for]=\"control.formControlName\">{{ control.label }}</label>\n    </p-floatlabel>\n  </div>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "component", type: InputIcon, selector: "p-inputicon, p-inputIcon", inputs: ["styleClass"] }, { kind: "ngmodule", type: IconFieldModule }, { kind: "component", type: i4$1.IconField, selector: "p-iconfield, p-iconField, p-icon-field", inputs: ["iconPosition", "styleClass"] }, { kind: "ngmodule", type: InputTextModule }, { kind: "directive", type: i5.InputText, selector: "[pInputText]", inputs: ["variant", "fluid", "pSize"] }, { kind: "directive", type: OverlayTextDirective, selector: "[appOverlayText]", inputs: ["appOverlayText"] }, { kind: "directive", type: CharCountDirective, selector: "[appCharCount]", inputs: ["appCharCount", "inputTypeCount"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-input-text', imports: [
                        FormsModule,
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        FloatLabelModule,
                        InputIcon,
                        IconFieldModule,
                        InputTextModule,
                        OverlayTextDirective,
                        CharCountDirective
                    ], template: "<ng-container *ngIf=\"control.formControlName\">\n  <div [formGroup]=\"listFormGroup\">\n    <p-floatlabel variant=\"in\">\n      <p-iconfield\n        [attr.iconPosition]=\"\n          control.classIcon ? control.iconPosition ?? 'left' : null\n        \"\n      >\n        <!-- Render icon on the LEFT -->\n        @if(control.classIcon && (control.iconPosition ?? 'left') === 'left'){\n        <p-inputIcon [class]=\"control.classIcon\"></p-inputIcon>\n        }\n        <input\n          pInputText\n          [formControlName]=\"control.formControlName\"\n          class=\"w-full\"\n          [id]=\"control.formControlName\"\n          [name]=\"control.formControlName\"\n          [readonly]=\"control.readOnly\"\n          [maxlength]=\"control.max || 1000\"\n          [appOverlayText]=\"control.floatingSuffix || ''\"\n          [appCharCount]=\"control.appCharCount && control.max ? control.max : 0\"\n          [inputTypeCount]=\"'input'\"\n        />\n        <!-- Render icon on the RIGHT -->\n        @if(control.classIcon && (control.iconPosition ?? 'left') === 'right'){\n        <p-inputIcon [class]=\"control.classIcon\"></p-inputIcon>\n        }\n      </p-iconfield>\n      <label [for]=\"control.formControlName\">{{ control.label }}</label>\n    </p-floatlabel>\n  </div>\n</ng-container>\n" }]
        }], propDecorators: { control: [{
                type: Input
            }], listFormGroup: [{
                type: Input
            }], formControl: [{
                type: Input
            }], submitted: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class PlaFormTextAreaComponent {
    listFormGroup;
    control;
    submitted = false;
    isRequired = isRequired;
    classValidate = classValidate;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormTextAreaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormTextAreaComponent, isStandalone: true, selector: "pla-form-text-area", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted" }, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <textarea\n      pTextarea\n      [id]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [minLength]=\"control?.min || 0\"\n      [maxLength]=\"control?.max || 1000\"\n      [rows]=\"control?.rows || 5\"\n      [cols]=\"control?.cols || 30\"\n      [appCharCount]=\"control.appCharCount && control.max ? control.max : 0\"\n      [fluid]=\"control?.fluid || true\"\n      [inputTypeCount]=\"\n        control.appCharCount && control.inputTypeCount\n          ? control.inputTypeCount\n          : 'input'\n      \"\n      style=\"resize: none\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n    ></textarea>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: TextareaModule }, { kind: "directive", type: i4$2.Textarea, selector: "[pTextarea]", inputs: ["autoResize", "variant", "fluid", "pSize"], outputs: ["onResize"] }, { kind: "directive", type: CharCountDirective, selector: "[appCharCount]", inputs: ["appCharCount", "inputTypeCount"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormTextAreaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-text-area', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        FloatLabelModule,
                        TextareaModule,
                        CharCountDirective,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <textarea\n      pTextarea\n      [id]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [minLength]=\"control?.min || 0\"\n      [maxLength]=\"control?.max || 1000\"\n      [rows]=\"control?.rows || 5\"\n      [cols]=\"control?.cols || 30\"\n      [appCharCount]=\"control.appCharCount && control.max ? control.max : 0\"\n      [fluid]=\"control?.fluid || true\"\n      [inputTypeCount]=\"\n        control.appCharCount && control.inputTypeCount\n          ? control.inputTypeCount\n          : 'input'\n      \"\n      style=\"resize: none\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n    ></textarea>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n" }]
        }], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaFormInputNumberComponent {
    listFormGroup;
    control;
    submitted = false;
    isRequired = isRequired;
    classValidate = classValidate;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputNumberComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormInputNumberComponent, isStandalone: true, selector: "pla-form-input-number", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted" }, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-iconfield>\n      <p-inputNumber\n        class=\"w-full\"\n        mode=\"decimal\"\n        [inputId]=\"control.formControlName\"\n        [name]=\"control.formControlName\"\n        [formControlName]=\"control.formControlName\"\n        [placeholder]=\"control.placeholder || ''\"\n        [suffix]=\"control.suffix || ''\"\n        [prefix]=\"control.prefix || ''\"\n        [minFractionDigits]=\"control?.digit || null\"\n        [maxFractionDigits]=\"control?.digit || null\"\n        [appOverlayText]=\"control.floatingSuffix || ''\"\n        [ngClass]=\"\n          classValidate(\n            listFormGroup.controls[control.formControlName],\n            submitted\n          )\n        \"\n      ></p-inputNumber>\n      <p-inputicon [class]=\"control.classIcon\" />\n    </p-iconfield>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "component", type: InputIcon, selector: "p-inputicon, p-inputIcon", inputs: ["styleClass"] }, { kind: "ngmodule", type: IconFieldModule }, { kind: "component", type: i4$1.IconField, selector: "p-iconfield, p-iconField, p-icon-field", inputs: ["iconPosition", "styleClass"] }, { kind: "ngmodule", type: InputNumberModule }, { kind: "component", type: i5$1.InputNumber, selector: "p-inputNumber, p-inputnumber, p-input-number", inputs: ["showButtons", "format", "buttonLayout", "inputId", "styleClass", "style", "placeholder", "size", "maxlength", "tabindex", "title", "ariaLabelledBy", "ariaLabel", "ariaRequired", "name", "required", "autocomplete", "min", "max", "incrementButtonClass", "decrementButtonClass", "incrementButtonIcon", "decrementButtonIcon", "readonly", "step", "allowEmpty", "locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "variant", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "inputStyle", "inputStyleClass", "showClear", "autofocus", "disabled", "fluid"], outputs: ["onInput", "onFocus", "onBlur", "onKeyDown", "onClear"] }, { kind: "directive", type: OverlayTextDirective, selector: "[appOverlayText]", inputs: ["appOverlayText"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputNumberComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-input-number', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        FloatLabelModule,
                        InputIcon,
                        IconFieldModule,
                        InputNumberModule,
                        OverlayTextDirective,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-iconfield>\n      <p-inputNumber\n        class=\"w-full\"\n        mode=\"decimal\"\n        [inputId]=\"control.formControlName\"\n        [name]=\"control.formControlName\"\n        [formControlName]=\"control.formControlName\"\n        [placeholder]=\"control.placeholder || ''\"\n        [suffix]=\"control.suffix || ''\"\n        [prefix]=\"control.prefix || ''\"\n        [minFractionDigits]=\"control?.digit || null\"\n        [maxFractionDigits]=\"control?.digit || null\"\n        [appOverlayText]=\"control.floatingSuffix || ''\"\n        [ngClass]=\"\n          classValidate(\n            listFormGroup.controls[control.formControlName],\n            submitted\n          )\n        \"\n      ></p-inputNumber>\n      <p-inputicon [class]=\"control.classIcon\" />\n    </p-iconfield>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n" }]
        }], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaFormRadioComponent {
    listFormGroup;
    control;
    submitted = false;
    isRequired = isRequired;
    classValidate = classValidate;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormRadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormRadioComponent, isStandalone: true, selector: "pla-form-radio", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted" }, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <ng-container *ngIf=\"control.formControlName\">\n    <div\n      class=\"flex flex-wrap gap-3 align-items-center justify-content-between w-full\"\n    >\n      <label [for]=\"control.formControlName\">\n        {{ control?.label }}\n      </label>\n\n      <div class=\"flex flex-wrap align-items-center gap-3 radio-button-type\">\n        <ng-container *ngFor=\"let item of control.data\">\n          <div class=\"field-checkbox col-auto\">\n            <p-radiobutton\n              [inputId]=\"control.formControlName + '-' + item.name\"\n              [name]=\"control.formControlName\"\n              [value]=\"item.code\"\n              [formControlName]=\"control.formControlName\"\n              [ngClass]=\"\n                classValidate(\n                  listFormGroup.controls[control.formControlName],\n                  submitted\n                )\n              \"\n              (onClick)=\"\n                control.onClick\n                  ? control.onClick($event, control.formControlName)\n                  : ''\n              \"\n            />\n            <label\n              [for]=\"control.formControlName + '-' + item.name\"\n              class=\"ml-2\"\n              >{{ item.name }}</label\n            >\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "ngmodule", type: RadioButtonModule }, { kind: "component", type: i3$1.RadioButton, selector: "p-radioButton, p-radiobutton, p-radio-button", inputs: ["value", "formControlName", "name", "disabled", "variant", "size", "tabindex", "inputId", "ariaLabelledBy", "ariaLabel", "style", "styleClass", "autofocus", "binary"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormRadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-radio', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        RadioButtonModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <ng-container *ngIf=\"control.formControlName\">\n    <div\n      class=\"flex flex-wrap gap-3 align-items-center justify-content-between w-full\"\n    >\n      <label [for]=\"control.formControlName\">\n        {{ control?.label }}\n      </label>\n\n      <div class=\"flex flex-wrap align-items-center gap-3 radio-button-type\">\n        <ng-container *ngFor=\"let item of control.data\">\n          <div class=\"field-checkbox col-auto\">\n            <p-radiobutton\n              [inputId]=\"control.formControlName + '-' + item.name\"\n              [name]=\"control.formControlName\"\n              [value]=\"item.code\"\n              [formControlName]=\"control.formControlName\"\n              [ngClass]=\"\n                classValidate(\n                  listFormGroup.controls[control.formControlName],\n                  submitted\n                )\n              \"\n              (onClick)=\"\n                control.onClick\n                  ? control.onClick($event, control.formControlName)\n                  : ''\n              \"\n            />\n            <label\n              [for]=\"control.formControlName + '-' + item.name\"\n              class=\"ml-2\"\n              >{{ item.name }}</label\n            >\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n" }]
        }], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaFormCheckboxComponent {
    listFormGroup;
    control;
    submitted = false;
    isRequired = isRequired;
    classValidate = classValidate;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormCheckboxComponent, isStandalone: true, selector: "pla-form-checkbox", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted" }, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <ng-container *ngIf=\"control.formControlName\">\n    <p style=\"margin: 0px 0px 10px 0px\">\n      {{ control?.label }}\n    </p>\n    <div\n      class=\"flex flex-wrap gap-3 align-items-center justify-content-between radio-button-type\"\n    >\n      <ng-container *ngFor=\"let item of control.data\">\n        <div class=\"field-checkbox\">\n          <p-checkbox\n            [inputId]=\"control.formControlName + '-' + item.name\"\n            [name]=\"control.formControlName\"\n            [value]=\"item.code\"\n            [formControlName]=\"control.formControlName\"\n            [ngClass]=\"\n              classValidate(\n                listFormGroup.controls[control.formControlName],\n                submitted\n              )\n            \"\n            (onClick)=\"\n              control.onClick\n                ? control.onClick($event, control.formControlName)\n                : ''\n            \"\n          />\n          <label\n            [for]=\"control.formControlName + '-' + item.name\"\n            class=\"ml-2\"\n            >{{ item.name }}</label\n          >\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "ngmodule", type: CheckboxModule }, { kind: "component", type: i3$2.Checkbox, selector: "p-checkbox, p-checkBox, p-check-box", inputs: ["value", "name", "disabled", "binary", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "inputStyle", "styleClass", "inputClass", "indeterminate", "size", "formControl", "checkboxIcon", "readonly", "required", "autofocus", "trueValue", "falseValue", "variant"], outputs: ["onChange", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-checkbox', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        CheckboxModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <ng-container *ngIf=\"control.formControlName\">\n    <p style=\"margin: 0px 0px 10px 0px\">\n      {{ control?.label }}\n    </p>\n    <div\n      class=\"flex flex-wrap gap-3 align-items-center justify-content-between radio-button-type\"\n    >\n      <ng-container *ngFor=\"let item of control.data\">\n        <div class=\"field-checkbox\">\n          <p-checkbox\n            [inputId]=\"control.formControlName + '-' + item.name\"\n            [name]=\"control.formControlName\"\n            [value]=\"item.code\"\n            [formControlName]=\"control.formControlName\"\n            [ngClass]=\"\n              classValidate(\n                listFormGroup.controls[control.formControlName],\n                submitted\n              )\n            \"\n            (onClick)=\"\n              control.onClick\n                ? control.onClick($event, control.formControlName)\n                : ''\n            \"\n          />\n          <label\n            [for]=\"control.formControlName + '-' + item.name\"\n            class=\"ml-2\"\n            >{{ item.name }}</label\n          >\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n" }]
        }], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaFormMultiSelectComponent {
    listFormGroup;
    control;
    submitted = false;
    isRequired = isRequired;
    classValidate = classValidate;
    ngOnInit() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormMultiSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormMultiSelectComponent, isStandalone: true, selector: "pla-form-multi-select", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted" }, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel class=\"h-full\" variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-multiselect\n      [showToggleAll]=\"!control.disableToggleAll\"\n      [inputId]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [display]=\"control.display || 'comma'\"\n      [maxSelectedLabels]=\"control.maxSelectedLabels || null\"\n      selectedItemsLabel=\"{0} items selected\"\n      [filter]=\"true\"\n      appendTo=\"body\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"control.data || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      class=\"w-full h-full\"\n      [optionDisabled]=\"'disabled'\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName)\n          : ''\n      \"\n    >\n    </p-multiselect>\n    <label [for]=\"control.formControlName\">\n      {{ control.label }}\n      <span *ngIf=\"isRequired(control.formControlName, listFormGroup)\">*</span>\n    </label>\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: MultiSelectModule }, { kind: "component", type: i4$3.MultiSelect, selector: "p-multiSelect, p-multiselect, p-multi-select", inputs: ["id", "ariaLabel", "style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "fluid", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "variant", "appendTo", "dataKey", "name", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "chipIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "filterBy", "scrollHeight", "lazy", "virtualScroll", "loading", "virtualScrollItemSize", "loadingIcon", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "size", "showClear", "autofocus", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "defaultLabel", "placeholder", "options", "filterValue", "itemSize", "selectAll", "focusOnHover", "filterFields", "selectOnFocus", "autoOptionFocus"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide", "onLazyLoad", "onRemove", "onSelectAllChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormMultiSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-multi-select', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        MultiSelectModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel class=\"h-full\" variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-multiselect\n      [showToggleAll]=\"!control.disableToggleAll\"\n      [inputId]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [display]=\"control.display || 'comma'\"\n      [maxSelectedLabels]=\"control.maxSelectedLabels || null\"\n      selectedItemsLabel=\"{0} items selected\"\n      [filter]=\"true\"\n      appendTo=\"body\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"control.data || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      class=\"w-full h-full\"\n      [optionDisabled]=\"'disabled'\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName)\n          : ''\n      \"\n    >\n    </p-multiselect>\n    <label [for]=\"control.formControlName\">\n      {{ control.label }}\n      <span *ngIf=\"isRequired(control.formControlName, listFormGroup)\">*</span>\n    </label>\n  </p-floatlabel>\n</ng-container>\n" }]
        }], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
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

class PlaFormErrorMessageComponent {
    listFormGroup;
    control;
    submitted = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormErrorMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaFormErrorMessageComponent, isStandalone: true, selector: "pla-form-error-message", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted" }, ngImport: i0, template: "<!-- Error Message Section -->\n@if (control.formControlName) {\n<div class=\"text-left mt-0\">\n  <!-- Required -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['required'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n    id=\"{{ control.formControlName }}Required\"\n  >\n    {{ \"REQUIRED\" | plaMessage }}</p-message\n  >\n\n  <!-- MAX -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}max\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['max'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MAXVALUE\" | plaMessage : { maxValue: listFormGroup.get(control.formControlName)?.errors?.['max'].max } }}\n    {{ listFormGroup.get(control.formControlName)?.errors?.['max'].message }}</p-message\n  >\n\n  <!-- MIN -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}min\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['min'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MINVALUE\" | plaMessage : { minValue: listFormGroup.get(control.formControlName)?.errors?.['min'].min } }}\n    {{ listFormGroup.get(control.formControlName)?.errors?.['min'].message }}</p-message\n  >\n\n  <!--  Error from custom validator -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}errorMessage\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['errorMessage']  && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ listFormGroup.get(control.formControlName)?.errors?.['errorMessage'].message }}</p-message\n  >\n\n  <!-- <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}asciiOnly\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['asciiOnly'] === true && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ control?.msgCustom }}</p-message\n  > -->\n\n  <!-- Not allow available data -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}valueNotAllowed\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ listFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'].value }}\n            is already in use.</p-message\n          > -->\n\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}upperCaseEnOnly\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'].message }}</p-message\n          > -->\n  <!-- {{listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] | json}} -->\n  <!-- MESSAGE REQUIRED -->\n\n  <!-- MESSAGE MIN LENGTH -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!listFormGroup.get(control.formControlName)?.errors?.['pattern'] && listFormGroup.get(control.formControlName)?.errors?.['minlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Minlength\"\n          >\n            {{ \"MINIMUM\" | plaMessage : { max: control?.max } }}</p-message\n          > -->\n\n  <!-- MESSAGE MAX LENGTH -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!listFormGroup.get(control.formControlName)?.errors?.['pattern'] && listFormGroup.get(control.formControlName)?.errors?.['maxlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Maxlength\"\n          >\n            {{ \"MAXIMUM\" | plaMessage : { min: control?.min } }}</p-message\n          > -->\n  <!-- RANGE PATTEN -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !listFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              (\n                listFormGroup.get(control.formControlName)?.errors?.['minTooHigh'] ||\n                listFormGroup.get(control.formControlName)?.errors?.['maxTooLow']\n              ) &&\n              (listFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-validator\"\n          >\n            {{\n              \"RANGE\" | plaMessage : { range: control.rangeLabel }\n            }}</p-message\n          > -->\n\n  <!-- RANGE REQUIRED PATTEN -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !listFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              !listFormGroup.get(control.formControlName)?.errors?.['required'] &&\n              (\n                listFormGroup.get(control.formControlName)?.errors?.['minRequired'] ||\n                listFormGroup.get(control.formControlName)?.errors?.['maxRequired']\n              ) &&\n              (listFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-required-validator\"\n          >\n            {{ \"REQUIRED\" | plaMessage }}</p-message\n          > -->\n\n  <!-- MESSAGE PATTEN -->\n\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}Pattern\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['pattern'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{\n              \"PATTERN\" | plaMessage : { pattern: control?.msgCustom }\n            }}</p-message\n          > -->\n</div>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: Message, selector: "p-message", inputs: ["severity", "text", "escape", "style", "styleClass", "closable", "icon", "closeIcon", "life", "showTransitionOptions", "hideTransitionOptions", "size", "variant"], outputs: ["onClose"] }, { kind: "pipe", type: PlaMessageMappingPipe, name: "plaMessage" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormErrorMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-error-message', imports: [CommonModule, Message, PlaMessageMappingPipe], template: "<!-- Error Message Section -->\n@if (control.formControlName) {\n<div class=\"text-left mt-0\">\n  <!-- Required -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['required'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n    id=\"{{ control.formControlName }}Required\"\n  >\n    {{ \"REQUIRED\" | plaMessage }}</p-message\n  >\n\n  <!-- MAX -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}max\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['max'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MAXVALUE\" | plaMessage : { maxValue: listFormGroup.get(control.formControlName)?.errors?.['max'].max } }}\n    {{ listFormGroup.get(control.formControlName)?.errors?.['max'].message }}</p-message\n  >\n\n  <!-- MIN -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}min\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['min'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MINVALUE\" | plaMessage : { minValue: listFormGroup.get(control.formControlName)?.errors?.['min'].min } }}\n    {{ listFormGroup.get(control.formControlName)?.errors?.['min'].message }}</p-message\n  >\n\n  <!--  Error from custom validator -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}errorMessage\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['errorMessage']  && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ listFormGroup.get(control.formControlName)?.errors?.['errorMessage'].message }}</p-message\n  >\n\n  <!-- <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}asciiOnly\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['asciiOnly'] === true && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ control?.msgCustom }}</p-message\n  > -->\n\n  <!-- Not allow available data -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}valueNotAllowed\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ listFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'].value }}\n            is already in use.</p-message\n          > -->\n\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}upperCaseEnOnly\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'].message }}</p-message\n          > -->\n  <!-- {{listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] | json}} -->\n  <!-- MESSAGE REQUIRED -->\n\n  <!-- MESSAGE MIN LENGTH -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!listFormGroup.get(control.formControlName)?.errors?.['pattern'] && listFormGroup.get(control.formControlName)?.errors?.['minlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Minlength\"\n          >\n            {{ \"MINIMUM\" | plaMessage : { max: control?.max } }}</p-message\n          > -->\n\n  <!-- MESSAGE MAX LENGTH -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!listFormGroup.get(control.formControlName)?.errors?.['pattern'] && listFormGroup.get(control.formControlName)?.errors?.['maxlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Maxlength\"\n          >\n            {{ \"MAXIMUM\" | plaMessage : { min: control?.min } }}</p-message\n          > -->\n  <!-- RANGE PATTEN -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !listFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              (\n                listFormGroup.get(control.formControlName)?.errors?.['minTooHigh'] ||\n                listFormGroup.get(control.formControlName)?.errors?.['maxTooLow']\n              ) &&\n              (listFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-validator\"\n          >\n            {{\n              \"RANGE\" | plaMessage : { range: control.rangeLabel }\n            }}</p-message\n          > -->\n\n  <!-- RANGE REQUIRED PATTEN -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !listFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              !listFormGroup.get(control.formControlName)?.errors?.['required'] &&\n              (\n                listFormGroup.get(control.formControlName)?.errors?.['minRequired'] ||\n                listFormGroup.get(control.formControlName)?.errors?.['maxRequired']\n              ) &&\n              (listFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-required-validator\"\n          >\n            {{ \"REQUIRED\" | plaMessage }}</p-message\n          > -->\n\n  <!-- MESSAGE PATTEN -->\n\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}Pattern\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['pattern'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{\n              \"PATTERN\" | plaMessage : { pattern: control?.msgCustom }\n            }}</p-message\n          > -->\n</div>\n}\n" }]
        }], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaFormDatePickerComponent {
    listFormGroup;
    control;
    submitted = false;
    isRequired = isRequired;
    classValidate = classValidate;
    ngOnInit() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormDatePickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormDatePickerComponent, isStandalone: true, selector: "pla-form-date-picker", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted" }, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel class=\"h-full\" variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-datepicker\n      appendTo=\"body\"\n      [inputId]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [placeholder]=\"control.placeholder\"\n      showIcon\n      [dateFormat]=\"control.dateFormat || 'dd-mm-yy'\"\n      [showTime]=\"control.showTime || false\"\n      [hourFormat]=\"control.hourFormat || '24'\"\n      [showButtonBar]=\"control.showButtonBar || false\"\n      [minDate]=\"\n        control.minDate ? listFormGroup.get(control.minDate)?.value : null\n      \"\n      [maxDate]=\"\n        control.maxDate ? listFormGroup.get(control.maxDate)?.value : null\n      \"\n      [selectionMode]=\"control.selectionMode || 'single'\"\n      [readonlyInput]=\"control.readonlyInput || false\"\n      [fluid]=\"control.fluid || true\"\n      iconDisplay=\"input\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n    />\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\">*</span></label\n    >\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: DatePickerModule }, { kind: "component", type: i4$4.DatePicker, selector: "p-datePicker, p-datepicker, p-date-picker", inputs: ["iconDisplay", "style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "ariaLabel", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "fluid", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "startWeekFromFirstDayOfYear", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autofocus", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "variant", "size", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale", "view", "defaultDate"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-date-picker', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        DatePickerModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel class=\"h-full\" variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-datepicker\n      appendTo=\"body\"\n      [inputId]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [placeholder]=\"control.placeholder\"\n      showIcon\n      [dateFormat]=\"control.dateFormat || 'dd-mm-yy'\"\n      [showTime]=\"control.showTime || false\"\n      [hourFormat]=\"control.hourFormat || '24'\"\n      [showButtonBar]=\"control.showButtonBar || false\"\n      [minDate]=\"\n        control.minDate ? listFormGroup.get(control.minDate)?.value : null\n      \"\n      [maxDate]=\"\n        control.maxDate ? listFormGroup.get(control.maxDate)?.value : null\n      \"\n      [selectionMode]=\"control.selectionMode || 'single'\"\n      [readonlyInput]=\"control.readonlyInput || false\"\n      [fluid]=\"control.fluid || true\"\n      iconDisplay=\"input\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n    />\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\">*</span></label\n    >\n  </p-floatlabel>\n</ng-container>\n" }]
        }], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaFormToggleSwitchComponent {
    listFormGroup;
    control;
    submitted = false;
    isRequired = isRequired;
    classValidate = classValidate;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormToggleSwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormToggleSwitchComponent, isStandalone: true, selector: "pla-form-toggle-switch", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted" }, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <ng-container *ngIf=\"control.formControlName\">\n    <div\n      class=\"flex flex-wrap gap-3 align-items-center justify-content-between w-full\"\n    >\n      <div class=\"flex flex-wrap gap-3 radio-button-type\">\n        <p-toggleswitch\n          [inputId]=\"control.formControlName\"\n          [formControlName]=\"control.formControlName\"\n          [disabled]=\"control.disabled || false\"\n          [trueValue]=\"control.trueValue || true\"\n          [falseValue]=\"control.falseValue || false\"\n          [ngClass]=\"\n            classValidate(\n              listFormGroup.controls[control.formControlName],\n              submitted\n            )\n          \"\n          (onClick)=\"\n            control.onClick\n              ? control.onClick($event, control.formControlName)\n              : ''\n          \"\n        />\n        <label [for]=\"control.formControlName\" class=\"ml-2\">{{\n          control.label\n        }}</label>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "ngmodule", type: ToggleSwitchModule }, { kind: "component", type: i3$3.ToggleSwitch, selector: "p-toggleswitch, p-toggleSwitch, p-toggle-switch", inputs: ["style", "styleClass", "tabindex", "inputId", "name", "disabled", "readonly", "trueValue", "falseValue", "ariaLabel", "ariaLabelledBy", "autofocus"], outputs: ["onChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormToggleSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-toggle-switch', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        ToggleSwitchModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <ng-container *ngIf=\"control.formControlName\">\n    <div\n      class=\"flex flex-wrap gap-3 align-items-center justify-content-between w-full\"\n    >\n      <div class=\"flex flex-wrap gap-3 radio-button-type\">\n        <p-toggleswitch\n          [inputId]=\"control.formControlName\"\n          [formControlName]=\"control.formControlName\"\n          [disabled]=\"control.disabled || false\"\n          [trueValue]=\"control.trueValue || true\"\n          [falseValue]=\"control.falseValue || false\"\n          [ngClass]=\"\n            classValidate(\n              listFormGroup.controls[control.formControlName],\n              submitted\n            )\n          \"\n          (onClick)=\"\n            control.onClick\n              ? control.onClick($event, control.formControlName)\n              : ''\n          \"\n        />\n        <label [for]=\"control.formControlName\" class=\"ml-2\">{{\n          control.label\n        }}</label>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n" }]
        }], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaFormInputGroupComponent {
    listFormGroup;
    control;
    submitted = false;
    index = null; // For Input form array only
    isRequired = isRequired;
    classValidate = classValidate;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaFormInputGroupComponent, isStandalone: true, selector: "pla-form-input-group", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted", index: "index" }, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  @if (control.formControlName) {\n  <p-floatlabel variant=\"in\">\n    <p-iconfield>\n      <div class=\"relative w-full\">\n        <p-inputNumber\n          class=\"w-full pr-24\"\n          [inputId]=\"control.formControlName\"\n          [name]=\"control.formControlName\"\n          [formControlName]=\"control.formControlName\"\n          [min]=\"control?.min || 0\"\n          [ngClass]=\"\n            classValidate(\n              listFormGroup.controls[control.formControlName],\n              submitted\n            )\n          \"\n        />\n\n        <p-selectbutton\n          [id]=\"control.subFormControlName\"\n          class=\"select-button\"\n          [ngClass]=\"{\n            'cursor-not-allowed':\n              listFormGroup.controls[control.subFormControlName].disabled\n          }\"\n          *ngIf=\"control.subFormControlName && !control.isViewMode\"\n          [formControlName]=\"control.subFormControlName\"\n          [options]=\"control.data\"\n          [optionLabel]=\"control.optionLabel || 'name'\"\n          [optionValue]=\"control.optionValue || 'code'\"\n          aria-labelledby=\"basic\"\n          (onOptionClick)=\"\n            control.onClick\n              ? control.onClick(\n                  listFormGroup.controls[control.subFormControlName].value,\n                  index\n                )\n              : ''\n          \"\n        >\n          <ng-template pTemplate=\"item\" let-option let-i=\"index\">\n            <div\n              class=\"p-button-label\"\n              [attr.data-id]=\"control.subFormControlName + '-' + i\"\n            >\n              {{ option[control.optionLabel || \"name\"] }}\n            </div>\n          </ng-template>\n        </p-selectbutton>\n      </div>\n    </p-iconfield>\n\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\">*</span></label\n    >\n  </p-floatlabel>\n  }\n</ng-container>\n", styles: [".select-button{position:absolute;top:50%;right:.5rem;transform:translateY(-50%);z-index:1;padding:.0125rem 0rem;border-radius:.4625rem;box-shadow:0 5.8px 11.6px #e5e5e533}.select-text{position:absolute;top:50%;right:1.25rem;transform:translateY(-50%);z-index:1;color:var(--p-inputtext-disabled-color)}.cursor-not-allowed{cursor:not-allowed!important}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "directive", type: i4$5.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "ngmodule", type: IconFieldModule }, { kind: "component", type: i4$1.IconField, selector: "p-iconfield, p-iconField, p-icon-field", inputs: ["iconPosition", "styleClass"] }, { kind: "ngmodule", type: InputNumberModule }, { kind: "component", type: i5$1.InputNumber, selector: "p-inputNumber, p-inputnumber, p-input-number", inputs: ["showButtons", "format", "buttonLayout", "inputId", "styleClass", "style", "placeholder", "size", "maxlength", "tabindex", "title", "ariaLabelledBy", "ariaLabel", "ariaRequired", "name", "required", "autocomplete", "min", "max", "incrementButtonClass", "decrementButtonClass", "incrementButtonIcon", "decrementButtonIcon", "readonly", "step", "allowEmpty", "locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "variant", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "inputStyle", "inputStyleClass", "showClear", "autofocus", "disabled", "fluid"], outputs: ["onInput", "onFocus", "onBlur", "onKeyDown", "onClear"] }, { kind: "component", type: SelectButton, selector: "p-selectButton, p-selectbutton, p-select-button", inputs: ["options", "optionLabel", "optionValue", "optionDisabled", "unselectable", "tabindex", "multiple", "allowEmpty", "style", "styleClass", "ariaLabelledBy", "size", "disabled", "dataKey", "autofocus"], outputs: ["onOptionClick", "onChange"] }, { kind: "ngmodule", type: ButtonModule }, { kind: "ngmodule", type: ToggleButtonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-input-group', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        FloatLabelModule,
                        IconFieldModule,
                        InputNumberModule,
                        SelectButton,
                        ButtonModule,
                        ToggleButtonModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  @if (control.formControlName) {\n  <p-floatlabel variant=\"in\">\n    <p-iconfield>\n      <div class=\"relative w-full\">\n        <p-inputNumber\n          class=\"w-full pr-24\"\n          [inputId]=\"control.formControlName\"\n          [name]=\"control.formControlName\"\n          [formControlName]=\"control.formControlName\"\n          [min]=\"control?.min || 0\"\n          [ngClass]=\"\n            classValidate(\n              listFormGroup.controls[control.formControlName],\n              submitted\n            )\n          \"\n        />\n\n        <p-selectbutton\n          [id]=\"control.subFormControlName\"\n          class=\"select-button\"\n          [ngClass]=\"{\n            'cursor-not-allowed':\n              listFormGroup.controls[control.subFormControlName].disabled\n          }\"\n          *ngIf=\"control.subFormControlName && !control.isViewMode\"\n          [formControlName]=\"control.subFormControlName\"\n          [options]=\"control.data\"\n          [optionLabel]=\"control.optionLabel || 'name'\"\n          [optionValue]=\"control.optionValue || 'code'\"\n          aria-labelledby=\"basic\"\n          (onOptionClick)=\"\n            control.onClick\n              ? control.onClick(\n                  listFormGroup.controls[control.subFormControlName].value,\n                  index\n                )\n              : ''\n          \"\n        >\n          <ng-template pTemplate=\"item\" let-option let-i=\"index\">\n            <div\n              class=\"p-button-label\"\n              [attr.data-id]=\"control.subFormControlName + '-' + i\"\n            >\n              {{ option[control.optionLabel || \"name\"] }}\n            </div>\n          </ng-template>\n        </p-selectbutton>\n      </div>\n    </p-iconfield>\n\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\">*</span></label\n    >\n  </p-floatlabel>\n  }\n</ng-container>\n", styles: [".select-button{position:absolute;top:50%;right:.5rem;transform:translateY(-50%);z-index:1;padding:.0125rem 0rem;border-radius:.4625rem;box-shadow:0 5.8px 11.6px #e5e5e533}.select-text{position:absolute;top:50%;right:1.25rem;transform:translateY(-50%);z-index:1;color:var(--p-inputtext-disabled-color)}.cursor-not-allowed{cursor:not-allowed!important}\n"] }]
        }], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }], index: [{
                type: Input
            }] } });

class PlaFormSelectObsComponent {
    listFormGroup;
    control;
    submitted = false;
    isRequired = isRequired;
    classValidate = classValidate;
    ngOnInit() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormSelectObsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormSelectObsComponent, isStandalone: true, selector: "pla-form-select-obs", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted" }, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-select\n      [inputId]=\"control.formControlName\"\n      [attr.name]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      appendTo=\"body\"\n      [id]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"(control.data$ | async) || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      [loading]=\"control.loading\"\n      class=\"w-full\"\n      [showClear]=\"control.clear || false\"\n      [filter]=\"control.filter || false\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName)\n          : ''\n      \"\n      (onHide)=\"\n        control.onHide ? control.onHide($event, control.formControlName) : ''\n      \"\n    >\n      <ng-template #emptyfilter>\n        <span>Not found</span>\n      </ng-template>\n    </p-select>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1$1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: SelectModule }, { kind: "component", type: i4.Select, selector: "p-select", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "loadingIcon", "filterPlaceholder", "filterLocale", "variant", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "checkmark", "dropdownIcon", "loading", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "size", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "fluid", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormSelectObsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-select-obs', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        SelectModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-select\n      [inputId]=\"control.formControlName\"\n      [attr.name]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      appendTo=\"body\"\n      [id]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"(control.data$ | async) || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      [loading]=\"control.loading\"\n      class=\"w-full\"\n      [showClear]=\"control.clear || false\"\n      [filter]=\"control.filter || false\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName)\n          : ''\n      \"\n      (onHide)=\"\n        control.onHide ? control.onHide($event, control.formControlName) : ''\n      \"\n    >\n      <ng-template #emptyfilter>\n        <span>Not found</span>\n      </ng-template>\n    </p-select>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n" }]
        }], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], control: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaDynamicForm {
    listFormGroup;
    listFormDesign = [];
    submitted = false;
    loading = false;
    index = null; // For Input form array only
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaDynamicForm, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaDynamicForm, isStandalone: true, selector: "pla-dynamic-form", inputs: { listFormGroup: "listFormGroup", listFormDesign: "listFormDesign", submitted: "submitted", loading: "loading", index: "index" }, ngImport: i0, template: "<form class=\"grid w-full m-0\">\n  <ng-container *ngFor=\"let control of listFormDesign\">\n    <div\n      *ngIf=\"!control?.hidden\"\n      class=\"{{ control?.class || 'row' }}\"\n      [attr.data-type]=\"control?.type\"\n    >\n      <ng-container\n        *ngIf=\"!loading || control?.type === 'empty'; else loadingTemplate\"\n      >\n        <ng-container [ngSwitch]=\"control?.type\">\n          <!-- EMPTY -->\n          <div *ngSwitchCase=\"'empty'\" class=\"w-full\"></div>\n\n          <!-- INPUT TEXT -->\n          <div *ngSwitchCase=\"'text'\">\n            <pla-form-input-text\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- INPUT NUMBER -->\n          <div *ngSwitchCase=\"'number'\">\n            <pla-form-input-number\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- TEXTAREA -->\n          <div *ngSwitchCase=\"'textarea'\">\n            <pla-form-text-area\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- SELECT -->\n          <div class=\"w-full\" *ngSwitchCase=\"'select'\">\n            <pla-form-select\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- SELECT OBS -->\n          <div class=\"w-full\" *ngSwitchCase=\"'select-obs'\">\n            <pla-form-select-obs\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- MULTI-SELECT -->\n          <div class=\"h-full\" *ngSwitchCase=\"'multiselect'\">\n            <pla-form-multi-select\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- RADIO -->\n          <div *ngSwitchCase=\"'radio'\">\n            <pla-form-radio\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- CHECKBOX -->\n          <div *ngSwitchCase=\"'checkbox'\">\n            <pla-form-checkbox\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- DATE PICKER -->\n          <div *ngSwitchCase=\"'datepicker'\">\n            <pla-form-date-picker\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- TOGGLE SWITCH -->\n          <div *ngSwitchCase=\"'toggleswitch'\">\n            <pla-form-toggle-switch\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- INPUT GROUP NUMBER -->\n          <div *ngSwitchCase=\"'input-group'\">\n            <pla-form-input-group\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n              [index]=\"index\"\n            />\n          </div>\n\n          <pla-form-error-message\n            [control]=\"control\"\n            [listFormGroup]=\"listFormGroup\"\n            [submitted]=\"submitted\"\n          />\n\n          <!-- Input Group -->\n          <!-- <div *ngSwitchCase=\"'input-group'\">\n              <p-floatlabel variant=\"in\">\n                <p-iconfield>\n                  <div class=\"relative w-full\">\n                    <p-inputNumber\n                      class=\"w-full pr-24\"\n                      [inputId]=\"control.formControlName\"\n                      [name]=\"control.formControlName\"\n                      [formControlName]=\"control.formControlName\"\n                      [min]=\"control?.min || 0\"\n                      [ngClass]=\"\n                        classValidate(\n                          lisFormGroup.controls[control.formControlName],\n                          submitted\n                        )\n                      \"\n                    />\n                    <div class=\"select-text\" *ngIf=\"control.isViewMode\">\n                      {{\n                        getSelectedValue(\n                          control.data,\n                          lisFormGroup.controls[control.subFormControlName]\n                            .value\n                        )\n                      }}\n                    </div>\n\n                    <p-selectbutton\n                      class=\"select-button\"\n                      [ngClass]=\"{\n                        'cursor-not-allowed':\n                          lisFormGroup.controls[control.subFormControlName]\n                            .disabled\n                      }\"\n                      *ngIf=\"control.subFormControlName && !control.isViewMode\"\n                      [formControlName]=\"control.subFormControlName\"\n                      [options]=\"control.data\"\n                      [optionLabel]=\"control.optionLabel || 'name'\"\n                      [optionValue]=\"control.optionValue || 'code'\"\n                      aria-labelledby=\"basic\"\n                      (click)=\"\n                        control?.onClick\n                          ? control.onClick(\n                              lisFormGroup.controls[control.subFormControlName]\n                                .value\n                            )\n                          : ''\n                      \"\n                    />\n                  </div>\n                </p-iconfield>\n\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n          <!-- SELECT BUTTON -->\n          <!-- <div *ngSwitchCase=\"'select-button'\">\n              <p-selectbutton\n                [formControlName]=\"control.formControlName\"\n                [options]=\"control.data\"\n                [optionLabel]=\"control.optionLabel || 'name'\"\n                [optionValue]=\"control.optionValue || 'code'\"\n                aria-labelledby=\"basic\"\n                (onClick)=\"\n                  control?.onClick\n                    ? control.onClick($event, control.formControlName)\n                    : ''\n                \"\n              />\n            </div> -->\n\n          <!-- DATEPICKER -->\n          <!-- <div *ngSwitchCase=\"'datepicker'\">\n              <p-floatlabel variant=\"in\">\n                <p-datepicker\n                  appendTo=\"body\"\n                  [inputId]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [formControlName]=\"control.formControlName\"\n                  [placeholder]=\"control.placeholder\"\n                  showIcon\n                  [dateFormat]=\"control.dateFormat || 'dd-mm-yy'\"\n                  [showTime]=\"control.showTime || false\"\n                  [hourFormat]=\"control.hourFormat || '24'\"\n                  [showButtonBar]=\"control.showButtonBar || false\"\n                  [minDate]=\"lisFormGroup.get(control.minDate)?.value || null\"\n                  [maxDate]=\"lisFormGroup.get(control.maxDate)?.value || null\"\n                  [selectionMode]=\"control.selectionMode || 'single'\"\n                  [readonlyInput]=\"control.readonlyInput || false\"\n                  [fluid]=\"control.fluid || true\"\n                  iconDisplay=\"input\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n          <!-- DROPDOWN AUTO-COMPLETE -->\n          <!-- <div *ngSwitchCase=\"'dropdown'\">\n              <p-floatlabel variant=\"in\">\n                <p-autocomplete\n                  [inputId]=\"control.formControlName\"\n                  [attr.name]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  appendTo=\"body\"\n                  [formControlName]=\"control.formControlName\"\n                  [inputId]=\"control.formControlName\"\n                  optionLabel=\"name\"\n                  optionValue=\"code\"\n                  [dropdown]=\"true\"\n                  [suggestions]=\"options || []\"\n                  class=\"w-full\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                  (completeMethod)=\"\n                    control?.completeMethod\n                      ? control.completeMethod($event)\n                      : ''\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n        </ng-container>\n      </ng-container>\n      <ng-template #loadingTemplate>\n        <p-skeleton width=\"100%\" borderRadius=\"1rem\" />\n      </ng-template>\n    </div>\n  </ng-container>\n</form>\n", styles: ["input[readonly]{background-color:#e6e6e6;color:#666;cursor:not-allowed;border:1px solid #ccc}h6{white-space:normal;text-wrap:auto;word-break:normal}.group-checkbox-container{border-radius:10px;border:1px solid #e6e6e6;background:#fff;padding:30px}.checkbox-item{border-radius:10px;border:1px solid #e6e6e6;background:#fff;padding:14px}.input-group-number .p-select{height:2rem!important;padding:0 .25rem;width:auto;max-width:100%}.input-group-number ::ng-deep .p-select-label{padding:0!important}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "component", type: PlaFormInputTextComponent, selector: "pla-form-input-text", inputs: ["control", "listFormGroup", "formControl", "submitted"], outputs: ["valueChange"] }, { kind: "component", type: PlaFormInputNumberComponent, selector: "pla-form-input-number", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "component", type: PlaFormTextAreaComponent, selector: "pla-form-text-area", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "component", type: PlaFormMultiSelectComponent, selector: "pla-form-multi-select", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "component", type: PlaFormSelectComponent, selector: "pla-form-select", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "component", type: PlaFormSelectObsComponent, selector: "pla-form-select-obs", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "component", type: PlaFormRadioComponent, selector: "pla-form-radio", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "component", type: PlaFormCheckboxComponent, selector: "pla-form-checkbox", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "component", type: PlaFormDatePickerComponent, selector: "pla-form-date-picker", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "component", type: PlaFormToggleSwitchComponent, selector: "pla-form-toggle-switch", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "component", type: PlaFormInputGroupComponent, selector: "pla-form-input-group", inputs: ["listFormGroup", "control", "submitted", "index"] }, { kind: "component", type: PlaFormErrorMessageComponent, selector: "pla-form-error-message", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "ngmodule", type: SkeletonModule }, { kind: "component", type: i3$4.Skeleton, selector: "p-skeleton", inputs: ["styleClass", "style", "shape", "animation", "borderRadius", "size", "width", "height"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaDynamicForm, decorators: [{
            type: Component,
            args: [{ selector: 'pla-dynamic-form', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        PlaFormInputTextComponent,
                        PlaFormInputNumberComponent,
                        PlaFormTextAreaComponent,
                        PlaFormMultiSelectComponent,
                        PlaFormSelectComponent,
                        PlaFormSelectObsComponent,
                        PlaFormRadioComponent,
                        PlaFormCheckboxComponent,
                        PlaFormDatePickerComponent,
                        PlaFormToggleSwitchComponent,
                        PlaFormInputGroupComponent,
                        PlaFormErrorMessageComponent,
                        SkeletonModule,
                    ], standalone: true, template: "<form class=\"grid w-full m-0\">\n  <ng-container *ngFor=\"let control of listFormDesign\">\n    <div\n      *ngIf=\"!control?.hidden\"\n      class=\"{{ control?.class || 'row' }}\"\n      [attr.data-type]=\"control?.type\"\n    >\n      <ng-container\n        *ngIf=\"!loading || control?.type === 'empty'; else loadingTemplate\"\n      >\n        <ng-container [ngSwitch]=\"control?.type\">\n          <!-- EMPTY -->\n          <div *ngSwitchCase=\"'empty'\" class=\"w-full\"></div>\n\n          <!-- INPUT TEXT -->\n          <div *ngSwitchCase=\"'text'\">\n            <pla-form-input-text\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- INPUT NUMBER -->\n          <div *ngSwitchCase=\"'number'\">\n            <pla-form-input-number\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- TEXTAREA -->\n          <div *ngSwitchCase=\"'textarea'\">\n            <pla-form-text-area\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- SELECT -->\n          <div class=\"w-full\" *ngSwitchCase=\"'select'\">\n            <pla-form-select\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- SELECT OBS -->\n          <div class=\"w-full\" *ngSwitchCase=\"'select-obs'\">\n            <pla-form-select-obs\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- MULTI-SELECT -->\n          <div class=\"h-full\" *ngSwitchCase=\"'multiselect'\">\n            <pla-form-multi-select\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- RADIO -->\n          <div *ngSwitchCase=\"'radio'\">\n            <pla-form-radio\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- CHECKBOX -->\n          <div *ngSwitchCase=\"'checkbox'\">\n            <pla-form-checkbox\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- DATE PICKER -->\n          <div *ngSwitchCase=\"'datepicker'\">\n            <pla-form-date-picker\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- TOGGLE SWITCH -->\n          <div *ngSwitchCase=\"'toggleswitch'\">\n            <pla-form-toggle-switch\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- INPUT GROUP NUMBER -->\n          <div *ngSwitchCase=\"'input-group'\">\n            <pla-form-input-group\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n              [index]=\"index\"\n            />\n          </div>\n\n          <pla-form-error-message\n            [control]=\"control\"\n            [listFormGroup]=\"listFormGroup\"\n            [submitted]=\"submitted\"\n          />\n\n          <!-- Input Group -->\n          <!-- <div *ngSwitchCase=\"'input-group'\">\n              <p-floatlabel variant=\"in\">\n                <p-iconfield>\n                  <div class=\"relative w-full\">\n                    <p-inputNumber\n                      class=\"w-full pr-24\"\n                      [inputId]=\"control.formControlName\"\n                      [name]=\"control.formControlName\"\n                      [formControlName]=\"control.formControlName\"\n                      [min]=\"control?.min || 0\"\n                      [ngClass]=\"\n                        classValidate(\n                          lisFormGroup.controls[control.formControlName],\n                          submitted\n                        )\n                      \"\n                    />\n                    <div class=\"select-text\" *ngIf=\"control.isViewMode\">\n                      {{\n                        getSelectedValue(\n                          control.data,\n                          lisFormGroup.controls[control.subFormControlName]\n                            .value\n                        )\n                      }}\n                    </div>\n\n                    <p-selectbutton\n                      class=\"select-button\"\n                      [ngClass]=\"{\n                        'cursor-not-allowed':\n                          lisFormGroup.controls[control.subFormControlName]\n                            .disabled\n                      }\"\n                      *ngIf=\"control.subFormControlName && !control.isViewMode\"\n                      [formControlName]=\"control.subFormControlName\"\n                      [options]=\"control.data\"\n                      [optionLabel]=\"control.optionLabel || 'name'\"\n                      [optionValue]=\"control.optionValue || 'code'\"\n                      aria-labelledby=\"basic\"\n                      (click)=\"\n                        control?.onClick\n                          ? control.onClick(\n                              lisFormGroup.controls[control.subFormControlName]\n                                .value\n                            )\n                          : ''\n                      \"\n                    />\n                  </div>\n                </p-iconfield>\n\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n          <!-- SELECT BUTTON -->\n          <!-- <div *ngSwitchCase=\"'select-button'\">\n              <p-selectbutton\n                [formControlName]=\"control.formControlName\"\n                [options]=\"control.data\"\n                [optionLabel]=\"control.optionLabel || 'name'\"\n                [optionValue]=\"control.optionValue || 'code'\"\n                aria-labelledby=\"basic\"\n                (onClick)=\"\n                  control?.onClick\n                    ? control.onClick($event, control.formControlName)\n                    : ''\n                \"\n              />\n            </div> -->\n\n          <!-- DATEPICKER -->\n          <!-- <div *ngSwitchCase=\"'datepicker'\">\n              <p-floatlabel variant=\"in\">\n                <p-datepicker\n                  appendTo=\"body\"\n                  [inputId]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [formControlName]=\"control.formControlName\"\n                  [placeholder]=\"control.placeholder\"\n                  showIcon\n                  [dateFormat]=\"control.dateFormat || 'dd-mm-yy'\"\n                  [showTime]=\"control.showTime || false\"\n                  [hourFormat]=\"control.hourFormat || '24'\"\n                  [showButtonBar]=\"control.showButtonBar || false\"\n                  [minDate]=\"lisFormGroup.get(control.minDate)?.value || null\"\n                  [maxDate]=\"lisFormGroup.get(control.maxDate)?.value || null\"\n                  [selectionMode]=\"control.selectionMode || 'single'\"\n                  [readonlyInput]=\"control.readonlyInput || false\"\n                  [fluid]=\"control.fluid || true\"\n                  iconDisplay=\"input\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n          <!-- DROPDOWN AUTO-COMPLETE -->\n          <!-- <div *ngSwitchCase=\"'dropdown'\">\n              <p-floatlabel variant=\"in\">\n                <p-autocomplete\n                  [inputId]=\"control.formControlName\"\n                  [attr.name]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  appendTo=\"body\"\n                  [formControlName]=\"control.formControlName\"\n                  [inputId]=\"control.formControlName\"\n                  optionLabel=\"name\"\n                  optionValue=\"code\"\n                  [dropdown]=\"true\"\n                  [suggestions]=\"options || []\"\n                  class=\"w-full\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                  (completeMethod)=\"\n                    control?.completeMethod\n                      ? control.completeMethod($event)\n                      : ''\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n        </ng-container>\n      </ng-container>\n      <ng-template #loadingTemplate>\n        <p-skeleton width=\"100%\" borderRadius=\"1rem\" />\n      </ng-template>\n    </div>\n  </ng-container>\n</form>\n", styles: ["input[readonly]{background-color:#e6e6e6;color:#666;cursor:not-allowed;border:1px solid #ccc}h6{white-space:normal;text-wrap:auto;word-break:normal}.group-checkbox-container{border-radius:10px;border:1px solid #e6e6e6;background:#fff;padding:30px}.checkbox-item{border-radius:10px;border:1px solid #e6e6e6;background:#fff;padding:14px}.input-group-number .p-select{height:2rem!important;padding:0 .25rem;width:auto;max-width:100%}.input-group-number ::ng-deep .p-select-label{padding:0!important}\n"] }]
        }], ctorParameters: () => [], propDecorators: { listFormGroup: [{
                type: Input,
                args: [{ required: true }]
            }], listFormDesign: [{
                type: Input,
                args: [{ required: true }]
            }], submitted: [{
                type: Input,
                args: [{ required: true }]
            }], loading: [{
                type: Input,
                args: [{ required: true }]
            }], index: [{
                type: Input
            }] } });

class PlaFormInputArrayComponent {
    formBuilder;
    pageState = 'Edit';
    form; // <- parent form
    formArrayName;
    createItemFn;
    formSections = [];
    isSubmitted = false;
    isLoadingPackage = false;
    isSmallScreen = false;
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        const mq = window.matchMedia('(max-width: 768px)');
        this.isSmallScreen = mq.matches;
        mq.addEventListener('change', (e) => (this.isSmallScreen = e.matches));
        if (this.createItemFn && typeof this.createItemFn !== 'function') {
            throw new Error('createItemFn must be a function');
        }
    }
    // Use the parent's FormArray
    get items() {
        return this.form.get(this.formArrayName);
    }
    getNestedFormGroup(i, key) {
        const group = this.items.at(i);
        return group.get(key);
    }
    addItem() {
        const newItem = this.createItemFn
            ? this.createItemFn()
            : this.defaultCreateItem();
        this.items.push(newItem);
    }
    removeItem(index) {
        this.items.removeAt(index);
    }
    // optional fallback if parent doesn't pass createItemFn
    defaultCreateItem() {
        return this.formBuilder.group({});
    }
    onSubmit() {
        console.log(this.form.value);
    }
    getControls() {
        return this.items.controls;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputArrayComponent, deps: [{ token: i2.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaFormInputArrayComponent, isStandalone: true, selector: "pla-form-input-array", inputs: { pageState: "pageState", form: "form", formArrayName: "formArrayName", createItemFn: "createItemFn", formSections: "formSections", isSubmitted: "isSubmitted", isLoadingPackage: "isLoadingPackage" }, ngImport: i0, template: "<!-- Binding parent's form  -->\n<div [formGroup]=\"form\">\n  <div [formArrayName]=\"formArrayName\">\n    @for (item of getControls(); track i; let i = $index) {\n    <div [formGroupName]=\"i\" class=\"flex align-items-center w-full gap-3\">\n      <!-- Dynamic Sections -->\n      <div class=\"w-full flex flex-row flex-wrap py-1 gap-1\">\n        @for (section of formSections; track section.key; let j = $index) {\n        <div class=\"col\">\n          <pla-dynamic-form\n            [index]=\"i\"\n            [listFormDesign]=\"section.design\"\n            [listFormGroup]=\"getNestedFormGroup(i, section.key)\"\n            [submitted]=\"isSubmitted\"\n            [loading]=\"isLoadingPackage\"\n          />\n        </div>\n\n        @if (j < formSections.length - 1) {\n        <p-divider\n          [layout]=\"isSmallScreen ? 'horizontal' : 'vertical'\"\n          class=\"my-4\"\n        />\n        } }\n      </div>\n\n      <!-- Add/Remove Buttons -->\n      <div\n        *ngIf=\"pageState === 'Edit'\"\n        class=\"flex justify-content-between align-items-center gap-3 button-container\"\n      >\n        <p-button\n          [disabled]=\"!i && items.length === i + 1\"\n          icon=\"pi pi-trash\"\n          variant=\"outlined\"\n          severity=\"secondary\"\n          (click)=\"removeItem(i)\"\n        />\n\n        @if (items.length === i + 1) {\n        <p-button\n          icon=\"pi pi-plus\"\n          variant=\"outlined\"\n          severity=\"secondary\"\n          (click)=\"addItem()\"\n        />\n        }\n      </div>\n    </div>\n    }\n  </div>\n</div>\n", styles: [".button-container{min-width:6rem;max-width:7.5rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i2.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "ngmodule", type: DividerModule }, { kind: "component", type: i3$5.Divider, selector: "p-divider", inputs: ["style", "styleClass", "layout", "type", "align"] }, { kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: PlaDynamicForm, selector: "pla-dynamic-form", inputs: ["listFormGroup", "listFormDesign", "submitted", "loading", "index"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputArrayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-input-array', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        DividerModule,
                        ButtonModule,
                        PlaDynamicForm,
                    ], template: "<!-- Binding parent's form  -->\n<div [formGroup]=\"form\">\n  <div [formArrayName]=\"formArrayName\">\n    @for (item of getControls(); track i; let i = $index) {\n    <div [formGroupName]=\"i\" class=\"flex align-items-center w-full gap-3\">\n      <!-- Dynamic Sections -->\n      <div class=\"w-full flex flex-row flex-wrap py-1 gap-1\">\n        @for (section of formSections; track section.key; let j = $index) {\n        <div class=\"col\">\n          <pla-dynamic-form\n            [index]=\"i\"\n            [listFormDesign]=\"section.design\"\n            [listFormGroup]=\"getNestedFormGroup(i, section.key)\"\n            [submitted]=\"isSubmitted\"\n            [loading]=\"isLoadingPackage\"\n          />\n        </div>\n\n        @if (j < formSections.length - 1) {\n        <p-divider\n          [layout]=\"isSmallScreen ? 'horizontal' : 'vertical'\"\n          class=\"my-4\"\n        />\n        } }\n      </div>\n\n      <!-- Add/Remove Buttons -->\n      <div\n        *ngIf=\"pageState === 'Edit'\"\n        class=\"flex justify-content-between align-items-center gap-3 button-container\"\n      >\n        <p-button\n          [disabled]=\"!i && items.length === i + 1\"\n          icon=\"pi pi-trash\"\n          variant=\"outlined\"\n          severity=\"secondary\"\n          (click)=\"removeItem(i)\"\n        />\n\n        @if (items.length === i + 1) {\n        <p-button\n          icon=\"pi pi-plus\"\n          variant=\"outlined\"\n          severity=\"secondary\"\n          (click)=\"addItem()\"\n        />\n        }\n      </div>\n    </div>\n    }\n  </div>\n</div>\n", styles: [".button-container{min-width:6rem;max-width:7.5rem}\n"] }]
        }], ctorParameters: () => [{ type: i2.FormBuilder }], propDecorators: { pageState: [{
                type: Input
            }], form: [{
                type: Input
            }], formArrayName: [{
                type: Input
            }], createItemFn: [{
                type: Input,
                args: [{ required: true }]
            }], formSections: [{
                type: Input,
                args: [{ required: true }]
            }], isSubmitted: [{
                type: Input
            }], isLoadingPackage: [{
                type: Input
            }] } });

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

class PlaDialogComponent {
    visible = false;
    title;
    message;
    icon;
    actionLabel = '';
    width = '450px';
    height = '396px';
    visibleChange = new EventEmitter();
    confirm = new EventEmitter();
    cancel = new EventEmitter();
    onCancel() {
        this.visibleChange.emit(false);
        this.cancel.emit();
    }
    onConfirm() {
        this.confirm.emit();
        this.visibleChange.emit(false);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaDialogComponent, isStandalone: true, selector: "pla-dialog", inputs: { visible: "visible", title: "title", message: "message", icon: "icon", actionLabel: "actionLabel", width: "width", height: "height" }, outputs: { visibleChange: "visibleChange", confirm: "confirm", cancel: "cancel" }, ngImport: i0, template: "<p-dialog [modal]=\"true\" [(visible)]=\"visible\" [style]=\"{ width: width, height: height }\">\n\n  <div class=\"flex flex-column items-center gap-4 mb-4\">\n    <img *ngIf=\"icon\" [src]=\"icon\" alt=\"dialog-icon\" style=\"width: 100px; height: 100px;\" />\n    <h2 *ngIf=\"title\">{{ title }}</h2>\n    <p *ngIf=\"message\">{{ message }}</p>\n  </div>\n\n  <ng-content></ng-content>\n\n  <div class=\"flex flex-row justify-content-center gap-2\">\n    <pla-button-outlined [style]=\"{ width: '150px', height: '50px' }\" label=\"Cancel\"\n      (click)=\"onCancel()\"></pla-button-outlined>\n\n    <pla-button-primary-icon [style]=\"{ width: '150px', height: '50px' }\" [label]=\"actionLabel\"\n      (click)=\"onConfirm()\"></pla-button-primary-icon>\n  </div>\n</p-dialog>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: DialogModule }, { kind: "component", type: i2$1.Dialog, selector: "p-dialog", inputs: ["header", "draggable", "resizable", "positionLeft", "positionTop", "contentStyle", "contentStyleClass", "modal", "closeOnEscape", "dismissableMask", "rtl", "closable", "responsive", "appendTo", "breakpoints", "styleClass", "maskStyleClass", "maskStyle", "showHeader", "breakpoint", "blockScroll", "autoZIndex", "baseZIndex", "minX", "minY", "focusOnShow", "maximizable", "keepInViewport", "focusTrap", "transitionOptions", "closeIcon", "closeAriaLabel", "closeTabindex", "minimizeIcon", "maximizeIcon", "closeButtonProps", "maximizeButtonProps", "visible", "style", "position", "role", "content", "contentTemplate", "footerTemplate", "closeIconTemplate", "maximizeIconTemplate", "minimizeIconTemplate", "headlessTemplate"], outputs: ["onShow", "onHide", "visibleChange", "onResizeInit", "onResizeEnd", "onDragEnd", "onMaximize"] }, { kind: "component", type: PlaButtonOutlinedComponent, selector: "pla-button-outlined", inputs: ["disabled", "label", "icon", "styleClass", "style", "iconPos"], outputs: ["onClick"] }, { kind: "component", type: PlaButtonPrimaryIconComponent, selector: "pla-button-primary-icon", inputs: ["styleClass", "style", "disabled", "label", "icon", "iconPos"], outputs: ["onClick"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-dialog', imports: [CommonModule, DialogModule, PlaButtonOutlinedComponent, PlaButtonPrimaryIconComponent], template: "<p-dialog [modal]=\"true\" [(visible)]=\"visible\" [style]=\"{ width: width, height: height }\">\n\n  <div class=\"flex flex-column items-center gap-4 mb-4\">\n    <img *ngIf=\"icon\" [src]=\"icon\" alt=\"dialog-icon\" style=\"width: 100px; height: 100px;\" />\n    <h2 *ngIf=\"title\">{{ title }}</h2>\n    <p *ngIf=\"message\">{{ message }}</p>\n  </div>\n\n  <ng-content></ng-content>\n\n  <div class=\"flex flex-row justify-content-center gap-2\">\n    <pla-button-outlined [style]=\"{ width: '150px', height: '50px' }\" label=\"Cancel\"\n      (click)=\"onCancel()\"></pla-button-outlined>\n\n    <pla-button-primary-icon [style]=\"{ width: '150px', height: '50px' }\" [label]=\"actionLabel\"\n      (click)=\"onConfirm()\"></pla-button-primary-icon>\n  </div>\n</p-dialog>\n" }]
        }], propDecorators: { visible: [{
                type: Input
            }], title: [{
                type: Input
            }], message: [{
                type: Input
            }], icon: [{
                type: Input
            }], actionLabel: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], confirm: [{
                type: Output
            }], cancel: [{
                type: Output
            }] } });

class PlaStepperComponent {
    activeStep;
    activeIndex;
    stepItems = [];
    formValid;
    showValidationErrors = false;
    activeIndexChange = new EventEmitter();
    constructor() { }
    isStepInvalid(id) {
        if (!this.showValidationErrors)
            return false;
        const found = this.formValid.find((f) => f.id === id);
        return found ? !found.isValid : false;
    }
    onStepClick(activateCallback, index) {
        activateCallback(); // trigger PrimeNG's step activation
        this.activeIndexChange.emit(index);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaStepperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaStepperComponent, isStandalone: true, selector: "pla-stepper", inputs: { activeStep: "activeStep", activeIndex: "activeIndex", stepItems: "stepItems", formValid: "formValid", showValidationErrors: "showValidationErrors" }, outputs: { activeIndexChange: "activeIndexChange" }, ngImport: i0, template: "<p-stepper [(value)]=\"activeStep\" class=\"basis-[50rem]\">\n  <p-step-list>\n    <ng-container *ngFor=\"let item of stepItems; index as i\">\n      <p-step [value]=\"i + 1\" *ngIf=\"item['active']\">\n        <ng-template\n          #content\n          let-activateCallback=\"activateCallback\"\n          let-active=\"active\"\n        >\n          <div class=\"flex align-items-center flex-col items-center gap-2\">\n            <button\n              style=\"width: 3.125rem; height: 3.125rem; border-radius: 3.125rem\"\n              type=\"button\"\n              class=\"flex align-items-center justify-content-center border-none cursor-pointer\"\n              [ngClass]=\"{\n                'button-step-error': isStepInvalid(item.id || ''),\n                'button-step-selected': i === activeIndex,\n                'button-step-active': i <= activeIndex,\n                'button-step-default': i > activeIndex,\n              }\"\n              (click)=\"onStepClick(activateCallback, i)\"\n            >\n              <svg-icon\n                [src]=\"item.icon\"\n                [svgStyle]=\"{\n                        'height.rem': 1.75,\n                        'width.rem': 1.75,\n                      }\"\n              >\n              </svg-icon>\n            </button>\n            <span\n              class=\"p-stepper-title text-sm text-color-secondary text-center cursor-pointer\"\n              [ngClass]=\"{\n                'steps-title-error': isStepInvalid(item.id || ''),\n                'selected-step-title': !isStepInvalid(item.id || '') && i === activeIndex,\n                'steps-title-default': !isStepInvalid(item.id || '') && i !== activeIndex,\n              }\"\n              (click)=\"onStepClick(activateCallback, i)\"\n            >\n              {{ item.label }}\n            </span>\n          </div>\n        </ng-template>\n      </p-step>\n    </ng-container>\n  </p-step-list>\n</p-stepper>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: StepperModule }, { kind: "component", type: i2$2.Stepper, selector: "p-stepper", inputs: ["value", "linear", "transitionOptions"], outputs: ["valueChange"] }, { kind: "component", type: i2$2.StepList, selector: "p-step-list" }, { kind: "component", type: i2$2.Step, selector: "p-step", inputs: ["value", "disabled"], outputs: ["valueChange"] }, { kind: "ngmodule", type: StepsModule }, { kind: "ngmodule", type: AngularSvgIconModule }, { kind: "component", type: i3$6.SvgIconComponent, selector: "svg-icon", inputs: ["src", "name", "stretch", "applyClass", "svgClass", "class", "viewBox", "svgAriaLabel", "onSVGLoaded", "svgStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaStepperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-stepper', imports: [CommonModule, StepperModule, StepsModule, AngularSvgIconModule], template: "<p-stepper [(value)]=\"activeStep\" class=\"basis-[50rem]\">\n  <p-step-list>\n    <ng-container *ngFor=\"let item of stepItems; index as i\">\n      <p-step [value]=\"i + 1\" *ngIf=\"item['active']\">\n        <ng-template\n          #content\n          let-activateCallback=\"activateCallback\"\n          let-active=\"active\"\n        >\n          <div class=\"flex align-items-center flex-col items-center gap-2\">\n            <button\n              style=\"width: 3.125rem; height: 3.125rem; border-radius: 3.125rem\"\n              type=\"button\"\n              class=\"flex align-items-center justify-content-center border-none cursor-pointer\"\n              [ngClass]=\"{\n                'button-step-error': isStepInvalid(item.id || ''),\n                'button-step-selected': i === activeIndex,\n                'button-step-active': i <= activeIndex,\n                'button-step-default': i > activeIndex,\n              }\"\n              (click)=\"onStepClick(activateCallback, i)\"\n            >\n              <svg-icon\n                [src]=\"item.icon\"\n                [svgStyle]=\"{\n                        'height.rem': 1.75,\n                        'width.rem': 1.75,\n                      }\"\n              >\n              </svg-icon>\n            </button>\n            <span\n              class=\"p-stepper-title text-sm text-color-secondary text-center cursor-pointer\"\n              [ngClass]=\"{\n                'steps-title-error': isStepInvalid(item.id || ''),\n                'selected-step-title': !isStepInvalid(item.id || '') && i === activeIndex,\n                'steps-title-default': !isStepInvalid(item.id || '') && i !== activeIndex,\n              }\"\n              (click)=\"onStepClick(activateCallback, i)\"\n            >\n              {{ item.label }}\n            </span>\n          </div>\n        </ng-template>\n      </p-step>\n    </ng-container>\n  </p-step-list>\n</p-stepper>\n" }]
        }], ctorParameters: () => [], propDecorators: { activeStep: [{
                type: Input
            }], activeIndex: [{
                type: Input
            }], stepItems: [{
                type: Input
            }], formValid: [{
                type: Input
            }], showValidationErrors: [{
                type: Input
            }], activeIndexChange: [{
                type: Output
            }] } });

class LoginService {
    http;
    isLoggedInSubject = new BehaviorSubject(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();
    constructor(http) {
        this.http = http;
    }
    refreshToken(uamBaseApiUrl, clientId) {
        const url = uamBaseApiUrl + 'v1/appauth/refresh-token';
        const _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-ClientId': clientId,
            }),
        };
        const payload = {
            SystemId: clientId,
        };
        return this.http.post(url, payload, _httpOptions);
    }
    verifyToken(uamBaseApiUrl, clientId) {
        return this.http
            .post(uamBaseApiUrl + `v1/appauth/app-token`, {
            appId: clientId,
        })
            .pipe(tap((res) => {
            return this.isLoggedInSubject.next(res.data.result.isValid);
        }), catchError((err) => {
            console.log(err);
            return throwError(() => err);
        }));
    }
    checkAuth() {
        return this.isLoggedInSubject.getValue();
    }
    logout(body, uamBaseApiUrl) {
        localStorage.setItem('logout-event', Date.now().toString());
        return this.http.post(uamBaseApiUrl + `v1/appauth/logout`, body);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: LoginService, deps: [{ token: i1$2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: LoginService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: LoginService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$2.HttpClient }] });

class UserProfileService {
    http;
    isLoggedInSubject = new BehaviorSubject(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();
    constructor(http) {
        this.http = http;
    }
    getProfileUam(userName, clientId, uamBaseApiUrl) {
        const data = {
            userName: userName,
            systemId: clientId,
        };
        return this.http.get(uamBaseApiUrl + 'v2/users/get-user-byUsername', { params: data });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: UserProfileService, deps: [{ token: i1$2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: UserProfileService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: UserProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$2.HttpClient }] });

class MSG_MODAL {
    static TITLE_INFORMATION = 'Information';
    static TITLE_SUCCESS = 'Success';
    static TITLE_WARN = 'Warning';
    static TITLE_ERROR = 'Error';
    static TITLE_INFO = 'Info';
    static TITLE_CONFIRM = 'Confirm';
    static TITLE_DELETE = 'Delete';
    static TITLE_INSERT = 'Inserted';
    static TITLE_UPDATE = 'Updated';
    static ICON_SUCCESS = 'success';
    static ICON_WARN = 'warning';
    static ICON_ERROR = 'error';
    static MSG_REQUIRED = 'Some required information is missing, please correct and try again.';
    static MSG_SUCCESSFULLY = 'Successfully';
    static MSG_SUCCESSFULLY_UPDATE = 'Successfully updated';
    static MSG_DELETE = 'Delete selected record, are you sure?';
    static MSG_COUNT = 'The total percentage is not equal to 100.';
    static TITLE_UPDATE_SUCCESS = 'Successfully Update';
    static TITLE_INSERT_SUCCESS = 'Successfully Insert';
    static TITLE_INVALID_INPUT = 'Invalid Input';
    static MSG_CHECK_AGAIN = 'Please check and try again';
    static MSG_INVALID_DUPLICATED_SYSTEM = 'Duplicate system detected. Please check and select a different system.';
    static MSG_INVALID_USER_AD = 'The user information retrieved from Active Directory is incomplete. Please update the required details in Active Directory before processing with user registration.';
}

/**
 * Manages token refresh state and session invalidation to prevent concurrent refresh requests
 * and stop requests when session becomes invalid
 */
class AuthStateService {
    refreshInProgress$ = new BehaviorSubject(false);
    refreshResult$ = new BehaviorSubject(null);
    sessionInvalidated$ = new BehaviorSubject(false);
    get isRefreshing() {
        return this.refreshInProgress$.value;
    }
    get isSessionInvalidated() {
        return this.sessionInvalidated$.value;
    }
    startRefresh() {
        this.refreshInProgress$.next(true);
        this.refreshResult$.next(null);
    }
    completeRefresh(result) {
        this.refreshResult$.next(result);
        this.refreshInProgress$.next(false);
    }
    failRefresh() {
        this.refreshResult$.next(null);
        this.refreshInProgress$.next(false);
    }
    waitForRefresh() {
        return this.refreshResult$.pipe(filter((result) => result !== null), take(1));
    }
    invalidateSession() {
        this.sessionInvalidated$.next(true);
    }
    reset() {
        this.refreshInProgress$.next(false);
        this.refreshResult$.next(null);
        this.sessionInvalidated$.next(false);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AuthStateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AuthStateService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AuthStateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/**
 * Handles error modal display and session management
 */
class ErrorModalService {
    sessionExpiredShown = false;
    authState = inject(AuthStateService);
    showSessionExpired(uamLoginURL, applilcationStorageKey) {
        // Prevent showing multiple session expired modals
        if (this.sessionExpiredShown) {
            return;
        }
        this.authState.invalidateSession();
        this.sessionExpiredShown = true;
        const title = MSG_MODAL.TITLE_CONFIRM;
        const text = 'Your session has expired. Please log in again to continue.';
        Swal.fire({
            html: this.buildModalHtml(title, text),
            confirmButtonText: 'Confirm',
            showLoaderOnConfirm: true,
            buttonsStyling: false,
            customClass: {
                popup: 'custom-swal-popup',
                confirmButton: 'p-button btn-small btn-primary-linear-gradient',
                actions: 'custom-actions-container',
            },
            preConfirm: () => this.createDelay(1000),
        }).then((result) => {
            if (result.isConfirmed) {
                this.handleLogout(uamLoginURL, applilcationStorageKey);
            }
        });
    }
    showError(message) {
        Swal.fire({
            title: MSG_MODAL.TITLE_CONFIRM,
            text: message,
            icon: MSG_MODAL.ICON_WARN,
            showLoaderOnConfirm: true,
            preConfirm: () => this.createDelay(1000),
        });
    }
    buildModalHtml(title, text) {
        return `
      <div style="text-align: center;">
        <div style="display: flex; justify-content: center; align-items: center; padding:15px">
          <div class="custom-swal-icon-container">
            <img class="custom-swal-icon" src="assets/svg/icon-bell.svg">
          </div>
        </div>
        <h2 style="margin: 1rem 0 1rem 0; font-size: 1.875rem; font-weight: 600;">${title}</h2>
        <p style="margin:0; color: #545454;">${text}</p>
      </div>
    `;
    }
    createDelay(ms) {
        return new Promise((resolve) => setTimeout(() => resolve(null), ms));
    }
    handleLogout(uamLoginURL, applilcationStorageKey) {
        // Trigger cross-tab logout event
        localStorage.setItem('logout-event', Date.now().toString());
        this.cleanupAndRedirect(uamLoginURL, applilcationStorageKey);
        // const username = this.getUsernameFromStorage();
        // const payload = {
        //   Username: username,
        //   ClientId: environment.clientId,
        // };
        // this.loginService.logout(payload).subscribe({
        //   next: () => {
        //     this.cleanupAndRedirect();
        //   },
        //   error: err => {
        //     console.error('Logout error:', err);
        //     this.cleanupAndRedirect();
        //   },
        // });
    }
    getUsernameFromStorage() {
        const gioStorage = localStorage.getItem('GIO-STORAGE');
        if (!gioStorage)
            return '';
        try {
            return JSON.parse(gioStorage).user?.userName || '';
        }
        catch {
            return '';
        }
    }
    cleanupAndRedirect(uamLoginURL, applilcationStorageKey) {
        localStorage.removeItem(applilcationStorageKey);
        setTimeout(() => {
            window.location.href = uamLoginURL;
        }, 500);
    }
    resetSessionExpiredFlag() {
        this.sessionExpiredShown = false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ErrorModalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ErrorModalService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ErrorModalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/**
 * Manages authentication headers for HTTP requests
 */
class AuthHeaderService {
    addAuthHeaders(request, envName, clientId, authorizationType) {
        let headers = new HttpHeaders()
            .set('Authorization-Type', authorizationType)
            .set('X-ClientId', clientId);
        const userType = this.getUserType();
        if (userType) {
            headers = headers.set('X-UserType', userType);
        }
        const sessionId = this.getSessionId(envName);
        if (sessionId) {
            headers = headers.set('X-Sso-Session', sessionId);
        }
        return request.clone({
            headers,
            withCredentials: true,
        });
    }
    getUserType() {
        return localStorage.getItem('userType');
    }
    getSessionId(envName) {
        return localStorage.getItem(`${envName}_session_id`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AuthHeaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AuthHeaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AuthHeaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

var AUTH_ERROR_CODE;
(function (AUTH_ERROR_CODE) {
    AUTH_ERROR_CODE["SSO_SESSION_INVALID"] = "SSO_SESSION_INVALID";
    AUTH_ERROR_CODE["SSO_SESSION_EXPIRED"] = "SSO_SESSION_EXPIRED";
    AUTH_ERROR_CODE["TOKEN_INVALID"] = "TOKEN_INVALID";
    AUTH_ERROR_CODE["TOKEN_EXPIRED"] = "TOKEN_EXPIRED";
    AUTH_ERROR_CODE["AUDIENCE_MISSING"] = "AUDIENCE_MISSING";
    AUTH_ERROR_CODE["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    AUTH_ERROR_CODE["REFRESH_TOKEN_INVALID"] = "REFRESH_TOKEN_INVALID";
    AUTH_ERROR_CODE["REFRESH_TOKEN_EXPIRED"] = "REFRESH_TOKEN_EXPIRED";
    AUTH_ERROR_CODE["APPLICATION_TIMEOUT"] = "APPLICATION_TIMEOUT";
    AUTH_ERROR_CODE["SSO_TOKEN_EXPIRED"] = "SSO_TOKEN_EXPIRED";
})(AUTH_ERROR_CODE || (AUTH_ERROR_CODE = {}));

/**
 * Processes HTTP errors and determines appropriate handling
 */
class HttpErrorHandler {
    // private spinner = inject(NgxSpinnerService);
    errorModal = inject(ErrorModalService);
    REAUTH_ERROR_CODES = new Set([
        AUTH_ERROR_CODE.INTERNAL_ERROR,
        AUTH_ERROR_CODE.TOKEN_INVALID,
        AUTH_ERROR_CODE.AUDIENCE_MISSING,
        AUTH_ERROR_CODE.SSO_SESSION_INVALID,
        AUTH_ERROR_CODE.SSO_SESSION_EXPIRED,
        AUTH_ERROR_CODE.REFRESH_TOKEN_INVALID,
        AUTH_ERROR_CODE.REFRESH_TOKEN_EXPIRED,
        AUTH_ERROR_CODE.APPLICATION_TIMEOUT,
        AUTH_ERROR_CODE.SSO_TOKEN_EXPIRED,
    ]);
    processError(error) {
        // this.spinner.hide();
        const errorCode = error?.error?.errorCode;
        const isTokenExpired = errorCode === AUTH_ERROR_CODE.TOKEN_EXPIRED;
        const requiresReauth = this.requiresReauthentication(errorCode);
        const processed = {
            status: error.status,
            statusText: error.statusText,
            message: this.extractErrorMessage(error),
            shouldRetry: isTokenExpired,
            requiresReauth,
        };
        // Add ModelState for 422 errors
        if (error.status === 422 && error.error?.ModelState) {
            processed.ModelState = error.error.ModelState;
            processed.message = this.format422Message(error.error.ModelState);
        }
        return processed;
    }
    shouldSkipAuthHandling(error) {
        const isStaticResourceError = error.url
            ? this.isStaticResourceError(error.url)
            : false;
        return this.isNetworkError(error) || isStaticResourceError;
    }
    handleProcessedError(processedError, uamLoginURL, applilcationStorageKey) {
        if (processedError.requiresReauth) {
            this.errorModal.showSessionExpired(uamLoginURL, applilcationStorageKey);
        }
        else if (processedError.message) {
            this.errorModal.showError(processedError.message);
        }
    }
    extractErrorMessage(error) {
        if (error.status === 0) {
            return 'Network Error: Unable to connect to the server.';
        }
        return (error.error?.message ||
            error.error?.Message ||
            error.error?.error_description ||
            error.message ||
            'An unexpected error occurred.');
    }
    format422Message(modelState) {
        return Object.keys(modelState)
            .map((key) => `<li>${modelState[key]}</li>`)
            .join('');
    }
    requiresReauthentication(errorCode) {
        return this.REAUTH_ERROR_CODES.has(errorCode);
    }
    isNetworkError(error) {
        return error?.status === 0 || error.statusText === 'Unknown Error';
    }
    isStaticResourceError(url) {
        return url?.includes('.json') || url?.includes('.svg');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: HttpErrorHandler, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: HttpErrorHandler, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: HttpErrorHandler, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/**
 * Handles token refresh logic with queueing for concurrent requests
 */
class TokenRefreshService {
    loginService = inject(LoginService);
    authState = inject(AuthStateService);
    errorModal = inject(ErrorModalService);
    refreshAndRetry(req, next, urlConfig, clientId, applilcationStorageKey) {
        if (this.authState.isRefreshing) {
            // Wait for ongoing refresh to complete, then retry request
            return this.authState.waitForRefresh().pipe(switchMap(() => next(req)), catchError$1((err) => {
                this.errorModal.showSessionExpired(urlConfig.uamLoginURL, applilcationStorageKey);
                return throwError(() => err);
            }));
        }
        // Start new refresh process
        return this.performRefresh(req, next, urlConfig, clientId, applilcationStorageKey);
    }
    performRefresh(req, next, urlConfig, clientId, applilcationStorageKey) {
        this.authState.startRefresh();
        return this.loginService
            .refreshToken(urlConfig.uamBaseApiUrl, clientId)
            .pipe(switchMap((response) => {
            this.authState.completeRefresh(response);
            return next(req);
        }), catchError$1((err) => {
            this.authState.failRefresh();
            this.errorModal.showSessionExpired(urlConfig.uamLoginURL, applilcationStorageKey);
            return throwError(() => err);
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TokenRefreshService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TokenRefreshService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TokenRefreshService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/**
 * HTTP Interceptor for authentication and error handling
 *
 * Responsibilities:
 * - Add authentication headers to all requests
 * - Handle HTTP errors
 * - Trigger token refresh when needed
 * - Display appropriate error messages
 * - Cancel pending requests when session is invalidated (except whitelisted endpoints)
 */
/**
 * Check if the endpoint should be allowed even when session is invalidated
 */
function isWhitelistedEndpoint(url) {
    // TO DO: Retrieve whitelist from argument.
    const whitelistedEndpoints = [
        '/login',
        '/api/auth/logout',
        '/api/logout',
        // Add other endpoints that should always be allowed
    ];
    return whitelistedEndpoints.some((endpoint) => url.includes(endpoint));
}
function authInterceptor(config) {
    return (req, next) => {
        const authHeaderService = inject(AuthHeaderService);
        const httpErrorHandler = inject(HttpErrorHandler);
        const tokenRefreshService = inject(TokenRefreshService);
        const authState = inject(AuthStateService);
        // Whitelist: Allow these endpoints even when session is invalidated
        const isWhitelisted = isWhitelistedEndpoint(req.url);
        // Stop request if session has been invalidated (unless whitelisted)
        if (authState.isSessionInvalidated && !isWhitelisted) {
            return throwError(() => new Error('Session invalidated'));
        }
        // Add authentication headers to request
        const authReq = authHeaderService.addAuthHeaders(req, config.envName, config.clientId, config.authorizationType);
        return next(authReq).pipe(catchError$1((error) => {
            // Skip auth handling for network errors and static resources
            if (httpErrorHandler.shouldSkipAuthHandling(error)) {
                httpErrorHandler.handleProcessedError({
                    status: error.status,
                    statusText: error.statusText,
                    message: error.message,
                    shouldRetry: false,
                    requiresReauth: false,
                }, config.urlConfig.uamLoginURL, config.currentAppStorageKey);
                return throwError(() => error);
            }
            // Process the error
            const processedError = httpErrorHandler.processError(error);
            // If token expired, attempt refresh and retry
            if (processedError.shouldRetry) {
                return tokenRefreshService.refreshAndRetry(authReq, next, config.urlConfig, config.clientId, config.currentAppStorageKey);
            }
            // Handle other errors (show modal if needed, invalidate session if reauth required)
            httpErrorHandler.handleProcessedError(processedError, config.urlConfig.uamLoginURL, config.currentAppStorageKey);
            return throwError(() => error);
        }));
    };
}

const AUTH_INTERCEPTOR_PROVIDER = {
    provide: HTTP_INTERCEPTORS,
    useValue: authInterceptor,
    multi: true,
};

/*
 * Public API Surface of pla-shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AUTH_INTERCEPTOR_PROVIDER, CharCountDirective, ErrorModalService, LoginService, OverlayTextDirective, PlaButtonOutlinedComponent, PlaButtonPrimaryComponent, PlaButtonPrimaryIconComponent, PlaButtonSaveComponent, PlaButtonSecondaryComponent, PlaDialogComponent, PlaDynamicForm, PlaFormDatePickerComponent, PlaFormInputArrayComponent, PlaFormInputGroupComponent, PlaFormInputNumberComponent, PlaFormInputTextComponent, PlaFormSelectComponent, PlaFormSelectObsComponent, PlaFormTextAreaComponent, PlaFormToggleSwitchComponent, PlaInputSelect, PlaInputText, PlaMessageMappingPipe, PlaSharedLibComponent, PlaSharedLibService, PlaStepperComponent, PlaTopbar, TYPE, UserProfileService, authInterceptor, messageModels };
//# sourceMappingURL=pla-shared-lib.mjs.map
