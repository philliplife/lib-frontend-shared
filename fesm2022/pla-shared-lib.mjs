import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Output, forwardRef, Pipe, Directive, inject, TemplateRef, ViewContainerRef, ViewChild, LOCALE_ID } from '@angular/core';
import * as i1$1 from '@angular/common';
import { CommonModule, DatePipe } from '@angular/common';
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
import * as i2$1 from 'angular-svg-icon';
import { AngularSvgIconModule } from 'angular-svg-icon';
import * as i1$2 from 'primeng/tabs';
import { TabsModule } from 'primeng/tabs';
import * as i3$4 from 'primeng/skeleton';
import { SkeletonModule } from 'primeng/skeleton';
import * as i4$1 from 'primeng/iconfield';
import { IconFieldModule } from 'primeng/iconfield';
import * as i5$3 from 'primeng/inputicon';
import { InputIcon, InputIconModule } from 'primeng/inputicon';
import * as i6 from 'primeng/keyfilter';
import { KeyFilterModule } from 'primeng/keyfilter';
import { fromEvent, interval, merge, startWith, map, distinctUntilChanged, Subject, debounceTime, BehaviorSubject, tap, catchError, throwError } from 'rxjs';
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
import * as i2$2 from 'primeng/api';
import { MessageService, FilterMatchMode } from 'primeng/api';
import * as i2$3 from 'primeng/divider';
import { DividerModule } from 'primeng/divider';
import * as i2$4 from 'primeng/splitbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import * as i1$3 from 'primeng/dialog';
import { DialogModule } from 'primeng/dialog';
import * as i1$4 from 'primeng/toast';
import { ToastModule } from 'primeng/toast';
import * as i1$5 from 'primeng/table';
import { TableModule } from 'primeng/table';
import * as i4$5 from 'primeng/tieredmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import * as i5$2 from 'primeng/tag';
import { TagModule } from 'primeng/tag';
import { Router } from '@angular/router';
import * as i2$5 from 'primeng/stepper';
import { StepperModule } from 'primeng/stepper';
import { StepsModule } from 'primeng/steps';
import * as i1$6 from '@angular/common/http';
import { HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { filter, take, switchMap, catchError as catchError$1 } from 'rxjs/operators';
import Swal from 'sweetalert2';

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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonPrimaryComponent, isStandalone: true, selector: "pla-button-primary", inputs: { class: "class", style: "style", disabled: "disabled" }, ngImport: i0, template: "<p-button\n  severity=\"primary\"\n  [style]=\"style\"\n  [styleClass]=\"class\"\n  [disabled]=\"disabled\"\n>\n  <ng-content></ng-content>\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonPrimaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-primary', imports: [ButtonModule, CommonModule], template: "<p-button\n  severity=\"primary\"\n  [style]=\"style\"\n  [styleClass]=\"class\"\n  [disabled]=\"disabled\"\n>\n  <ng-content></ng-content>\n</p-button>\n" }]
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
    disabled = false;
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSecondaryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaButtonSecondaryComponent, isStandalone: true, selector: "pla-button-secondary", inputs: { label: "label", class: "class", style: "style", disabled: "disabled" }, ngImport: i0, template: "<p-button\n  [style]=\"style\"\n  [styleClass]=\"class\"\n  [label]=\"label\"\n  severity=\"secondary\"\n>\n  <ng-content></ng-content>\n</p-button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaButtonSecondaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-button-secondary', imports: [ButtonModule, CommonModule], template: "<p-button\n  [style]=\"style\"\n  [styleClass]=\"class\"\n  [label]=\"label\"\n  severity=\"secondary\"\n>\n  <ng-content></ng-content>\n</p-button>\n" }]
        }], propDecorators: { label: [{
                type: Input
            }], class: [{
                type: Input
            }], style: [{
                type: Input
            }], disabled: [{
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

class PhoneNoPipe {
    transform(value) {
        if (value === null || value === undefined)
            return '';
        const str = value.toString().replace(/[- ]/g, '');
        if (str.length === 10) {
            return `${str.slice(0, 3)}-${str.slice(3, 6)}-${str.slice(6)}`;
        }
        else if (str.length === 9) {
            return `${str.slice(0, 3)}-${str.slice(3, 6)}-${str.slice(6)}`;
        }
        else if (str.length > 0) {
            return str.match(/.{1,3}/g)?.join('-') || str;
        }
        return str;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PhoneNoPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: PhoneNoPipe, isStandalone: true, name: "phoneNo" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PhoneNoPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'phoneNo',
                    standalone: true,
                }]
        }] });

class IdentityNoPipe {
    transform(value) {
        if (value === null || value === undefined)
            return '';
        const str = value.toString().replace(/[- ]/g, '');
        if (str.length === 13) {
            return `${str.slice(0, 1)}-${str.slice(1, 5)}-${str.slice(5, 10)}-${str.slice(10, 12)}-${str.slice(12)}`;
        }
        return str;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: IdentityNoPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: IdentityNoPipe, isStandalone: true, name: "identityNo" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: IdentityNoPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'identityNo',
                    standalone: true,
                }]
        }] });

class IsMaskedPipe {
    transform(value) {
        if (typeof value !== 'string') {
            return false;
        }
        return value.includes('X') || value.includes('x');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: IsMaskedPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: IsMaskedPipe, isStandalone: true, name: "isMasked" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: IsMaskedPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'isMasked',
                    standalone: true,
                }]
        }] });

class ParseMaskDatePipe {
    transform(value) {
        if (!value) {
            return value;
        }
        // Condition: length must be exactly 8 and only contain alphanumeric characters or common masking characters (*, #, ?)
        if (value.length !== 8 || !/^[a-zA-Z0-9*#?]{8}$/.test(value)) {
            return value;
        }
        const day = value.substring(0, 2);
        const month = value.substring(2, 4);
        const year = value.substring(4, 8);
        return `${day}/${month}/${year}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ParseMaskDatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: ParseMaskDatePipe, isStandalone: true, name: "parseMaskDate" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ParseMaskDatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'parseMaskDate',
                    standalone: true,
                }]
        }] });

class ParseMaskAmountPipe {
    transform(value) {
        if (value === null || value === undefined) {
            return value;
        }
        const valStr = String(value).trim();
        if (!valStr) {
            return valStr;
        }
        // Check if the value is a valid masked or unmasked number pattern
        if (!/^[+-]?[0-9Xx*]+(?:\.[0-9Xx*]+)?$/.test(valStr)) {
            return valStr;
        }
        // Separate sign
        let sign = '';
        let numStr = valStr;
        if (valStr.startsWith('-') || valStr.startsWith('+')) {
            sign = valStr[0];
            numStr = valStr.substring(1);
        }
        // Separate integer and decimal parts
        const parts = numStr.split('.');
        const integerPart = parts[0];
        const decimalPart = parts.length > 1 ? parts[1] : '';
        // Format integer part by adding commas every 3 characters from the right
        let formattedInteger = '';
        let count = 0;
        for (let i = integerPart.length - 1; i >= 0; i--) {
            const char = integerPart[i];
            if (count > 0 && count % 3 === 0) {
                formattedInteger = ',' + formattedInteger;
            }
            formattedInteger = char + formattedInteger;
            count++;
        }
        // Combine sign, formatted integer, and decimal parts
        if (parts.length > 1) {
            return `${sign}${formattedInteger}.${decimalPart}`;
        }
        return `${sign}${formattedInteger}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ParseMaskAmountPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: ParseMaskAmountPipe, isStandalone: true, name: "parseMaskAmount" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ParseMaskAmountPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'parseMaskAmount',
                    standalone: true,
                }]
        }] });

class PlaClientDetailComponent {
    config;
    get clientType() {
        const clientTypeCode = this.config.config?.client.client_Type_Code;
        switch (clientTypeCode) {
            case 'IND':
                return 'Individual';
            case 'JUR':
                return 'Juristic';
            default:
                return 'Individual';
        }
    }
    get mobilePhone() {
        return (this.config.config?.client_Contact.find((contact) => contact.contact_Type_Code === 'MOB')?.contact_Value || '-');
    }
    get workPlacePhone() {
        return (this.config.config?.client_Contact.find((contact) => contact.contact_Type_Code === 'OFF')?.contact_Value || '-');
    }
    get email() {
        return (this.config.config?.client_Contact.find((contact) => contact.contact_Type_Code === 'EML')?.contact_Value || '-');
    }
    get homePhone() {
        return (this.config.config?.client_Contact.find((contact) => contact.contact_Type_Code === 'HOM')?.contact_Value || '-');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaClientDetailComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaClientDetailComponent, isStandalone: true, selector: "pla-client-detail", inputs: { config: "config" }, ngImport: i0, template: "<div\n  class=\"profile-detail-container\"\n  [ngStyle]=\"{ backgroundColor: config?.background_Color || '#EFF6FF' }\"\n>\n  @switch (clientType) {\n    @case (\"Individual\") {\n      <div class=\"insured-info-container\">\n        <div class=\"header-panel\">\n          <div class=\"header-panel-title\">\n            <svg-icon\n              [src]=\"'./assets/svg/icon-insured-primary.svg'\"\n              [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n            ></svg-icon>\n            <span class=\"title\">{{\n              config?.label_Config?.personal_Information\n            }}</span>\n          </div>\n          <div class=\"info-container\">\n            <div class=\"info-item-container\">\n              <div class=\"info-item\">\n                <span class=\"label\">{{ config?.label_Config?.gender }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.gender_Description?.name_En || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.date_Of_Birth\n                }}</span>\n                <span class=\"value\"\n                  >{{\n                    config.config?.client?.date_Of_Birth | parseMaskDate\n                  }}\n                  ({{ config.config?.client?.current_Age || \"-\" }}&nbsp;\n                  {{ config?.label_Config?.years }})</span\n                >\n              </div>\n              <div class=\"item-separator\"></div>\n\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.identity_Type\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.identity_Description?.name_En || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.identity_No\n                }}</span>\n                <span class=\"value\">{{\n                  (config.config?.client?.identity_Type !== \"PAS\"\n                    ? (config.config?.client?.identity_No | identityNo)\n                    : config.config?.client?.identity_No) || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.nationality\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.nationality_Description?.name_En || \"-\"\n                }}</span>\n              </div>\n            </div>\n            <div class=\"info-separator\"></div>\n            <div class=\"info-item-container\">\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.marital_Status\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.marital_Status_Description?.name_En ||\n                    \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.place_Of_Birth\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.place_Of_Birth_Country_Description\n                    ?.name_En || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.identity_Expiry_Date\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.identity_Expiry_Date | parseMaskDate\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{ config?.label_Config?.tax_Id }}</span>\n                <span class=\"value\">{{\n                  (config.config?.client?.tax_Id | identityNo) || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{ config?.label_Config?.religion }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.religion_Description?.name_En || \"-\"\n                }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n    @case (\"Juristic\") {\n      <div class=\"insured-info-container\">\n        <div class=\"header-panel\">\n          <div class=\"header-panel-title\">\n            <svg-icon\n              [src]=\"'./assets/svg/icon-insured-primary.svg'\"\n              [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n            ></svg-icon>\n            <span class=\"title\">{{\n              config?.label_Config?.organization_Information\n            }}</span>\n          </div>\n          <div class=\"info-container\">\n            <div class=\"info-item-container\">\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.identity_Type\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.identity_Description?.name_En || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.registration_Number\n                }}</span>\n                <span class=\"value\">{{\n                  (config.config?.client?.identity_Type !== \"PAS\"\n                    ? (config.config?.client?.identity_No | identityNo)\n                    : config.config?.client?.identity_No) || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{ config?.label_Config?.tax_Id }}</span>\n                <span class=\"value\">{{\n                  (config.config?.client?.tax_Id | identityNo) || \"-\"\n                }}</span>\n              </div>\n            </div>\n            <div class=\"info-separator\"></div>\n            <div class=\"info-item-container\">\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.registration_Date\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.organization_Registration_Date\n                    | parseMaskDate\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.business_Type\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.organization_Business_Type || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n  }\n\n  <div class=\"contact-container\">\n    <div class=\"header-panel\">\n      <div class=\"header-panel-title\">\n        <svg-icon\n          [src]=\"'./assets/svg/icon-contact-primary.svg'\"\n          [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n        ></svg-icon>\n        <span class=\"title\">{{ config?.label_Config?.contact }}</span>\n      </div>\n\n      <div class=\"info-container\">\n        <div class=\"info-item-container\">\n          <div class=\"info-item\">\n            <span class=\"label\">{{ config?.label_Config?.mobile_Number }}</span>\n            <span class=\"value\">{{ mobilePhone || \"-\" }}</span>\n          </div>\n          <div class=\"item-separator\"></div>\n          <div class=\"info-item\">\n            <span class=\"label\">{{\n              config?.label_Config?.business_Number\n            }}</span>\n            <span class=\"value\">{{ workPlacePhone || \"-\" }}</span>\n          </div>\n        </div>\n        <div class=\"info-separator\"></div>\n        <div class=\"info-item-container\">\n          <div class=\"info-item\">\n            <span class=\"label\">{{ config?.label_Config?.email }}</span>\n            <span class=\"value\">{{ email || \"-\" }}</span>\n          </div>\n          <div class=\"item-separator\"></div>\n          <div class=\"info-item\">\n            <span class=\"label\">{{\n              config?.label_Config?.home_Phone_Number\n            }}</span>\n            <span class=\"value\">{{ homePhone || \"-\" }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  @if (clientType === \"Individual\") {\n    <div class=\"employment-container\">\n      <div class=\"header-panel\">\n        <div class=\"header-panel-title\">\n          <svg-icon\n            [src]=\"'./assets/svg/icon-employment.svg'\"\n            [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n          ></svg-icon>\n          <span class=\"title\">{{ config?.label_Config?.employment }}</span>\n        </div>\n      </div>\n      <div class=\"employment-info-container\">\n        <div class=\"primary-item\">\n          <div class=\"header-panel-title\">\n            <svg-icon\n              [src]=\"'./assets/svg/icon-primary-occupation.svg'\"\n              [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n            ></svg-icon>\n            <span class=\"title\">{{\n              config?.label_Config?.primary_Occupation\n            }}</span>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Business }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.primary\n                  ?.occupation_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Position }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.primary\n                  ?.occupation_Position_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Occupation_Group }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.primary\n                  ?.occupation_Group_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Occupation_Class }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.primary\n                  ?.occupation_Class_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Workplace_Name }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.primary\n                  ?.occupation_Organization_Name || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Income_Per_Year }}\n            </div>\n            <div class=\"value\">\n              @if (\n                config.config?.client?.occupation?.primary?.income_Per_Year ===\n                null\n              ) {\n                {{ \"-\" }}\n              } @else {\n                {{\n                  ((config.config?.client?.occupation?.primary?.income_Per_Year\n                  | isMasked)\n                    ? (config.config?.client?.occupation?.primary\n                        ?.income_Per_Year | parseMaskAmount)\n                    : (config.config?.client?.occupation?.primary\n                        ?.income_Per_Year | number: \"1.2-2\")) || \"0.00\"\n                }}\n                THB\n              }\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Employee_Number }}\n            </div>\n            <div class=\"value\">{{ \"-\" }}</div>\n          </div>\n        </div>\n        <div class=\"secondary-item\">\n          <div class=\"header-panel-title\">\n            <svg-icon\n              [src]=\"'./assets/svg/icon-secondary-occupation.svg'\"\n              [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n            ></svg-icon>\n            <span class=\"title\">{{\n              config?.label_Config?.secondary_Occupation\n            }}</span>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Business }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.secondary\n                  ?.occupation_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Position }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.secondary\n                  ?.occupation_Position_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Occupation_Group }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.secondary\n                  ?.occupation_Group_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Occupation_Class }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.secondary\n                  ?.occupation_Class_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Workplace_Name }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.secondary\n                  ?.occupation_Organization_Name || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Income_Per_Year }}\n            </div>\n            <div class=\"value\">\n              @if (\n                config.config?.client?.occupation?.secondary\n                  ?.income_Per_Year === null\n              ) {\n                {{ \"-\" }}\n              } @else {\n                {{\n                  ((config.config?.client?.occupation?.secondary\n                    ?.income_Per_Year | isMasked)\n                    ? (config.config?.client?.occupation?.secondary\n                        ?.income_Per_Year | parseMaskAmount)\n                    : (config.config?.client?.occupation?.secondary\n                        ?.income_Per_Year | number: \"1.2-2\")) || \"0.00\"\n                }}\n                THB\n              }\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Employee_Number }}\n            </div>\n            <div class=\"value\">{{ \"-\" }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (clientType === \"Juristic\") {\n    <div class=\"contact-person\">\n      <div class=\"header-panel\">\n        <div class=\"header-panel-title\">\n          <svg-icon\n            [src]=\"'./assets/svg/icon-contact-primary.svg'\"\n            [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n          ></svg-icon>\n          <span class=\"person-title\">{{\n            config?.label_Config?.contact_Person\n          }}</span>\n        </div>\n\n        @if (\n          !config?.config?.client_Contact_Person ||\n          config?.config?.client_Contact_Person?.length === 0\n        ) {\n          <div class=\"contact-person-container\">\n            <div class=\"no-contact-person\">\n              <span class=\"label\">{{\n                config?.label_Config?.no_Contact_Person\n              }}</span>\n            </div>\n          </div>\n        } @else {\n          @for (\n            contactPerson of config?.config?.client_Contact_Person;\n            track $index\n          ) {\n            <div class=\"flex flex-column relative align-items-end\">\n              <div class=\"contact-person-container relative\">\n                <div class=\"person-name-container\">\n                  <div class=\"name-th\">\n                    {{\n                      (contactPerson?.title_Description?.name_Th || \"\") +\n                        (contactPerson?.first_Name || \"-\") +\n                        \" \" +\n                        (contactPerson?.middle_Name || \"\") +\n                        \" \" +\n                        (contactPerson?.last_Name || \"-\") +\n                        \" \" +\n                        (contactPerson?.suffix_Name || \"\")\n                    }}\n                  </div>\n                  <div class=\"name-en\">\n                    {{\n                      (contactPerson?.title_Description?.name_En || \"\") +\n                        (contactPerson?.first_Name_En || \"-\") +\n                        \" \" +\n                        (contactPerson?.middle_Name_En || \"\") +\n                        \" \" +\n                        (contactPerson?.last_Name_En || \"-\") +\n                        \" \" +\n                        (contactPerson?.suffix_Name_En || \"\")\n                    }}\n                  </div>\n                </div>\n                <div class=\"person-info-container\">\n                  <div class=\"header-panel-title\">\n                    <svg-icon\n                      [src]=\"'./assets/svg/icon-contact-primary.svg'\"\n                      [svgStyle]=\"{\n                        'height.rem': 1,\n                        'width.rem': 1,\n                      }\"\n                    ></svg-icon>\n                    <span class=\"title\">{{ \"Person Information\" }}</span>\n                  </div>\n                  <div class=\"contact-item\">\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Position_Title\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.porsition_Title || \"-\"\n                      }}</span>\n                    </div>\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Department_Name\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.department_Title || \"-\"\n                      }}</span>\n                    </div>\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Mobile_Number\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.mobile_Number || \"-\"\n                      }}</span>\n                    </div>\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Phone_Number\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.phone_number || \"-\"\n                      }}</span>\n                    </div>\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Email\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.email || \"-\"\n                      }}</span>\n                    </div>\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Line_Id\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.line_Id || \"-\"\n                      }}</span>\n                    </div>\n                  </div>\n                  <div class=\"other-info-item\">\n                    <div class=\"label\">\n                      <span>{{\n                        config?.label_Config?.contact_Person_Other_Contact\n                      }}</span>\n                    </div>\n                    <div class=\"value\">\n                      <span>\n                        {{ contactPerson?.other_Contact || \"-\" }}\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              @if (contactPerson?.is_Primary) {\n                <div class=\"contact-person-primary\">\n                  <span class=\"value\">\n                    {{ \"Primary\" }}\n                  </span>\n                </div>\n              }\n            </div>\n          }\n        }\n      </div>\n    </div>\n  }\n\n  <div class=\"address-container\">\n    <div class=\"header-panel\">\n      <div class=\"header-panel-title\">\n        <svg-icon\n          [src]=\"'./assets/svg/icon-building-primary.svg'\"\n          [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n        ></svg-icon>\n        <span class=\"title\">{{ config?.label_Config?.address }}</span>\n      </div>\n      <div class=\"address-info-container\">\n        @if (\n          !config?.config?.client_Address ||\n          config?.config?.client_Address?.length === 0\n        ) {\n          <div class=\"address-item-container\">\n            <div class=\"no-address\">\n              <span class=\"label\">{{ config?.label_Config?.no_Address }}</span>\n            </div>\n          </div>\n        } @else {\n          @for (address of config?.config?.client_Address; track $index) {\n            <div class=\"address-item-container\">\n              <div class=\"address-item-info\">\n                <svg-icon\n                  [src]=\"'./assets/svg/icon-current-address.svg'\"\n                  [svgStyle]=\"{\n                    'height.rem': 1.5,\n                    'width.rem': 1.5,\n                  }\"\n                ></svg-icon>\n                <div class=\"label-container\">\n                  <span class=\"label\">{{\n                    address?.address_Type_Description?.name_En || \"-\"\n                  }}</span>\n                  <span class=\"value\">{{ address?.full_Address }}</span>\n                </div>\n              </div>\n            </div>\n          }\n        }\n      </div>\n    </div>\n  </div>\n\n  <div class=\"consent-container\">\n    <div class=\"header-panel\">\n      <div class=\"header-panel-title\">\n        <svg-icon\n          [src]=\"'./assets/svg/icon-building-primary.svg'\"\n          [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n        ></svg-icon>\n        <span class=\"title\">{{ config?.label_Config?.consent }}</span>\n      </div>\n    </div>\n\n    <div class=\"consent-list-container\">\n      @if (\n        !config?.config?.client_Consent ||\n        config?.config?.client_Consent?.length === 0\n      ) {\n        <div class=\"consent-item-container\">\n          <div class=\"no-address\">\n            <span class=\"label\">{{ config?.label_Config?.no_Consent }}</span>\n          </div>\n        </div>\n      } @else {\n        @for (item of config?.config?.client_Consent; track $index) {\n          <div class=\"consent-item\">\n            <div class=\"consent-item-name\">\n              <span class=\"consent-name\">{{\n                item?.consent_Type_Description?.name_En\n              }}</span>\n\n              <div class=\"consent-status-container\">\n                <span class=\"consent-status-label\"\n                  >{{ config?.label_Config?.consent_Status }}:</span\n                >\n                <span class=\"consent-status-value\">{{\n                  item?.consent_Status_Description?.name_En\n                }}</span>\n              </div>\n            </div>\n            <div class=\"consent-item-info\">\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.consent_Start_Date\n                }}</span>\n                <span class=\"value\">{{\n                  item?.consent_Start_Date\n                    ? (item?.consent_Start_Date | isMasked)\n                      ? (item?.consent_Start_Date | parseMaskDate)\n                      : (item?.consent_Start_Date | date: \"dd/MM/yyyy\")\n                    : \"-\"\n                }}</span>\n              </div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.consent_Expiry_Date\n                }}</span>\n                <span class=\"value\">{{\n                  item?.consent_Expiry_Date\n                    ? (item?.consent_Expiry_Date | isMasked)\n                      ? (item?.consent_Expiry_Date | parseMaskDate)\n                      : (item?.consent_Expiry_Date | date: \"dd/MM/yyyy\")\n                    : \"-\"\n                }}</span>\n              </div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.consent_Revoked_Date\n                }}</span>\n                <span class=\"value\">{{\n                  item?.revoked_Date\n                    ? (item?.revoked_Date | isMasked)\n                      ? (item?.revoked_Date | parseMaskDate)\n                      : (item?.revoked_Date | date: \"dd/MM/yyyy\")\n                    : \"-\"\n                }}</span>\n              </div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.consent_Revoked_Reason\n                }}</span>\n                <span class=\"value\">{{ item?.revoked_Reason || \"-\" }}</span>\n              </div>\n            </div>\n          </div>\n        }\n      }\n    </div>\n  </div>\n</div>\n", styles: [".profile-detail-container{display:flex;flex-direction:column;gap:1rem;border-radius:1rem;padding:1.875rem}.profile-detail-container .contact-person-primary{position:absolute;padding:.5rem 1rem;border-top-right-radius:1rem;border-bottom-left-radius:1rem;background:linear-gradient(90deg,#00194b,#2854a7 119.78%)}.profile-detail-container .contact-person-primary .value{color:#fff;font-size:.875rem;font-style:normal;font-weight:700;line-height:140%}.profile-detail-container .profile-container,.profile-detail-container .insured-info-container,.profile-detail-container .contact-container,.profile-detail-container .employment-container,.profile-detail-container .contact-person,.profile-detail-container .address-container,.profile-detail-container .consent-container{border-radius:1rem;padding:1.25rem;display:flex;flex-direction:column;gap:.5rem;background-color:#fff}.profile-detail-container .profile-container .header-panel,.profile-detail-container .insured-info-container .header-panel,.profile-detail-container .contact-container .header-panel,.profile-detail-container .employment-container .header-panel,.profile-detail-container .contact-person .header-panel,.profile-detail-container .address-container .header-panel,.profile-detail-container .consent-container .header-panel{display:flex;gap:.5rem;flex-direction:column}.profile-detail-container .profile-container .header-panel .header-panel-title,.profile-detail-container .insured-info-container .header-panel .header-panel-title,.profile-detail-container .contact-container .header-panel .header-panel-title,.profile-detail-container .employment-container .header-panel .header-panel-title,.profile-detail-container .contact-person .header-panel .header-panel-title,.profile-detail-container .address-container .header-panel .header-panel-title,.profile-detail-container .consent-container .header-panel .header-panel-title{display:flex;align-items:center;flex-wrap:nowrap;gap:.5rem}.profile-detail-container .profile-container .header-panel .header-panel-title .title,.profile-detail-container .insured-info-container .header-panel .header-panel-title .title,.profile-detail-container .contact-container .header-panel .header-panel-title .title,.profile-detail-container .employment-container .header-panel .header-panel-title .title,.profile-detail-container .contact-person .header-panel .header-panel-title .title,.profile-detail-container .address-container .header-panel .header-panel-title .title,.profile-detail-container .consent-container .header-panel .header-panel-title .title{font-size:1.125rem;font-weight:700;color:#00317a}.profile-detail-container .profile-container .header-panel .header-panel-title .person-title,.profile-detail-container .insured-info-container .header-panel .header-panel-title .person-title,.profile-detail-container .contact-container .header-panel .header-panel-title .person-title,.profile-detail-container .employment-container .header-panel .header-panel-title .person-title,.profile-detail-container .contact-person .header-panel .header-panel-title .person-title,.profile-detail-container .address-container .header-panel .header-panel-title .person-title,.profile-detail-container .consent-container .header-panel .header-panel-title .person-title{font-size:1rem;font-weight:700;color:#00317a}.profile-detail-container .profile-container .consent-list-container,.profile-detail-container .insured-info-container .consent-list-container,.profile-detail-container .contact-container .consent-list-container,.profile-detail-container .employment-container .consent-list-container,.profile-detail-container .contact-person .consent-list-container,.profile-detail-container .address-container .consent-list-container,.profile-detail-container .consent-container .consent-list-container{display:flex;flex-direction:column;border-radius:1rem;background-color:#fff;gap:.625rem;width:100%}.profile-detail-container .profile-container .consent-list-container .consent-item-container,.profile-detail-container .insured-info-container .consent-list-container .consent-item-container,.profile-detail-container .contact-container .consent-list-container .consent-item-container,.profile-detail-container .employment-container .consent-list-container .consent-item-container,.profile-detail-container .contact-person .consent-list-container .consent-item-container,.profile-detail-container .address-container .consent-list-container .consent-item-container,.profile-detail-container .consent-container .consent-list-container .consent-item-container{display:flex;flex-direction:row;align-items:center;justify-content:center;border:.0625rem solid #e6e6e6;border-radius:1rem;background-color:#fff;padding:1.25rem;width:100%;gap:.5rem}.profile-detail-container .profile-container .consent-list-container .consent-item-container .label,.profile-detail-container .insured-info-container .consent-list-container .consent-item-container .label,.profile-detail-container .contact-container .consent-list-container .consent-item-container .label,.profile-detail-container .employment-container .consent-list-container .consent-item-container .label,.profile-detail-container .contact-person .consent-list-container .consent-item-container .label,.profile-detail-container .address-container .consent-list-container .consent-item-container .label,.profile-detail-container .consent-container .consent-list-container .consent-item-container .label{font-size:1rem;text-align:center;font-weight:400;color:#6b7280}.profile-detail-container .profile-container .consent-list-container .consent-item,.profile-detail-container .insured-info-container .consent-list-container .consent-item,.profile-detail-container .contact-container .consent-list-container .consent-item,.profile-detail-container .employment-container .consent-list-container .consent-item,.profile-detail-container .contact-person .consent-list-container .consent-item,.profile-detail-container .address-container .consent-list-container .consent-item,.profile-detail-container .consent-container .consent-list-container .consent-item{display:flex;flex-direction:column;border:.0625rem solid #e6e6e6;border-radius:1rem;background-color:#eff6ff}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name{display:flex;flex-direction:row;justify-content:space-between;gap:.5rem;padding:.625rem 1.25rem}@media screen and (max-width: 550px){.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name{flex-direction:column}}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name .consent-name{font-size:1rem;font-weight:700;color:#00317a}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name .consent-status-container{display:flex;flex-direction:row;gap:.5rem}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label{font-size:1rem;font-weight:400;word-break:break-word;color:#6b7280}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value{font-size:1rem;word-break:break-word;font-weight:700;color:#00317a}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-info,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-info{display:grid;grid-template-columns:1;column-gap:2rem;row-gap:.625rem;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;align-items:center;background-color:#fff;padding:1.25rem}@media (min-width: 1024px){.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-info,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-info{grid-template-columns:repeat(2,1fr)}}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-info .info-item{display:flex;flex-direction:row;gap:.5rem;width:100%}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-info .info-item .label{width:50%;word-break:break-word;font-size:1rem;font-weight:400;color:#6b7280}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-info .info-item .value{width:50%;word-break:break-word;text-align:end;font-size:1rem;font-weight:700;color:#191919}.profile-detail-container .profile-container .contact-person-container,.profile-detail-container .insured-info-container .contact-person-container,.profile-detail-container .contact-container .contact-person-container,.profile-detail-container .employment-container .contact-person-container,.profile-detail-container .contact-person .contact-person-container,.profile-detail-container .address-container .contact-person-container,.profile-detail-container .consent-container .contact-person-container{position:relative;display:flex;flex-direction:column;gap:.5rem;border-radius:1rem;padding:1.25rem;width:100%;gap:1.25rem}.profile-detail-container .profile-container .contact-person-container:has(.no-contact-person),.profile-detail-container .insured-info-container .contact-person-container:has(.no-contact-person),.profile-detail-container .contact-container .contact-person-container:has(.no-contact-person),.profile-detail-container .employment-container .contact-person-container:has(.no-contact-person),.profile-detail-container .contact-person .contact-person-container:has(.no-contact-person),.profile-detail-container .address-container .contact-person-container:has(.no-contact-person),.profile-detail-container .consent-container .contact-person-container:has(.no-contact-person){background-color:#fff;border:.0625rem solid #e6e6e6}.profile-detail-container .profile-container .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .insured-info-container .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .contact-container .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .employment-container .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .contact-person .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .address-container .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .consent-container .contact-person-container:not(:has(.no-contact-person)){background-color:#eff6ff}.profile-detail-container .profile-container .contact-person-container .no-contact-person,.profile-detail-container .insured-info-container .contact-person-container .no-contact-person,.profile-detail-container .contact-container .contact-person-container .no-contact-person,.profile-detail-container .employment-container .contact-person-container .no-contact-person,.profile-detail-container .contact-person .contact-person-container .no-contact-person,.profile-detail-container .address-container .contact-person-container .no-contact-person,.profile-detail-container .consent-container .contact-person-container .no-contact-person{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;gap:.5rem}.profile-detail-container .profile-container .contact-person-container .no-contact-person .label,.profile-detail-container .insured-info-container .contact-person-container .no-contact-person .label,.profile-detail-container .contact-container .contact-person-container .no-contact-person .label,.profile-detail-container .employment-container .contact-person-container .no-contact-person .label,.profile-detail-container .contact-person .contact-person-container .no-contact-person .label,.profile-detail-container .address-container .contact-person-container .no-contact-person .label,.profile-detail-container .consent-container .contact-person-container .no-contact-person .label{font-size:1rem;text-align:center;font-weight:400;color:#6b7280}.profile-detail-container .profile-container .contact-person-container .person-name-container,.profile-detail-container .insured-info-container .contact-person-container .person-name-container,.profile-detail-container .contact-container .contact-person-container .person-name-container,.profile-detail-container .employment-container .contact-person-container .person-name-container,.profile-detail-container .contact-person .contact-person-container .person-name-container,.profile-detail-container .address-container .contact-person-container .person-name-container,.profile-detail-container .consent-container .contact-person-container .person-name-container{display:flex;flex-direction:column;padding-right:4.375rem}.profile-detail-container .profile-container .contact-person-container .person-name-container .name-th,.profile-detail-container .insured-info-container .contact-person-container .person-name-container .name-th,.profile-detail-container .contact-container .contact-person-container .person-name-container .name-th,.profile-detail-container .employment-container .contact-person-container .person-name-container .name-th,.profile-detail-container .contact-person .contact-person-container .person-name-container .name-th,.profile-detail-container .address-container .contact-person-container .person-name-container .name-th,.profile-detail-container .consent-container .contact-person-container .person-name-container .name-th{font-size:1rem;font-style:normal;font-weight:700;line-height:140%}.profile-detail-container .profile-container .contact-person-container .person-name-container .name-en,.profile-detail-container .insured-info-container .contact-person-container .person-name-container .name-en,.profile-detail-container .contact-container .contact-person-container .person-name-container .name-en,.profile-detail-container .employment-container .contact-person-container .person-name-container .name-en,.profile-detail-container .contact-person .contact-person-container .person-name-container .name-en,.profile-detail-container .address-container .contact-person-container .person-name-container .name-en,.profile-detail-container .consent-container .contact-person-container .person-name-container .name-en{font-size:1rem;font-style:normal;font-weight:300;line-height:140%}.profile-detail-container .profile-container .contact-person-container .person-info-container,.profile-detail-container .insured-info-container .contact-person-container .person-info-container,.profile-detail-container .contact-container .contact-person-container .person-info-container,.profile-detail-container .employment-container .contact-person-container .person-info-container,.profile-detail-container .contact-person .contact-person-container .person-info-container,.profile-detail-container .address-container .contact-person-container .person-info-container,.profile-detail-container .consent-container .contact-person-container .person-info-container{display:flex;flex-direction:column;gap:.625rem;border-radius:.375rem;background-color:#fff;padding:1.25rem;width:100%}.profile-detail-container .profile-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .contact-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .employment-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .contact-person .contact-person-container .person-info-container .contact-item,.profile-detail-container .address-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .consent-container .contact-person-container .person-info-container .contact-item{display:grid;grid-template-columns:1fr;column-gap:2rem;row-gap:.25rem}@media (min-width: 768px){.profile-detail-container .profile-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .contact-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .employment-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .contact-person .contact-person-container .person-info-container .contact-item,.profile-detail-container .address-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .consent-container .contact-person-container .person-info-container .contact-item{grid-template-columns:repeat(2,1fr)}}.profile-detail-container .profile-container .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .contact-container .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .employment-container .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .contact-person .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .address-container .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .consent-container .contact-person-container .person-info-container .contact-item .info-item{display:flex;flex-direction:row;justify-content:space-between;width:100%}.profile-detail-container .profile-container .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .contact-container .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .employment-container .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .contact-person .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .address-container .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .consent-container .contact-person-container .person-info-container .contact-item .info-item .label{width:50%;font-size:1rem;font-weight:400;line-height:140%}.profile-detail-container .profile-container .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .contact-container .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .employment-container .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .contact-person .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .address-container .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .consent-container .contact-person-container .person-info-container .contact-item .info-item .value{text-align:end;word-break:break-word;width:50%;font-size:1rem;font-weight:700;line-height:140%}.profile-detail-container .profile-container .contact-person-container .person-info-container .other-info-item,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .other-info-item,.profile-detail-container .contact-container .contact-person-container .person-info-container .other-info-item,.profile-detail-container .employment-container .contact-person-container .person-info-container .other-info-item,.profile-detail-container .contact-person .contact-person-container .person-info-container .other-info-item,.profile-detail-container .address-container .contact-person-container .person-info-container .other-info-item,.profile-detail-container .consent-container .contact-person-container .person-info-container .other-info-item{display:flex;flex-direction:column;width:100%}.profile-detail-container .profile-container .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .contact-container .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .employment-container .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .contact-person .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .address-container .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .consent-container .contact-person-container .person-info-container .other-info-item .label{width:100%}.profile-detail-container .profile-container .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .contact-container .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .employment-container .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .contact-person .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .address-container .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .consent-container .contact-person-container .person-info-container .other-info-item .label span{font-size:1rem;font-weight:400;line-height:140%}.profile-detail-container .profile-container .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .contact-container .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .employment-container .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .contact-person .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .address-container .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .consent-container .contact-person-container .person-info-container .other-info-item .value{width:100%}.profile-detail-container .profile-container .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .contact-container .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .employment-container .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .contact-person .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .address-container .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .consent-container .contact-person-container .person-info-container .other-info-item .value span{word-break:break-word;font-size:1rem;font-weight:700;line-height:140%}.profile-detail-container .profile-container .client-number,.profile-detail-container .insured-info-container .client-number,.profile-detail-container .contact-container .client-number,.profile-detail-container .employment-container .client-number,.profile-detail-container .contact-person .client-number,.profile-detail-container .address-container .client-number,.profile-detail-container .consent-container .client-number{display:flex;flex-direction:row;gap:.5rem;border-radius:.375rem;background-color:#eff6ff;padding:.3125rem .625rem;width:fit-content}.profile-detail-container .profile-container .client-number .label,.profile-detail-container .insured-info-container .client-number .label,.profile-detail-container .contact-container .client-number .label,.profile-detail-container .employment-container .client-number .label,.profile-detail-container .contact-person .client-number .label,.profile-detail-container .address-container .client-number .label,.profile-detail-container .consent-container .client-number .label{font-size:.75rem;font-weight:400}.profile-detail-container .profile-container .client-number .value,.profile-detail-container .insured-info-container .client-number .value,.profile-detail-container .contact-container .client-number .value,.profile-detail-container .employment-container .client-number .value,.profile-detail-container .contact-person .client-number .value,.profile-detail-container .address-container .client-number .value,.profile-detail-container .consent-container .client-number .value{font-size:.75rem;font-weight:700;color:#00317a}.profile-detail-container .profile-container .name-container{display:flex;flex-direction:column;gap:.5rem;padding:0 .625rem}.profile-detail-container .profile-container .name-container .name-th{font-size:1.125rem;font-weight:700;background:var(--Linear, linear-gradient(90deg, #00194b 0%, #2854a7 119.78%));background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.profile-detail-container .profile-container .name-container .name-en{font-size:1.125rem;font-weight:400;color:#000}.profile-detail-container .insured-info-container .info-container,.profile-detail-container .contact-container .info-container{display:flex;flex-direction:row}@media (max-width: 1024px){.profile-detail-container .insured-info-container .info-container,.profile-detail-container .contact-container .info-container{flex-direction:column}}.profile-detail-container .insured-info-container .info-container .info-item-container,.profile-detail-container .contact-container .info-container .info-item-container{display:flex;flex-direction:column;flex:1;padding:1.25rem 0}.profile-detail-container .insured-info-container .info-container .info-item-container .info-item,.profile-detail-container .contact-container .info-container .info-item-container .info-item{display:flex;flex-direction:row;justify-content:space-between}.profile-detail-container .insured-info-container .info-container .info-item-container .info-item .label,.profile-detail-container .contact-container .info-container .info-item-container .info-item .label{font-size:1rem;font-weight:400;color:#6b7280}.profile-detail-container .insured-info-container .info-container .info-item-container .info-item .value,.profile-detail-container .contact-container .info-container .info-item-container .info-item .value{font-size:1rem;font-weight:700;color:#191919}.profile-detail-container .insured-info-container .info-container .info-item-container .item-separator,.profile-detail-container .contact-container .info-container .info-item-container .item-separator{width:100%;border-bottom:.0625rem solid rgba(0,0,0,.1);margin:1.25rem 0}.profile-detail-container .insured-info-container .info-container .info-separator,.profile-detail-container .contact-container .info-container .info-separator{margin:0 1.5625rem;border-left:.0625rem solid rgba(0,0,0,.1)}@media (max-width: 1024px){.profile-detail-container .insured-info-container .info-container .info-separator,.profile-detail-container .contact-container .info-container .info-separator{margin:0;border-left:0;border-bottom:.0625rem solid rgba(0,0,0,.1)}}.profile-detail-container .insured-info-container .not-applicable,.profile-detail-container .contact-container .not-applicable{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.5rem;border-radius:.875rem;padding:1.5rem;border-radius:14px;border:.0625rem solid #ddd;background:#f5f5f5}.profile-detail-container .insured-info-container .not-applicable .description-container,.profile-detail-container .contact-container .not-applicable .description-container{display:flex;flex-direction:row;gap:.5rem;align-items:center}.profile-detail-container .insured-info-container .not-applicable .description-container .description,.profile-detail-container .contact-container .not-applicable .description-container .description{font-size:1rem;font-weight:400;color:#6b7280}.profile-detail-container .employment-container .employment-info-container{display:flex;flex-direction:row;gap:1.25rem}@media (max-width: 1024px){.profile-detail-container .employment-container .employment-info-container{flex-direction:column}}.profile-detail-container .employment-container .employment-info-container .primary-item,.profile-detail-container .employment-container .employment-info-container .secondary-item{display:flex;flex-direction:column;border-radius:.875rem;flex:1;gap:.5rem;padding:1.25rem}.profile-detail-container .employment-container .employment-info-container .primary-item .header-panel-title,.profile-detail-container .employment-container .employment-info-container .secondary-item .header-panel-title{display:flex;flex-direction:row;align-items:center;gap:.5rem}.profile-detail-container .employment-container .employment-info-container .primary-item .header-panel-title .title,.profile-detail-container .employment-container .employment-info-container .secondary-item .header-panel-title .title{font-size:1rem;font-weight:700;color:#191919}.profile-detail-container .employment-container .employment-info-container .primary-item .item,.profile-detail-container .employment-container .employment-info-container .secondary-item .item{display:flex;flex-direction:row;justify-content:space-between}.profile-detail-container .employment-container .employment-info-container .primary-item .item .label,.profile-detail-container .employment-container .employment-info-container .secondary-item .item .label{font-size:1rem;font-weight:400;color:#616161}.profile-detail-container .employment-container .employment-info-container .primary-item .item .value,.profile-detail-container .employment-container .employment-info-container .secondary-item .item .value{font-size:1rem;font-weight:700;color:#191919}.profile-detail-container .employment-container .employment-info-container .primary-item{background-color:#eff6ff}.profile-detail-container .employment-container .employment-info-container .secondary-item{background-color:#f6f6f6}.profile-detail-container .address-container .address-info-container{display:flex;gap:.625rem;flex-direction:column}.profile-detail-container .address-container .address-info-container .address-item-container{display:flex;flex-direction:row;justify-content:space-between;flex:1;padding:1.25rem;border-radius:.875rem;border:.0625rem solid #e6e6e6;background:#fff}.profile-detail-container .address-container .address-info-container .address-item-container .no-address{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;gap:.5rem}.profile-detail-container .address-container .address-info-container .address-item-container .no-address .label{font-size:1rem;text-align:center;font-weight:400;color:#6b7280}.profile-detail-container .address-container .address-info-container .address-item-container .address-item-info{display:flex;flex-direction:row;align-items:start;gap:.5rem}.profile-detail-container .address-container .address-info-container .address-item-container .address-item-info .label-container{display:flex;flex-direction:column;gap:.5rem}.profile-detail-container .address-container .address-info-container .address-item-container .address-item-info .label-container .label{font-size:1rem;font-weight:700;color:#191919}.profile-detail-container .address-container .address-info-container .address-item-container .address-item-info .label-container .value{font-size:1rem;font-weight:400;color:#616161}.profile-detail-container .address-container .address-info-container .address-item-container .address-preferred{display:flex;flex-direction:row;gap:.5rem;align-items:center}.profile-detail-container .address-container .address-info-container .address-item-container .address-preferred svg{border-radius:50%;box-shadow:#b8d4fa 0 .0625rem .25rem,#b8d4fa 0 0 0 .1875rem}.profile-detail-container .address-container .address-info-container .address-item-container .address-preferred .label{font-size:1rem;font-weight:700;background:var(--Linear, linear-gradient(90deg, #00194b 0%, #2854a7 119.78%));background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "pipe", type: i1$1.DecimalPipe, name: "number" }, { kind: "pipe", type: i1$1.DatePipe, name: "date" }, { kind: "ngmodule", type: AngularSvgIconModule }, { kind: "component", type: i2$1.SvgIconComponent, selector: "svg-icon", inputs: ["src", "name", "stretch", "applyClass", "svgClass", "class", "viewBox", "svgAriaLabel", "onSVGLoaded", "svgStyle"] }, { kind: "pipe", type: IdentityNoPipe, name: "identityNo" }, { kind: "pipe", type: IsMaskedPipe, name: "isMasked" }, { kind: "pipe", type: ParseMaskDatePipe, name: "parseMaskDate" }, { kind: "pipe", type: ParseMaskAmountPipe, name: "parseMaskAmount" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaClientDetailComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-client-detail', imports: [
                        CommonModule,
                        AngularSvgIconModule,
                        IdentityNoPipe,
                        PhoneNoPipe,
                        IsMaskedPipe,
                        ParseMaskDatePipe,
                        ParseMaskAmountPipe,
                    ], template: "<div\n  class=\"profile-detail-container\"\n  [ngStyle]=\"{ backgroundColor: config?.background_Color || '#EFF6FF' }\"\n>\n  @switch (clientType) {\n    @case (\"Individual\") {\n      <div class=\"insured-info-container\">\n        <div class=\"header-panel\">\n          <div class=\"header-panel-title\">\n            <svg-icon\n              [src]=\"'./assets/svg/icon-insured-primary.svg'\"\n              [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n            ></svg-icon>\n            <span class=\"title\">{{\n              config?.label_Config?.personal_Information\n            }}</span>\n          </div>\n          <div class=\"info-container\">\n            <div class=\"info-item-container\">\n              <div class=\"info-item\">\n                <span class=\"label\">{{ config?.label_Config?.gender }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.gender_Description?.name_En || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.date_Of_Birth\n                }}</span>\n                <span class=\"value\"\n                  >{{\n                    config.config?.client?.date_Of_Birth | parseMaskDate\n                  }}\n                  ({{ config.config?.client?.current_Age || \"-\" }}&nbsp;\n                  {{ config?.label_Config?.years }})</span\n                >\n              </div>\n              <div class=\"item-separator\"></div>\n\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.identity_Type\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.identity_Description?.name_En || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.identity_No\n                }}</span>\n                <span class=\"value\">{{\n                  (config.config?.client?.identity_Type !== \"PAS\"\n                    ? (config.config?.client?.identity_No | identityNo)\n                    : config.config?.client?.identity_No) || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.nationality\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.nationality_Description?.name_En || \"-\"\n                }}</span>\n              </div>\n            </div>\n            <div class=\"info-separator\"></div>\n            <div class=\"info-item-container\">\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.marital_Status\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.marital_Status_Description?.name_En ||\n                    \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.place_Of_Birth\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.place_Of_Birth_Country_Description\n                    ?.name_En || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.identity_Expiry_Date\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.identity_Expiry_Date | parseMaskDate\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{ config?.label_Config?.tax_Id }}</span>\n                <span class=\"value\">{{\n                  (config.config?.client?.tax_Id | identityNo) || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{ config?.label_Config?.religion }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.religion_Description?.name_En || \"-\"\n                }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n    @case (\"Juristic\") {\n      <div class=\"insured-info-container\">\n        <div class=\"header-panel\">\n          <div class=\"header-panel-title\">\n            <svg-icon\n              [src]=\"'./assets/svg/icon-insured-primary.svg'\"\n              [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n            ></svg-icon>\n            <span class=\"title\">{{\n              config?.label_Config?.organization_Information\n            }}</span>\n          </div>\n          <div class=\"info-container\">\n            <div class=\"info-item-container\">\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.identity_Type\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.identity_Description?.name_En || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.registration_Number\n                }}</span>\n                <span class=\"value\">{{\n                  (config.config?.client?.identity_Type !== \"PAS\"\n                    ? (config.config?.client?.identity_No | identityNo)\n                    : config.config?.client?.identity_No) || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{ config?.label_Config?.tax_Id }}</span>\n                <span class=\"value\">{{\n                  (config.config?.client?.tax_Id | identityNo) || \"-\"\n                }}</span>\n              </div>\n            </div>\n            <div class=\"info-separator\"></div>\n            <div class=\"info-item-container\">\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.registration_Date\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.organization_Registration_Date\n                    | parseMaskDate\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.business_Type\n                }}</span>\n                <span class=\"value\">{{\n                  config.config?.client?.organization_Business_Type || \"-\"\n                }}</span>\n              </div>\n              <div class=\"item-separator\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n  }\n\n  <div class=\"contact-container\">\n    <div class=\"header-panel\">\n      <div class=\"header-panel-title\">\n        <svg-icon\n          [src]=\"'./assets/svg/icon-contact-primary.svg'\"\n          [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n        ></svg-icon>\n        <span class=\"title\">{{ config?.label_Config?.contact }}</span>\n      </div>\n\n      <div class=\"info-container\">\n        <div class=\"info-item-container\">\n          <div class=\"info-item\">\n            <span class=\"label\">{{ config?.label_Config?.mobile_Number }}</span>\n            <span class=\"value\">{{ mobilePhone || \"-\" }}</span>\n          </div>\n          <div class=\"item-separator\"></div>\n          <div class=\"info-item\">\n            <span class=\"label\">{{\n              config?.label_Config?.business_Number\n            }}</span>\n            <span class=\"value\">{{ workPlacePhone || \"-\" }}</span>\n          </div>\n        </div>\n        <div class=\"info-separator\"></div>\n        <div class=\"info-item-container\">\n          <div class=\"info-item\">\n            <span class=\"label\">{{ config?.label_Config?.email }}</span>\n            <span class=\"value\">{{ email || \"-\" }}</span>\n          </div>\n          <div class=\"item-separator\"></div>\n          <div class=\"info-item\">\n            <span class=\"label\">{{\n              config?.label_Config?.home_Phone_Number\n            }}</span>\n            <span class=\"value\">{{ homePhone || \"-\" }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  @if (clientType === \"Individual\") {\n    <div class=\"employment-container\">\n      <div class=\"header-panel\">\n        <div class=\"header-panel-title\">\n          <svg-icon\n            [src]=\"'./assets/svg/icon-employment.svg'\"\n            [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n          ></svg-icon>\n          <span class=\"title\">{{ config?.label_Config?.employment }}</span>\n        </div>\n      </div>\n      <div class=\"employment-info-container\">\n        <div class=\"primary-item\">\n          <div class=\"header-panel-title\">\n            <svg-icon\n              [src]=\"'./assets/svg/icon-primary-occupation.svg'\"\n              [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n            ></svg-icon>\n            <span class=\"title\">{{\n              config?.label_Config?.primary_Occupation\n            }}</span>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Business }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.primary\n                  ?.occupation_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Position }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.primary\n                  ?.occupation_Position_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Occupation_Group }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.primary\n                  ?.occupation_Group_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Occupation_Class }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.primary\n                  ?.occupation_Class_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Workplace_Name }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.primary\n                  ?.occupation_Organization_Name || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Income_Per_Year }}\n            </div>\n            <div class=\"value\">\n              @if (\n                config.config?.client?.occupation?.primary?.income_Per_Year ===\n                null\n              ) {\n                {{ \"-\" }}\n              } @else {\n                {{\n                  ((config.config?.client?.occupation?.primary?.income_Per_Year\n                  | isMasked)\n                    ? (config.config?.client?.occupation?.primary\n                        ?.income_Per_Year | parseMaskAmount)\n                    : (config.config?.client?.occupation?.primary\n                        ?.income_Per_Year | number: \"1.2-2\")) || \"0.00\"\n                }}\n                THB\n              }\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.primary_Employee_Number }}\n            </div>\n            <div class=\"value\">{{ \"-\" }}</div>\n          </div>\n        </div>\n        <div class=\"secondary-item\">\n          <div class=\"header-panel-title\">\n            <svg-icon\n              [src]=\"'./assets/svg/icon-secondary-occupation.svg'\"\n              [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n            ></svg-icon>\n            <span class=\"title\">{{\n              config?.label_Config?.secondary_Occupation\n            }}</span>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Business }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.secondary\n                  ?.occupation_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Position }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.secondary\n                  ?.occupation_Position_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Occupation_Group }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.secondary\n                  ?.occupation_Group_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Occupation_Class }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.secondary\n                  ?.occupation_Class_Description?.name_Th || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Workplace_Name }}\n            </div>\n            <div class=\"value\">\n              {{\n                config.config?.client?.occupation?.secondary\n                  ?.occupation_Organization_Name || \"-\"\n              }}\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Income_Per_Year }}\n            </div>\n            <div class=\"value\">\n              @if (\n                config.config?.client?.occupation?.secondary\n                  ?.income_Per_Year === null\n              ) {\n                {{ \"-\" }}\n              } @else {\n                {{\n                  ((config.config?.client?.occupation?.secondary\n                    ?.income_Per_Year | isMasked)\n                    ? (config.config?.client?.occupation?.secondary\n                        ?.income_Per_Year | parseMaskAmount)\n                    : (config.config?.client?.occupation?.secondary\n                        ?.income_Per_Year | number: \"1.2-2\")) || \"0.00\"\n                }}\n                THB\n              }\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"label\">\n              {{ config?.label_Config?.secondary_Employee_Number }}\n            </div>\n            <div class=\"value\">{{ \"-\" }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (clientType === \"Juristic\") {\n    <div class=\"contact-person\">\n      <div class=\"header-panel\">\n        <div class=\"header-panel-title\">\n          <svg-icon\n            [src]=\"'./assets/svg/icon-contact-primary.svg'\"\n            [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n          ></svg-icon>\n          <span class=\"person-title\">{{\n            config?.label_Config?.contact_Person\n          }}</span>\n        </div>\n\n        @if (\n          !config?.config?.client_Contact_Person ||\n          config?.config?.client_Contact_Person?.length === 0\n        ) {\n          <div class=\"contact-person-container\">\n            <div class=\"no-contact-person\">\n              <span class=\"label\">{{\n                config?.label_Config?.no_Contact_Person\n              }}</span>\n            </div>\n          </div>\n        } @else {\n          @for (\n            contactPerson of config?.config?.client_Contact_Person;\n            track $index\n          ) {\n            <div class=\"flex flex-column relative align-items-end\">\n              <div class=\"contact-person-container relative\">\n                <div class=\"person-name-container\">\n                  <div class=\"name-th\">\n                    {{\n                      (contactPerson?.title_Description?.name_Th || \"\") +\n                        (contactPerson?.first_Name || \"-\") +\n                        \" \" +\n                        (contactPerson?.middle_Name || \"\") +\n                        \" \" +\n                        (contactPerson?.last_Name || \"-\") +\n                        \" \" +\n                        (contactPerson?.suffix_Name || \"\")\n                    }}\n                  </div>\n                  <div class=\"name-en\">\n                    {{\n                      (contactPerson?.title_Description?.name_En || \"\") +\n                        (contactPerson?.first_Name_En || \"-\") +\n                        \" \" +\n                        (contactPerson?.middle_Name_En || \"\") +\n                        \" \" +\n                        (contactPerson?.last_Name_En || \"-\") +\n                        \" \" +\n                        (contactPerson?.suffix_Name_En || \"\")\n                    }}\n                  </div>\n                </div>\n                <div class=\"person-info-container\">\n                  <div class=\"header-panel-title\">\n                    <svg-icon\n                      [src]=\"'./assets/svg/icon-contact-primary.svg'\"\n                      [svgStyle]=\"{\n                        'height.rem': 1,\n                        'width.rem': 1,\n                      }\"\n                    ></svg-icon>\n                    <span class=\"title\">{{ \"Person Information\" }}</span>\n                  </div>\n                  <div class=\"contact-item\">\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Position_Title\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.porsition_Title || \"-\"\n                      }}</span>\n                    </div>\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Department_Name\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.department_Title || \"-\"\n                      }}</span>\n                    </div>\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Mobile_Number\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.mobile_Number || \"-\"\n                      }}</span>\n                    </div>\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Phone_Number\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.phone_number || \"-\"\n                      }}</span>\n                    </div>\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Email\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.email || \"-\"\n                      }}</span>\n                    </div>\n                    <div class=\"info-item\">\n                      <span class=\"label\">{{\n                        config?.label_Config?.contact_Person_Line_Id\n                      }}</span>\n                      <span class=\"value\">{{\n                        contactPerson?.line_Id || \"-\"\n                      }}</span>\n                    </div>\n                  </div>\n                  <div class=\"other-info-item\">\n                    <div class=\"label\">\n                      <span>{{\n                        config?.label_Config?.contact_Person_Other_Contact\n                      }}</span>\n                    </div>\n                    <div class=\"value\">\n                      <span>\n                        {{ contactPerson?.other_Contact || \"-\" }}\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              @if (contactPerson?.is_Primary) {\n                <div class=\"contact-person-primary\">\n                  <span class=\"value\">\n                    {{ \"Primary\" }}\n                  </span>\n                </div>\n              }\n            </div>\n          }\n        }\n      </div>\n    </div>\n  }\n\n  <div class=\"address-container\">\n    <div class=\"header-panel\">\n      <div class=\"header-panel-title\">\n        <svg-icon\n          [src]=\"'./assets/svg/icon-building-primary.svg'\"\n          [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n        ></svg-icon>\n        <span class=\"title\">{{ config?.label_Config?.address }}</span>\n      </div>\n      <div class=\"address-info-container\">\n        @if (\n          !config?.config?.client_Address ||\n          config?.config?.client_Address?.length === 0\n        ) {\n          <div class=\"address-item-container\">\n            <div class=\"no-address\">\n              <span class=\"label\">{{ config?.label_Config?.no_Address }}</span>\n            </div>\n          </div>\n        } @else {\n          @for (address of config?.config?.client_Address; track $index) {\n            <div class=\"address-item-container\">\n              <div class=\"address-item-info\">\n                <svg-icon\n                  [src]=\"'./assets/svg/icon-current-address.svg'\"\n                  [svgStyle]=\"{\n                    'height.rem': 1.5,\n                    'width.rem': 1.5,\n                  }\"\n                ></svg-icon>\n                <div class=\"label-container\">\n                  <span class=\"label\">{{\n                    address?.address_Type_Description?.name_En || \"-\"\n                  }}</span>\n                  <span class=\"value\">{{ address?.full_Address }}</span>\n                </div>\n              </div>\n            </div>\n          }\n        }\n      </div>\n    </div>\n  </div>\n\n  <div class=\"consent-container\">\n    <div class=\"header-panel\">\n      <div class=\"header-panel-title\">\n        <svg-icon\n          [src]=\"'./assets/svg/icon-building-primary.svg'\"\n          [svgStyle]=\"{ 'height.rem': 1.5, 'width.rem': 1.5 }\"\n        ></svg-icon>\n        <span class=\"title\">{{ config?.label_Config?.consent }}</span>\n      </div>\n    </div>\n\n    <div class=\"consent-list-container\">\n      @if (\n        !config?.config?.client_Consent ||\n        config?.config?.client_Consent?.length === 0\n      ) {\n        <div class=\"consent-item-container\">\n          <div class=\"no-address\">\n            <span class=\"label\">{{ config?.label_Config?.no_Consent }}</span>\n          </div>\n        </div>\n      } @else {\n        @for (item of config?.config?.client_Consent; track $index) {\n          <div class=\"consent-item\">\n            <div class=\"consent-item-name\">\n              <span class=\"consent-name\">{{\n                item?.consent_Type_Description?.name_En\n              }}</span>\n\n              <div class=\"consent-status-container\">\n                <span class=\"consent-status-label\"\n                  >{{ config?.label_Config?.consent_Status }}:</span\n                >\n                <span class=\"consent-status-value\">{{\n                  item?.consent_Status_Description?.name_En\n                }}</span>\n              </div>\n            </div>\n            <div class=\"consent-item-info\">\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.consent_Start_Date\n                }}</span>\n                <span class=\"value\">{{\n                  item?.consent_Start_Date\n                    ? (item?.consent_Start_Date | isMasked)\n                      ? (item?.consent_Start_Date | parseMaskDate)\n                      : (item?.consent_Start_Date | date: \"dd/MM/yyyy\")\n                    : \"-\"\n                }}</span>\n              </div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.consent_Expiry_Date\n                }}</span>\n                <span class=\"value\">{{\n                  item?.consent_Expiry_Date\n                    ? (item?.consent_Expiry_Date | isMasked)\n                      ? (item?.consent_Expiry_Date | parseMaskDate)\n                      : (item?.consent_Expiry_Date | date: \"dd/MM/yyyy\")\n                    : \"-\"\n                }}</span>\n              </div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.consent_Revoked_Date\n                }}</span>\n                <span class=\"value\">{{\n                  item?.revoked_Date\n                    ? (item?.revoked_Date | isMasked)\n                      ? (item?.revoked_Date | parseMaskDate)\n                      : (item?.revoked_Date | date: \"dd/MM/yyyy\")\n                    : \"-\"\n                }}</span>\n              </div>\n              <div class=\"info-item\">\n                <span class=\"label\">{{\n                  config?.label_Config?.consent_Revoked_Reason\n                }}</span>\n                <span class=\"value\">{{ item?.revoked_Reason || \"-\" }}</span>\n              </div>\n            </div>\n          </div>\n        }\n      }\n    </div>\n  </div>\n</div>\n", styles: [".profile-detail-container{display:flex;flex-direction:column;gap:1rem;border-radius:1rem;padding:1.875rem}.profile-detail-container .contact-person-primary{position:absolute;padding:.5rem 1rem;border-top-right-radius:1rem;border-bottom-left-radius:1rem;background:linear-gradient(90deg,#00194b,#2854a7 119.78%)}.profile-detail-container .contact-person-primary .value{color:#fff;font-size:.875rem;font-style:normal;font-weight:700;line-height:140%}.profile-detail-container .profile-container,.profile-detail-container .insured-info-container,.profile-detail-container .contact-container,.profile-detail-container .employment-container,.profile-detail-container .contact-person,.profile-detail-container .address-container,.profile-detail-container .consent-container{border-radius:1rem;padding:1.25rem;display:flex;flex-direction:column;gap:.5rem;background-color:#fff}.profile-detail-container .profile-container .header-panel,.profile-detail-container .insured-info-container .header-panel,.profile-detail-container .contact-container .header-panel,.profile-detail-container .employment-container .header-panel,.profile-detail-container .contact-person .header-panel,.profile-detail-container .address-container .header-panel,.profile-detail-container .consent-container .header-panel{display:flex;gap:.5rem;flex-direction:column}.profile-detail-container .profile-container .header-panel .header-panel-title,.profile-detail-container .insured-info-container .header-panel .header-panel-title,.profile-detail-container .contact-container .header-panel .header-panel-title,.profile-detail-container .employment-container .header-panel .header-panel-title,.profile-detail-container .contact-person .header-panel .header-panel-title,.profile-detail-container .address-container .header-panel .header-panel-title,.profile-detail-container .consent-container .header-panel .header-panel-title{display:flex;align-items:center;flex-wrap:nowrap;gap:.5rem}.profile-detail-container .profile-container .header-panel .header-panel-title .title,.profile-detail-container .insured-info-container .header-panel .header-panel-title .title,.profile-detail-container .contact-container .header-panel .header-panel-title .title,.profile-detail-container .employment-container .header-panel .header-panel-title .title,.profile-detail-container .contact-person .header-panel .header-panel-title .title,.profile-detail-container .address-container .header-panel .header-panel-title .title,.profile-detail-container .consent-container .header-panel .header-panel-title .title{font-size:1.125rem;font-weight:700;color:#00317a}.profile-detail-container .profile-container .header-panel .header-panel-title .person-title,.profile-detail-container .insured-info-container .header-panel .header-panel-title .person-title,.profile-detail-container .contact-container .header-panel .header-panel-title .person-title,.profile-detail-container .employment-container .header-panel .header-panel-title .person-title,.profile-detail-container .contact-person .header-panel .header-panel-title .person-title,.profile-detail-container .address-container .header-panel .header-panel-title .person-title,.profile-detail-container .consent-container .header-panel .header-panel-title .person-title{font-size:1rem;font-weight:700;color:#00317a}.profile-detail-container .profile-container .consent-list-container,.profile-detail-container .insured-info-container .consent-list-container,.profile-detail-container .contact-container .consent-list-container,.profile-detail-container .employment-container .consent-list-container,.profile-detail-container .contact-person .consent-list-container,.profile-detail-container .address-container .consent-list-container,.profile-detail-container .consent-container .consent-list-container{display:flex;flex-direction:column;border-radius:1rem;background-color:#fff;gap:.625rem;width:100%}.profile-detail-container .profile-container .consent-list-container .consent-item-container,.profile-detail-container .insured-info-container .consent-list-container .consent-item-container,.profile-detail-container .contact-container .consent-list-container .consent-item-container,.profile-detail-container .employment-container .consent-list-container .consent-item-container,.profile-detail-container .contact-person .consent-list-container .consent-item-container,.profile-detail-container .address-container .consent-list-container .consent-item-container,.profile-detail-container .consent-container .consent-list-container .consent-item-container{display:flex;flex-direction:row;align-items:center;justify-content:center;border:.0625rem solid #e6e6e6;border-radius:1rem;background-color:#fff;padding:1.25rem;width:100%;gap:.5rem}.profile-detail-container .profile-container .consent-list-container .consent-item-container .label,.profile-detail-container .insured-info-container .consent-list-container .consent-item-container .label,.profile-detail-container .contact-container .consent-list-container .consent-item-container .label,.profile-detail-container .employment-container .consent-list-container .consent-item-container .label,.profile-detail-container .contact-person .consent-list-container .consent-item-container .label,.profile-detail-container .address-container .consent-list-container .consent-item-container .label,.profile-detail-container .consent-container .consent-list-container .consent-item-container .label{font-size:1rem;text-align:center;font-weight:400;color:#6b7280}.profile-detail-container .profile-container .consent-list-container .consent-item,.profile-detail-container .insured-info-container .consent-list-container .consent-item,.profile-detail-container .contact-container .consent-list-container .consent-item,.profile-detail-container .employment-container .consent-list-container .consent-item,.profile-detail-container .contact-person .consent-list-container .consent-item,.profile-detail-container .address-container .consent-list-container .consent-item,.profile-detail-container .consent-container .consent-list-container .consent-item{display:flex;flex-direction:column;border:.0625rem solid #e6e6e6;border-radius:1rem;background-color:#eff6ff}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name{display:flex;flex-direction:row;justify-content:space-between;gap:.5rem;padding:.625rem 1.25rem}@media screen and (max-width: 550px){.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name{flex-direction:column}}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name .consent-name,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name .consent-name{font-size:1rem;font-weight:700;color:#00317a}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name .consent-status-container,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name .consent-status-container{display:flex;flex-direction:row;gap:.5rem}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-label{font-size:1rem;font-weight:400;word-break:break-word;color:#6b7280}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-name .consent-status-container .consent-status-value{font-size:1rem;word-break:break-word;font-weight:700;color:#00317a}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-info,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-info{display:grid;grid-template-columns:1;column-gap:2rem;row-gap:.625rem;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;align-items:center;background-color:#fff;padding:1.25rem}@media (min-width: 1024px){.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-info,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-info,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-info{grid-template-columns:repeat(2,1fr)}}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-info .info-item,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-info .info-item{display:flex;flex-direction:row;gap:.5rem;width:100%}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-info .info-item .label,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-info .info-item .label{width:50%;word-break:break-word;font-size:1rem;font-weight:400;color:#6b7280}.profile-detail-container .profile-container .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .insured-info-container .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .contact-container .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .employment-container .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .contact-person .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .address-container .consent-list-container .consent-item .consent-item-info .info-item .value,.profile-detail-container .consent-container .consent-list-container .consent-item .consent-item-info .info-item .value{width:50%;word-break:break-word;text-align:end;font-size:1rem;font-weight:700;color:#191919}.profile-detail-container .profile-container .contact-person-container,.profile-detail-container .insured-info-container .contact-person-container,.profile-detail-container .contact-container .contact-person-container,.profile-detail-container .employment-container .contact-person-container,.profile-detail-container .contact-person .contact-person-container,.profile-detail-container .address-container .contact-person-container,.profile-detail-container .consent-container .contact-person-container{position:relative;display:flex;flex-direction:column;gap:.5rem;border-radius:1rem;padding:1.25rem;width:100%;gap:1.25rem}.profile-detail-container .profile-container .contact-person-container:has(.no-contact-person),.profile-detail-container .insured-info-container .contact-person-container:has(.no-contact-person),.profile-detail-container .contact-container .contact-person-container:has(.no-contact-person),.profile-detail-container .employment-container .contact-person-container:has(.no-contact-person),.profile-detail-container .contact-person .contact-person-container:has(.no-contact-person),.profile-detail-container .address-container .contact-person-container:has(.no-contact-person),.profile-detail-container .consent-container .contact-person-container:has(.no-contact-person){background-color:#fff;border:.0625rem solid #e6e6e6}.profile-detail-container .profile-container .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .insured-info-container .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .contact-container .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .employment-container .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .contact-person .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .address-container .contact-person-container:not(:has(.no-contact-person)),.profile-detail-container .consent-container .contact-person-container:not(:has(.no-contact-person)){background-color:#eff6ff}.profile-detail-container .profile-container .contact-person-container .no-contact-person,.profile-detail-container .insured-info-container .contact-person-container .no-contact-person,.profile-detail-container .contact-container .contact-person-container .no-contact-person,.profile-detail-container .employment-container .contact-person-container .no-contact-person,.profile-detail-container .contact-person .contact-person-container .no-contact-person,.profile-detail-container .address-container .contact-person-container .no-contact-person,.profile-detail-container .consent-container .contact-person-container .no-contact-person{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;gap:.5rem}.profile-detail-container .profile-container .contact-person-container .no-contact-person .label,.profile-detail-container .insured-info-container .contact-person-container .no-contact-person .label,.profile-detail-container .contact-container .contact-person-container .no-contact-person .label,.profile-detail-container .employment-container .contact-person-container .no-contact-person .label,.profile-detail-container .contact-person .contact-person-container .no-contact-person .label,.profile-detail-container .address-container .contact-person-container .no-contact-person .label,.profile-detail-container .consent-container .contact-person-container .no-contact-person .label{font-size:1rem;text-align:center;font-weight:400;color:#6b7280}.profile-detail-container .profile-container .contact-person-container .person-name-container,.profile-detail-container .insured-info-container .contact-person-container .person-name-container,.profile-detail-container .contact-container .contact-person-container .person-name-container,.profile-detail-container .employment-container .contact-person-container .person-name-container,.profile-detail-container .contact-person .contact-person-container .person-name-container,.profile-detail-container .address-container .contact-person-container .person-name-container,.profile-detail-container .consent-container .contact-person-container .person-name-container{display:flex;flex-direction:column;padding-right:4.375rem}.profile-detail-container .profile-container .contact-person-container .person-name-container .name-th,.profile-detail-container .insured-info-container .contact-person-container .person-name-container .name-th,.profile-detail-container .contact-container .contact-person-container .person-name-container .name-th,.profile-detail-container .employment-container .contact-person-container .person-name-container .name-th,.profile-detail-container .contact-person .contact-person-container .person-name-container .name-th,.profile-detail-container .address-container .contact-person-container .person-name-container .name-th,.profile-detail-container .consent-container .contact-person-container .person-name-container .name-th{font-size:1rem;font-style:normal;font-weight:700;line-height:140%}.profile-detail-container .profile-container .contact-person-container .person-name-container .name-en,.profile-detail-container .insured-info-container .contact-person-container .person-name-container .name-en,.profile-detail-container .contact-container .contact-person-container .person-name-container .name-en,.profile-detail-container .employment-container .contact-person-container .person-name-container .name-en,.profile-detail-container .contact-person .contact-person-container .person-name-container .name-en,.profile-detail-container .address-container .contact-person-container .person-name-container .name-en,.profile-detail-container .consent-container .contact-person-container .person-name-container .name-en{font-size:1rem;font-style:normal;font-weight:300;line-height:140%}.profile-detail-container .profile-container .contact-person-container .person-info-container,.profile-detail-container .insured-info-container .contact-person-container .person-info-container,.profile-detail-container .contact-container .contact-person-container .person-info-container,.profile-detail-container .employment-container .contact-person-container .person-info-container,.profile-detail-container .contact-person .contact-person-container .person-info-container,.profile-detail-container .address-container .contact-person-container .person-info-container,.profile-detail-container .consent-container .contact-person-container .person-info-container{display:flex;flex-direction:column;gap:.625rem;border-radius:.375rem;background-color:#fff;padding:1.25rem;width:100%}.profile-detail-container .profile-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .contact-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .employment-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .contact-person .contact-person-container .person-info-container .contact-item,.profile-detail-container .address-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .consent-container .contact-person-container .person-info-container .contact-item{display:grid;grid-template-columns:1fr;column-gap:2rem;row-gap:.25rem}@media (min-width: 768px){.profile-detail-container .profile-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .contact-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .employment-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .contact-person .contact-person-container .person-info-container .contact-item,.profile-detail-container .address-container .contact-person-container .person-info-container .contact-item,.profile-detail-container .consent-container .contact-person-container .person-info-container .contact-item{grid-template-columns:repeat(2,1fr)}}.profile-detail-container .profile-container .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .contact-container .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .employment-container .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .contact-person .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .address-container .contact-person-container .person-info-container .contact-item .info-item,.profile-detail-container .consent-container .contact-person-container .person-info-container .contact-item .info-item{display:flex;flex-direction:row;justify-content:space-between;width:100%}.profile-detail-container .profile-container .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .contact-container .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .employment-container .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .contact-person .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .address-container .contact-person-container .person-info-container .contact-item .info-item .label,.profile-detail-container .consent-container .contact-person-container .person-info-container .contact-item .info-item .label{width:50%;font-size:1rem;font-weight:400;line-height:140%}.profile-detail-container .profile-container .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .contact-container .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .employment-container .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .contact-person .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .address-container .contact-person-container .person-info-container .contact-item .info-item .value,.profile-detail-container .consent-container .contact-person-container .person-info-container .contact-item .info-item .value{text-align:end;word-break:break-word;width:50%;font-size:1rem;font-weight:700;line-height:140%}.profile-detail-container .profile-container .contact-person-container .person-info-container .other-info-item,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .other-info-item,.profile-detail-container .contact-container .contact-person-container .person-info-container .other-info-item,.profile-detail-container .employment-container .contact-person-container .person-info-container .other-info-item,.profile-detail-container .contact-person .contact-person-container .person-info-container .other-info-item,.profile-detail-container .address-container .contact-person-container .person-info-container .other-info-item,.profile-detail-container .consent-container .contact-person-container .person-info-container .other-info-item{display:flex;flex-direction:column;width:100%}.profile-detail-container .profile-container .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .contact-container .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .employment-container .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .contact-person .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .address-container .contact-person-container .person-info-container .other-info-item .label,.profile-detail-container .consent-container .contact-person-container .person-info-container .other-info-item .label{width:100%}.profile-detail-container .profile-container .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .contact-container .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .employment-container .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .contact-person .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .address-container .contact-person-container .person-info-container .other-info-item .label span,.profile-detail-container .consent-container .contact-person-container .person-info-container .other-info-item .label span{font-size:1rem;font-weight:400;line-height:140%}.profile-detail-container .profile-container .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .contact-container .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .employment-container .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .contact-person .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .address-container .contact-person-container .person-info-container .other-info-item .value,.profile-detail-container .consent-container .contact-person-container .person-info-container .other-info-item .value{width:100%}.profile-detail-container .profile-container .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .insured-info-container .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .contact-container .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .employment-container .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .contact-person .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .address-container .contact-person-container .person-info-container .other-info-item .value span,.profile-detail-container .consent-container .contact-person-container .person-info-container .other-info-item .value span{word-break:break-word;font-size:1rem;font-weight:700;line-height:140%}.profile-detail-container .profile-container .client-number,.profile-detail-container .insured-info-container .client-number,.profile-detail-container .contact-container .client-number,.profile-detail-container .employment-container .client-number,.profile-detail-container .contact-person .client-number,.profile-detail-container .address-container .client-number,.profile-detail-container .consent-container .client-number{display:flex;flex-direction:row;gap:.5rem;border-radius:.375rem;background-color:#eff6ff;padding:.3125rem .625rem;width:fit-content}.profile-detail-container .profile-container .client-number .label,.profile-detail-container .insured-info-container .client-number .label,.profile-detail-container .contact-container .client-number .label,.profile-detail-container .employment-container .client-number .label,.profile-detail-container .contact-person .client-number .label,.profile-detail-container .address-container .client-number .label,.profile-detail-container .consent-container .client-number .label{font-size:.75rem;font-weight:400}.profile-detail-container .profile-container .client-number .value,.profile-detail-container .insured-info-container .client-number .value,.profile-detail-container .contact-container .client-number .value,.profile-detail-container .employment-container .client-number .value,.profile-detail-container .contact-person .client-number .value,.profile-detail-container .address-container .client-number .value,.profile-detail-container .consent-container .client-number .value{font-size:.75rem;font-weight:700;color:#00317a}.profile-detail-container .profile-container .name-container{display:flex;flex-direction:column;gap:.5rem;padding:0 .625rem}.profile-detail-container .profile-container .name-container .name-th{font-size:1.125rem;font-weight:700;background:var(--Linear, linear-gradient(90deg, #00194b 0%, #2854a7 119.78%));background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.profile-detail-container .profile-container .name-container .name-en{font-size:1.125rem;font-weight:400;color:#000}.profile-detail-container .insured-info-container .info-container,.profile-detail-container .contact-container .info-container{display:flex;flex-direction:row}@media (max-width: 1024px){.profile-detail-container .insured-info-container .info-container,.profile-detail-container .contact-container .info-container{flex-direction:column}}.profile-detail-container .insured-info-container .info-container .info-item-container,.profile-detail-container .contact-container .info-container .info-item-container{display:flex;flex-direction:column;flex:1;padding:1.25rem 0}.profile-detail-container .insured-info-container .info-container .info-item-container .info-item,.profile-detail-container .contact-container .info-container .info-item-container .info-item{display:flex;flex-direction:row;justify-content:space-between}.profile-detail-container .insured-info-container .info-container .info-item-container .info-item .label,.profile-detail-container .contact-container .info-container .info-item-container .info-item .label{font-size:1rem;font-weight:400;color:#6b7280}.profile-detail-container .insured-info-container .info-container .info-item-container .info-item .value,.profile-detail-container .contact-container .info-container .info-item-container .info-item .value{font-size:1rem;font-weight:700;color:#191919}.profile-detail-container .insured-info-container .info-container .info-item-container .item-separator,.profile-detail-container .contact-container .info-container .info-item-container .item-separator{width:100%;border-bottom:.0625rem solid rgba(0,0,0,.1);margin:1.25rem 0}.profile-detail-container .insured-info-container .info-container .info-separator,.profile-detail-container .contact-container .info-container .info-separator{margin:0 1.5625rem;border-left:.0625rem solid rgba(0,0,0,.1)}@media (max-width: 1024px){.profile-detail-container .insured-info-container .info-container .info-separator,.profile-detail-container .contact-container .info-container .info-separator{margin:0;border-left:0;border-bottom:.0625rem solid rgba(0,0,0,.1)}}.profile-detail-container .insured-info-container .not-applicable,.profile-detail-container .contact-container .not-applicable{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.5rem;border-radius:.875rem;padding:1.5rem;border-radius:14px;border:.0625rem solid #ddd;background:#f5f5f5}.profile-detail-container .insured-info-container .not-applicable .description-container,.profile-detail-container .contact-container .not-applicable .description-container{display:flex;flex-direction:row;gap:.5rem;align-items:center}.profile-detail-container .insured-info-container .not-applicable .description-container .description,.profile-detail-container .contact-container .not-applicable .description-container .description{font-size:1rem;font-weight:400;color:#6b7280}.profile-detail-container .employment-container .employment-info-container{display:flex;flex-direction:row;gap:1.25rem}@media (max-width: 1024px){.profile-detail-container .employment-container .employment-info-container{flex-direction:column}}.profile-detail-container .employment-container .employment-info-container .primary-item,.profile-detail-container .employment-container .employment-info-container .secondary-item{display:flex;flex-direction:column;border-radius:.875rem;flex:1;gap:.5rem;padding:1.25rem}.profile-detail-container .employment-container .employment-info-container .primary-item .header-panel-title,.profile-detail-container .employment-container .employment-info-container .secondary-item .header-panel-title{display:flex;flex-direction:row;align-items:center;gap:.5rem}.profile-detail-container .employment-container .employment-info-container .primary-item .header-panel-title .title,.profile-detail-container .employment-container .employment-info-container .secondary-item .header-panel-title .title{font-size:1rem;font-weight:700;color:#191919}.profile-detail-container .employment-container .employment-info-container .primary-item .item,.profile-detail-container .employment-container .employment-info-container .secondary-item .item{display:flex;flex-direction:row;justify-content:space-between}.profile-detail-container .employment-container .employment-info-container .primary-item .item .label,.profile-detail-container .employment-container .employment-info-container .secondary-item .item .label{font-size:1rem;font-weight:400;color:#616161}.profile-detail-container .employment-container .employment-info-container .primary-item .item .value,.profile-detail-container .employment-container .employment-info-container .secondary-item .item .value{font-size:1rem;font-weight:700;color:#191919}.profile-detail-container .employment-container .employment-info-container .primary-item{background-color:#eff6ff}.profile-detail-container .employment-container .employment-info-container .secondary-item{background-color:#f6f6f6}.profile-detail-container .address-container .address-info-container{display:flex;gap:.625rem;flex-direction:column}.profile-detail-container .address-container .address-info-container .address-item-container{display:flex;flex-direction:row;justify-content:space-between;flex:1;padding:1.25rem;border-radius:.875rem;border:.0625rem solid #e6e6e6;background:#fff}.profile-detail-container .address-container .address-info-container .address-item-container .no-address{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;gap:.5rem}.profile-detail-container .address-container .address-info-container .address-item-container .no-address .label{font-size:1rem;text-align:center;font-weight:400;color:#6b7280}.profile-detail-container .address-container .address-info-container .address-item-container .address-item-info{display:flex;flex-direction:row;align-items:start;gap:.5rem}.profile-detail-container .address-container .address-info-container .address-item-container .address-item-info .label-container{display:flex;flex-direction:column;gap:.5rem}.profile-detail-container .address-container .address-info-container .address-item-container .address-item-info .label-container .label{font-size:1rem;font-weight:700;color:#191919}.profile-detail-container .address-container .address-info-container .address-item-container .address-item-info .label-container .value{font-size:1rem;font-weight:400;color:#616161}.profile-detail-container .address-container .address-info-container .address-item-container .address-preferred{display:flex;flex-direction:row;gap:.5rem;align-items:center}.profile-detail-container .address-container .address-info-container .address-item-container .address-preferred svg{border-radius:50%;box-shadow:#b8d4fa 0 .0625rem .25rem,#b8d4fa 0 0 0 .1875rem}.profile-detail-container .address-container .address-info-container .address-item-container .address-preferred .label{font-size:1rem;font-weight:700;background:var(--Linear, linear-gradient(90deg, #00194b 0%, #2854a7 119.78%));background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}\n"] }]
        }], propDecorators: { config: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaClientHeaderComponent {
    clientDetail;
    isMaskingPersonal;
    viewPersonal = new EventEmitter();
    onClickBack = new EventEmitter();
    onViewPersonal() {
        this.viewPersonal.emit(!this.isMaskingPersonal);
    }
    clickBack() {
        this.onClickBack.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaClientHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaClientHeaderComponent, isStandalone: true, selector: "pla-client-header", inputs: { clientDetail: "clientDetail", isMaskingPersonal: "isMaskingPersonal" }, outputs: { viewPersonal: "viewPersonal", onClickBack: "onClickBack" }, ngImport: i0, template: "<div plaHeader class=\"header-container\">\n  <div class=\"header-main-content\">\n    <p-button\n      icon=\"pi pi-arrow-left\"\n      [variant]=\"'text'\"\n      (onClick)=\"clickBack()\"\n    />\n    <div class=\"header-content-wrapper\">\n      <div class=\"profile-container\">\n        @switch (clientDetail?.client?.client_Type_Code) {\n          @case (\"IND\") {\n            <div class=\"profile-container-name\">\n              {{\n                (clientDetail?.client?.title_Description?.name_Th || \"\") +\n                  (clientDetail?.client?.first_Name || \"-\") +\n                  \" \" +\n                  (clientDetail?.client?.middle_Name || \"\") +\n                  \" \" +\n                  (clientDetail?.client?.last_Name || \"-\") +\n                  \" \" +\n                  (clientDetail?.client?.suffix_Name || \"\")\n              }}\n\n              ({{ clientDetail?.client?.client_Code || \"-\" }})\n              <ng-container [ngTemplateOutlet]=\"eyeButton\"></ng-container>\n            </div>\n            <div class=\"client-code-container\">\n              <div class=\"client-info\">\n                {{\n                  (clientDetail?.client?.title_Description?.name_En || \"\") +\n                    (clientDetail?.client?.first_Name_En || \"-\") +\n                    \" \" +\n                    (clientDetail?.client?.middle_Name_En || \"\") +\n                    \" \" +\n                    (clientDetail?.client?.last_Name_En || \"-\") +\n                    \" \" +\n                    (clientDetail?.client?.suffix_Name_En || \"\")\n                }}\n              </div>\n            </div>\n          }\n          @case (\"JUR\") {\n            <div class=\"profile-container-name\">\n              {{\n                (clientDetail?.client?.title_Description?.name_Th || \"\") +\n                  (clientDetail?.client?.organization_Name || \"-\")\n              }}\n\n              ({{ clientDetail?.client?.client_Code || \"-\" }})\n              <ng-container [ngTemplateOutlet]=\"eyeButton\"></ng-container>\n            </div>\n            <div class=\"client-code-container\">\n              <div class=\"client-info\">\n                {{\n                  (clientDetail?.client?.title_Description?.name_En || \"\") +\n                    (clientDetail?.client?.organization_Name_En || \"-\")\n                }}\n              </div>\n            </div>\n          }\n        }\n        <ng-template #eyeButton>\n          @if (isMaskingPersonal) {\n            <svg-icon\n              class=\"hide-icon\"\n              src=\"./assets/svg/icon-eye-slash.svg\"\n              [svgStyle]=\"{ 'width.rem': 1.5, 'height.rem': 1.5 }\"\n              role=\"button\"\n              tabindex=\"0\"\n              (keydown.enter)=\"onViewPersonal()\"\n              (click)=\"onViewPersonal()\"\n            ></svg-icon>\n          } @else {\n            <svg-icon\n              class=\"view-icon\"\n              src=\"./assets/svg/icon-eye.svg\"\n              [svgStyle]=\"{ 'width.rem': 1.5, 'height.rem': 1.5 }\"\n              role=\"button\"\n              tabindex=\"0\"\n              (keydown.enter)=\"onViewPersonal()\"\n              (click)=\"onViewPersonal()\"\n            ></svg-icon>\n          }\n        </ng-template>\n      </div>\n      <div class=\"client-status-container\">\n        <div class=\"client-status\">\n          <span class=\"title\">{{ \"Client Type\" }}:</span>\n          <span class=\"value\">{{\n            clientDetail?.client?.client_Type_Description?.name_En || \"-\"\n          }}</span>\n        </div>\n        <div class=\"client-status\">\n          <span class=\"title\">{{ \"Client Status\" }}:</span>\n          <span class=\"value\">{{\n            clientDetail?.client?.client_Status?.name_En || \"-\"\n          }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".header-container{display:flex;justify-content:space-between;width:100%;min-width:0}.header-container .header-main-content{display:flex;flex:1;flex-wrap:nowrap;min-width:0;gap:.5rem}.header-container .header-main-content .header-content-wrapper{display:flex;flex:1;flex-direction:column;gap:1rem;min-width:0}@media (min-width: 768px){.header-container .header-main-content .header-content-wrapper{flex-direction:row;justify-content:space-between;align-items:center}}.header-container .header-main-content .header-content-wrapper .profile-container{display:flex;flex-direction:column;gap:.25rem;min-width:0;flex:1}.header-container .header-main-content .header-content-wrapper .profile-container .profile-container-name{display:flex;gap:.625rem;font-size:1.25rem;font-weight:700;background:linear-gradient(90deg,#00194b,#2854a7 119.78%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.header-container .header-main-content .header-content-wrapper .profile-container .client-code-container{display:flex;flex-direction:row;align-items:center;gap:1rem}.header-container .header-main-content .header-content-wrapper .profile-container .client-code-container .client-info{display:flex;flex-direction:row;align-items:center;gap:.5rem}.header-container .header-main-content .header-content-wrapper .profile-container .client-code-container .client-info img{width:18px;height:18px;color:#0a3d62}.header-container .header-main-content .header-content-wrapper .profile-container .client-code-container .client-info .title{color:#7a7a7a;font-size:14px}.header-container .header-main-content .header-content-wrapper .profile-container .client-code-container .client-info .value{font-weight:500;color:#0a3d62;font-size:14px}.header-container .header-main-content .header-content-wrapper .client-status-container{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;gap:.5rem;flex-shrink:0}.header-container .header-main-content .header-content-wrapper .client-status-container .status-item{flex:1 1 auto}@media (min-width: 768px){.header-container .header-main-content .header-content-wrapper .client-status-container .status-item{flex:0 0 auto}}.header-container .header-main-content .header-content-wrapper .client-status-container .client-status{height:100%;display:flex;align-items:center;gap:.5rem;border-radius:.625rem;padding:.625rem 1rem;white-space:nowrap;border:.0625rem solid #e6e6e6;background:#fff}.header-container .header-main-content .header-content-wrapper .client-status-container .client-status .title{font-size:.8125rem;color:#666;line-height:0}.header-container .header-main-content .header-content-wrapper .client-status-container .client-status .value{font-weight:700;line-height:100%;font-size:.9375rem;color:#00317a}.view-icon,.hide-icon{cursor:pointer}.view-icon:hover,.hide-icon:hover{opacity:.75}.hide-icon path{fill:#464646}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: AngularSvgIconModule }, { kind: "component", type: i2$1.SvgIconComponent, selector: "svg-icon", inputs: ["src", "name", "stretch", "applyClass", "svgClass", "class", "viewBox", "svgAriaLabel", "onSVGLoaded", "svgStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaClientHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-client-header', standalone: true, imports: [CommonModule, ButtonModule, AngularSvgIconModule], template: "<div plaHeader class=\"header-container\">\n  <div class=\"header-main-content\">\n    <p-button\n      icon=\"pi pi-arrow-left\"\n      [variant]=\"'text'\"\n      (onClick)=\"clickBack()\"\n    />\n    <div class=\"header-content-wrapper\">\n      <div class=\"profile-container\">\n        @switch (clientDetail?.client?.client_Type_Code) {\n          @case (\"IND\") {\n            <div class=\"profile-container-name\">\n              {{\n                (clientDetail?.client?.title_Description?.name_Th || \"\") +\n                  (clientDetail?.client?.first_Name || \"-\") +\n                  \" \" +\n                  (clientDetail?.client?.middle_Name || \"\") +\n                  \" \" +\n                  (clientDetail?.client?.last_Name || \"-\") +\n                  \" \" +\n                  (clientDetail?.client?.suffix_Name || \"\")\n              }}\n\n              ({{ clientDetail?.client?.client_Code || \"-\" }})\n              <ng-container [ngTemplateOutlet]=\"eyeButton\"></ng-container>\n            </div>\n            <div class=\"client-code-container\">\n              <div class=\"client-info\">\n                {{\n                  (clientDetail?.client?.title_Description?.name_En || \"\") +\n                    (clientDetail?.client?.first_Name_En || \"-\") +\n                    \" \" +\n                    (clientDetail?.client?.middle_Name_En || \"\") +\n                    \" \" +\n                    (clientDetail?.client?.last_Name_En || \"-\") +\n                    \" \" +\n                    (clientDetail?.client?.suffix_Name_En || \"\")\n                }}\n              </div>\n            </div>\n          }\n          @case (\"JUR\") {\n            <div class=\"profile-container-name\">\n              {{\n                (clientDetail?.client?.title_Description?.name_Th || \"\") +\n                  (clientDetail?.client?.organization_Name || \"-\")\n              }}\n\n              ({{ clientDetail?.client?.client_Code || \"-\" }})\n              <ng-container [ngTemplateOutlet]=\"eyeButton\"></ng-container>\n            </div>\n            <div class=\"client-code-container\">\n              <div class=\"client-info\">\n                {{\n                  (clientDetail?.client?.title_Description?.name_En || \"\") +\n                    (clientDetail?.client?.organization_Name_En || \"-\")\n                }}\n              </div>\n            </div>\n          }\n        }\n        <ng-template #eyeButton>\n          @if (isMaskingPersonal) {\n            <svg-icon\n              class=\"hide-icon\"\n              src=\"./assets/svg/icon-eye-slash.svg\"\n              [svgStyle]=\"{ 'width.rem': 1.5, 'height.rem': 1.5 }\"\n              role=\"button\"\n              tabindex=\"0\"\n              (keydown.enter)=\"onViewPersonal()\"\n              (click)=\"onViewPersonal()\"\n            ></svg-icon>\n          } @else {\n            <svg-icon\n              class=\"view-icon\"\n              src=\"./assets/svg/icon-eye.svg\"\n              [svgStyle]=\"{ 'width.rem': 1.5, 'height.rem': 1.5 }\"\n              role=\"button\"\n              tabindex=\"0\"\n              (keydown.enter)=\"onViewPersonal()\"\n              (click)=\"onViewPersonal()\"\n            ></svg-icon>\n          }\n        </ng-template>\n      </div>\n      <div class=\"client-status-container\">\n        <div class=\"client-status\">\n          <span class=\"title\">{{ \"Client Type\" }}:</span>\n          <span class=\"value\">{{\n            clientDetail?.client?.client_Type_Description?.name_En || \"-\"\n          }}</span>\n        </div>\n        <div class=\"client-status\">\n          <span class=\"title\">{{ \"Client Status\" }}:</span>\n          <span class=\"value\">{{\n            clientDetail?.client?.client_Status?.name_En || \"-\"\n          }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".header-container{display:flex;justify-content:space-between;width:100%;min-width:0}.header-container .header-main-content{display:flex;flex:1;flex-wrap:nowrap;min-width:0;gap:.5rem}.header-container .header-main-content .header-content-wrapper{display:flex;flex:1;flex-direction:column;gap:1rem;min-width:0}@media (min-width: 768px){.header-container .header-main-content .header-content-wrapper{flex-direction:row;justify-content:space-between;align-items:center}}.header-container .header-main-content .header-content-wrapper .profile-container{display:flex;flex-direction:column;gap:.25rem;min-width:0;flex:1}.header-container .header-main-content .header-content-wrapper .profile-container .profile-container-name{display:flex;gap:.625rem;font-size:1.25rem;font-weight:700;background:linear-gradient(90deg,#00194b,#2854a7 119.78%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.header-container .header-main-content .header-content-wrapper .profile-container .client-code-container{display:flex;flex-direction:row;align-items:center;gap:1rem}.header-container .header-main-content .header-content-wrapper .profile-container .client-code-container .client-info{display:flex;flex-direction:row;align-items:center;gap:.5rem}.header-container .header-main-content .header-content-wrapper .profile-container .client-code-container .client-info img{width:18px;height:18px;color:#0a3d62}.header-container .header-main-content .header-content-wrapper .profile-container .client-code-container .client-info .title{color:#7a7a7a;font-size:14px}.header-container .header-main-content .header-content-wrapper .profile-container .client-code-container .client-info .value{font-weight:500;color:#0a3d62;font-size:14px}.header-container .header-main-content .header-content-wrapper .client-status-container{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;gap:.5rem;flex-shrink:0}.header-container .header-main-content .header-content-wrapper .client-status-container .status-item{flex:1 1 auto}@media (min-width: 768px){.header-container .header-main-content .header-content-wrapper .client-status-container .status-item{flex:0 0 auto}}.header-container .header-main-content .header-content-wrapper .client-status-container .client-status{height:100%;display:flex;align-items:center;gap:.5rem;border-radius:.625rem;padding:.625rem 1rem;white-space:nowrap;border:.0625rem solid #e6e6e6;background:#fff}.header-container .header-main-content .header-content-wrapper .client-status-container .client-status .title{font-size:.8125rem;color:#666;line-height:0}.header-container .header-main-content .header-content-wrapper .client-status-container .client-status .value{font-weight:700;line-height:100%;font-size:.9375rem;color:#00317a}.view-icon,.hide-icon{cursor:pointer}.view-icon:hover,.hide-icon:hover{opacity:.75}.hide-icon path{fill:#464646}\n"] }]
        }], propDecorators: { clientDetail: [{
                type: Input,
                args: [{ required: true }]
            }], isMaskingPersonal: [{
                type: Input,
                args: [{ required: true }]
            }], viewPersonal: [{
                type: Output
            }], onClickBack: [{
                type: Output
            }] } });

class PlaContainerLayoutComponent {
    menuTabs = [];
    currentTab;
    currentTabChange = new EventEmitter();
    ngOnChanges(change) {
        if (change['menuTabs'] && change['menuTabs'].currentValue) {
            if (change['menuTabs'].currentValue.length > 0) {
                this.currentTab = change['menuTabs'].currentValue[0]?.value;
            }
        }
    }
    onTabChange(event) {
        this.currentTabChange.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaContainerLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaContainerLayoutComponent, isStandalone: true, selector: "pla-container-layout", inputs: { menuTabs: "menuTabs", currentTab: "currentTab" }, outputs: { currentTabChange: "currentTabChange" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"pla-container-layout\">\n  <div class=\"pla-container-layout-header\">\n    <ng-content select=\"[plaHeader]\"></ng-content>\n  </div>\n  <div class=\"pla-container-content\">\n    <div class=\"pla-container-menu\">\n      <p-tabs [(value)]=\"currentTab\" scrollable>\n        <p-tablist>\n          @for (tab of menuTabs; track tab.value) {\n            <p-tab [value]=\"tab.value\" (click)=\"onTabChange(tab.value)\">\n              <svg-icon\n                [src]=\"tab.icon\"\n                [svgStyle]=\"{\n                  'height.rem': 1.5,\n                  'width.rem': 1.5,\n                }\">\n              </svg-icon>\n              {{ tab.label }}</p-tab\n            >\n          }\n        </p-tablist>\n      </p-tabs>\n    </div>\n    <div class=\"pla-container-layout-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TabsModule }, { kind: "component", type: i1$2.Tabs, selector: "p-tabs", inputs: ["value", "scrollable", "lazy", "selectOnFocus", "showNavigators", "tabindex"], outputs: ["valueChange"] }, { kind: "component", type: i1$2.TabList, selector: "p-tablist" }, { kind: "component", type: i1$2.Tab, selector: "p-tab", inputs: ["value", "disabled"], outputs: ["valueChange"] }, { kind: "ngmodule", type: AngularSvgIconModule }, { kind: "component", type: i2$1.SvgIconComponent, selector: "svg-icon", inputs: ["src", "name", "stretch", "applyClass", "svgClass", "class", "viewBox", "svgAriaLabel", "onSVGLoaded", "svgStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaContainerLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-container-layout', standalone: true, imports: [CommonModule, TabsModule, AngularSvgIconModule], template: "<div class=\"pla-container-layout\">\n  <div class=\"pla-container-layout-header\">\n    <ng-content select=\"[plaHeader]\"></ng-content>\n  </div>\n  <div class=\"pla-container-content\">\n    <div class=\"pla-container-menu\">\n      <p-tabs [(value)]=\"currentTab\" scrollable>\n        <p-tablist>\n          @for (tab of menuTabs; track tab.value) {\n            <p-tab [value]=\"tab.value\" (click)=\"onTabChange(tab.value)\">\n              <svg-icon\n                [src]=\"tab.icon\"\n                [svgStyle]=\"{\n                  'height.rem': 1.5,\n                  'width.rem': 1.5,\n                }\">\n              </svg-icon>\n              {{ tab.label }}</p-tab\n            >\n          }\n        </p-tablist>\n      </p-tabs>\n    </div>\n    <div class=\"pla-container-layout-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n" }]
        }], propDecorators: { menuTabs: [{
                type: Input,
                args: [{ required: true }]
            }], currentTab: [{
                type: Input,
                args: [{ required: true }]
            }], currentTabChange: [{
                type: Output
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

class PlaFormBaseComponent {
    listFormGroup;
    control;
    submitted = false;
    index = null;
    isRequired = isRequired;
    classValidate = classValidate;
    ngDoCheck() {
        if (this.submitted && this.listFormGroup && this.control?.formControlName) {
            const ctrl = this.listFormGroup.get(this.control.formControlName);
            if (ctrl && ctrl.invalid && ctrl.pristine) {
                ctrl.markAsDirty();
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormBaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormBaseComponent, isStandalone: true, inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted", index: "index" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormBaseComponent, decorators: [{
            type: Directive
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

class PlaFormSelectComponent extends PlaFormBaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormSelectComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormSelectComponent, isStandalone: true, selector: "pla-form-select", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-select\n      [inputId]=\"control.formControlName\"\n      [attr.name]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      appendTo=\"body\"\n      [id]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"control.data || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      [loading]=\"control.loading\"\n      class=\"w-full\"\n      [showClear]=\"control.clear || false\"\n      [filter]=\"control.filter || false\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event, index) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName, index)\n          : ''\n      \"\n      (onClick)=\"control.onClick ? control.onClick($event, index) : ''\"\n      (onHide)=\"\n        control.onHide ? control.onHide($event, control.formControlName) : ''\n      \"\n    >\n      <ng-template #emptyfilter>\n        <span>Not found</span>\n      </ng-template>\n    </p-select>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: SelectModule }, { kind: "component", type: i4.Select, selector: "p-select", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "loadingIcon", "filterPlaceholder", "filterLocale", "variant", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "checkmark", "dropdownIcon", "loading", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "size", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "fluid", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-select', imports: [CommonModule, ReactiveFormsModule, FloatLabelModule, SelectModule], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-select\n      [inputId]=\"control.formControlName\"\n      [attr.name]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      appendTo=\"body\"\n      [id]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"control.data || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      [loading]=\"control.loading\"\n      class=\"w-full\"\n      [showClear]=\"control.clear || false\"\n      [filter]=\"control.filter || false\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event, index) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName, index)\n          : ''\n      \"\n      (onClick)=\"control.onClick ? control.onClick($event, index) : ''\"\n      (onHide)=\"\n        control.onHide ? control.onHide($event, control.formControlName) : ''\n      \"\n    >\n      <ng-template #emptyfilter>\n        <span>Not found</span>\n      </ng-template>\n    </p-select>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n" }]
        }] });

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

class PlaFormInputTextComponent extends PlaFormBaseComponent {
    formControl;
    valueChange = new EventEmitter();
    onValueChange(newValue) {
        this.control.value = newValue;
        this.valueChange.emit(newValue);
    }
    onHandle(event) { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputTextComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaFormInputTextComponent, isStandalone: true, selector: "pla-form-input-text", inputs: { formControl: "formControl" }, outputs: { valueChange: "valueChange" }, usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"control.formControlName\">\n  <div [formGroup]=\"listFormGroup\">\n    <p-floatlabel variant=\"in\">\n      <p-iconfield\n        [attr.iconPosition]=\"\n          control.classIcon ? (control.iconPosition ?? 'left') : null\n        \"\n      >\n        <!-- Render icon on the LEFT -->\n        @if (control.classIcon && (control.iconPosition ?? \"left\") === \"left\") {\n          <p-inputIcon [class]=\"control.classIcon\"></p-inputIcon>\n        }\n        <input\n          pInputText\n          [formControlName]=\"control.formControlName\"\n          class=\"w-full\"\n          [id]=\"control.formControlName\"\n          [name]=\"control.formControlName\"\n          [readonly]=\"control.readOnly\"\n          [maxlength]=\"control.max || 1000\"\n          [appOverlayText]=\"control.floatingSuffix || ''\"\n          [appCharCount]=\"control.appCharCount && control.max ? control.max : 0\"\n          [inputTypeCount]=\"'input'\"\n          [pKeyFilter]=\"control.keyFilter\"\n          (input)=\"control.onInput ? control.onInput($event, index) : ''\"\n          (onChange)=\"onHandle($event)\"\n          [ngClass]=\"\n            classValidate(\n              listFormGroup.controls[control.formControlName],\n              submitted\n            )\n          \"\n        />\n\n        <!--  (onChange)=\"control.onFormChangeText\n                            ? control.onFormChangeText(\n                                $event,\n                                control,\n                                listFormGroup.controls[control.formControlName]\n                              )\n                            : ''\"  -->\n        <!-- Render icon on the RIGHT -->\n        @if (\n          control.classIcon && (control.iconPosition ?? \"left\") === \"right\"\n        ) {\n          <p-inputIcon [class]=\"control.classIcon\"></p-inputIcon>\n        }\n      </p-iconfield>\n      <label [for]=\"control.formControlName\"\n        >{{ control.label\n        }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n          >*</span\n        ></label\n      >\n    </p-floatlabel>\n  </div>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "component", type: InputIcon, selector: "p-inputicon, p-inputIcon", inputs: ["styleClass"] }, { kind: "ngmodule", type: IconFieldModule }, { kind: "component", type: i4$1.IconField, selector: "p-iconfield, p-iconField, p-icon-field", inputs: ["iconPosition", "styleClass"] }, { kind: "ngmodule", type: InputTextModule }, { kind: "directive", type: i5.InputText, selector: "[pInputText]", inputs: ["variant", "fluid", "pSize"] }, { kind: "ngmodule", type: KeyFilterModule }, { kind: "directive", type: i6.KeyFilter, selector: "[pKeyFilter]", inputs: ["pValidateOnly", "pKeyFilter"], outputs: ["ngModelChange"] }, { kind: "directive", type: OverlayTextDirective, selector: "[appOverlayText]", inputs: ["appOverlayText"] }, { kind: "directive", type: CharCountDirective, selector: "[appCharCount]", inputs: ["appCharCount", "inputTypeCount"] }] });
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
                        KeyFilterModule,
                        OverlayTextDirective,
                        CharCountDirective,
                    ], template: "<ng-container *ngIf=\"control.formControlName\">\n  <div [formGroup]=\"listFormGroup\">\n    <p-floatlabel variant=\"in\">\n      <p-iconfield\n        [attr.iconPosition]=\"\n          control.classIcon ? (control.iconPosition ?? 'left') : null\n        \"\n      >\n        <!-- Render icon on the LEFT -->\n        @if (control.classIcon && (control.iconPosition ?? \"left\") === \"left\") {\n          <p-inputIcon [class]=\"control.classIcon\"></p-inputIcon>\n        }\n        <input\n          pInputText\n          [formControlName]=\"control.formControlName\"\n          class=\"w-full\"\n          [id]=\"control.formControlName\"\n          [name]=\"control.formControlName\"\n          [readonly]=\"control.readOnly\"\n          [maxlength]=\"control.max || 1000\"\n          [appOverlayText]=\"control.floatingSuffix || ''\"\n          [appCharCount]=\"control.appCharCount && control.max ? control.max : 0\"\n          [inputTypeCount]=\"'input'\"\n          [pKeyFilter]=\"control.keyFilter\"\n          (input)=\"control.onInput ? control.onInput($event, index) : ''\"\n          (onChange)=\"onHandle($event)\"\n          [ngClass]=\"\n            classValidate(\n              listFormGroup.controls[control.formControlName],\n              submitted\n            )\n          \"\n        />\n\n        <!--  (onChange)=\"control.onFormChangeText\n                            ? control.onFormChangeText(\n                                $event,\n                                control,\n                                listFormGroup.controls[control.formControlName]\n                              )\n                            : ''\"  -->\n        <!-- Render icon on the RIGHT -->\n        @if (\n          control.classIcon && (control.iconPosition ?? \"left\") === \"right\"\n        ) {\n          <p-inputIcon [class]=\"control.classIcon\"></p-inputIcon>\n        }\n      </p-iconfield>\n      <label [for]=\"control.formControlName\"\n        >{{ control.label\n        }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n          >*</span\n        ></label\n      >\n    </p-floatlabel>\n  </div>\n</ng-container>\n" }]
        }], propDecorators: { formControl: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class PlaFormTextAreaComponent extends PlaFormBaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormTextAreaComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormTextAreaComponent, isStandalone: true, selector: "pla-form-text-area", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <textarea\n      pTextarea\n      [id]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [minLength]=\"control?.min || 0\"\n      [maxLength]=\"control?.max || 1000\"\n      [rows]=\"control?.rows || 5\"\n      [cols]=\"control?.cols || 30\"\n      [appCharCount]=\"control.appCharCount && control.max ? control.max : 0\"\n      [fluid]=\"control?.fluid || true\"\n      [inputTypeCount]=\"\n        control.appCharCount && control.inputTypeCount\n          ? control.inputTypeCount\n          : 'input'\n      \"\n      style=\"resize: none\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n    ></textarea>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: TextareaModule }, { kind: "directive", type: i4$2.Textarea, selector: "[pTextarea]", inputs: ["autoResize", "variant", "fluid", "pSize"], outputs: ["onResize"] }, { kind: "directive", type: CharCountDirective, selector: "[appCharCount]", inputs: ["appCharCount", "inputTypeCount"] }] });
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
        }] });

class PlaFormInputNumberComponent extends PlaFormBaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputNumberComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormInputNumberComponent, isStandalone: true, selector: "pla-form-input-number", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-iconfield>\n      <p-inputNumber\n        class=\"w-full\"\n        mode=\"decimal\"\n        [inputId]=\"control.formControlName\"\n        [name]=\"control.formControlName\"\n        [formControlName]=\"control.formControlName\"\n        [placeholder]=\"control.placeholder || ''\"\n        [suffix]=\"control.suffix || ''\"\n        [prefix]=\"control.prefix || ''\"\n        [minFractionDigits]=\"control?.digit || null\"\n        [maxFractionDigits]=\"control?.digit || null\"\n        [appOverlayText]=\"control.floatingSuffix || ''\"\n        [ngClass]=\"\n          classValidate(\n            listFormGroup.controls[control.formControlName],\n            submitted\n          )\n        \"\n      ></p-inputNumber>\n      <p-inputicon [class]=\"control.classIcon\" />\n    </p-iconfield>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "component", type: InputIcon, selector: "p-inputicon, p-inputIcon", inputs: ["styleClass"] }, { kind: "ngmodule", type: IconFieldModule }, { kind: "component", type: i4$1.IconField, selector: "p-iconfield, p-iconField, p-icon-field", inputs: ["iconPosition", "styleClass"] }, { kind: "ngmodule", type: InputNumberModule }, { kind: "component", type: i5$1.InputNumber, selector: "p-inputNumber, p-inputnumber, p-input-number", inputs: ["showButtons", "format", "buttonLayout", "inputId", "styleClass", "style", "placeholder", "size", "maxlength", "tabindex", "title", "ariaLabelledBy", "ariaLabel", "ariaRequired", "name", "required", "autocomplete", "min", "max", "incrementButtonClass", "decrementButtonClass", "incrementButtonIcon", "decrementButtonIcon", "readonly", "step", "allowEmpty", "locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "variant", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "inputStyle", "inputStyleClass", "showClear", "autofocus", "disabled", "fluid"], outputs: ["onInput", "onFocus", "onBlur", "onKeyDown", "onClear"] }, { kind: "directive", type: OverlayTextDirective, selector: "[appOverlayText]", inputs: ["appOverlayText"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputNumberComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-input-number', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        InputIcon,
                        IconFieldModule,
                        InputNumberModule,
                        OverlayTextDirective,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-iconfield>\n      <p-inputNumber\n        class=\"w-full\"\n        mode=\"decimal\"\n        [inputId]=\"control.formControlName\"\n        [name]=\"control.formControlName\"\n        [formControlName]=\"control.formControlName\"\n        [placeholder]=\"control.placeholder || ''\"\n        [suffix]=\"control.suffix || ''\"\n        [prefix]=\"control.prefix || ''\"\n        [minFractionDigits]=\"control?.digit || null\"\n        [maxFractionDigits]=\"control?.digit || null\"\n        [appOverlayText]=\"control.floatingSuffix || ''\"\n        [ngClass]=\"\n          classValidate(\n            listFormGroup.controls[control.formControlName],\n            submitted\n          )\n        \"\n      ></p-inputNumber>\n      <p-inputicon [class]=\"control.classIcon\" />\n    </p-iconfield>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n" }]
        }] });

class PlaFormRadioComponent extends PlaFormBaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormRadioComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormRadioComponent, isStandalone: true, selector: "pla-form-radio", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <ng-container *ngIf=\"control.formControlName\">\n    <div\n      class=\"flex flex-wrap gap-3 align-items-center justify-content-between w-full\"\n    >\n      <label [for]=\"control.formControlName\">\n        {{ control?.label }}\n      </label>\n\n      <div class=\"flex flex-wrap align-items-center gap-3 radio-button-type\">\n        <ng-container *ngFor=\"let item of control.data\">\n          <div class=\"field-checkbox col-auto\">\n            <p-radiobutton\n              [inputId]=\"control.formControlName + '-' + item.name\"\n              [name]=\"control.formControlName\"\n              [value]=\"item.code\"\n              [formControlName]=\"control.formControlName\"\n              [ngClass]=\"\n                classValidate(\n                  listFormGroup.controls[control.formControlName],\n                  submitted\n                )\n              \"\n              (onClick)=\"\n                control.onClick\n                  ? control.onClick($event, control.formControlName)\n                  : ''\n              \"\n            />\n            <label\n              [for]=\"control.formControlName + '-' + item.name\"\n              class=\"ml-2\"\n              >{{ item.name }}</label\n            >\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "ngmodule", type: RadioButtonModule }, { kind: "component", type: i3$1.RadioButton, selector: "p-radioButton, p-radiobutton, p-radio-button", inputs: ["value", "formControlName", "name", "disabled", "variant", "size", "tabindex", "inputId", "ariaLabelledBy", "ariaLabel", "style", "styleClass", "autofocus", "binary"], outputs: ["onClick", "onFocus", "onBlur"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormRadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-radio', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        RadioButtonModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <ng-container *ngIf=\"control.formControlName\">\n    <div\n      class=\"flex flex-wrap gap-3 align-items-center justify-content-between w-full\"\n    >\n      <label [for]=\"control.formControlName\">\n        {{ control?.label }}\n      </label>\n\n      <div class=\"flex flex-wrap align-items-center gap-3 radio-button-type\">\n        <ng-container *ngFor=\"let item of control.data\">\n          <div class=\"field-checkbox col-auto\">\n            <p-radiobutton\n              [inputId]=\"control.formControlName + '-' + item.name\"\n              [name]=\"control.formControlName\"\n              [value]=\"item.code\"\n              [formControlName]=\"control.formControlName\"\n              [ngClass]=\"\n                classValidate(\n                  listFormGroup.controls[control.formControlName],\n                  submitted\n                )\n              \"\n              (onClick)=\"\n                control.onClick\n                  ? control.onClick($event, control.formControlName)\n                  : ''\n              \"\n            />\n            <label\n              [for]=\"control.formControlName + '-' + item.name\"\n              class=\"ml-2\"\n              >{{ item.name }}</label\n            >\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n" }]
        }] });

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

class PlaFormMultiSelectComponent extends PlaFormBaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormMultiSelectComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormMultiSelectComponent, isStandalone: true, selector: "pla-form-multi-select", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel class=\"h-full\" variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-multiselect\n      [showToggleAll]=\"!control.disableToggleAll\"\n      [inputId]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [display]=\"control.display || 'comma'\"\n      [maxSelectedLabels]=\"control.maxSelectedLabels || null\"\n      selectedItemsLabel=\"{0} items selected\"\n      [filter]=\"true\"\n      appendTo=\"body\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"control.data || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      class=\"w-full h-full\"\n      [optionDisabled]=\"'disabled'\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName)\n          : ''\n      \"\n    >\n    </p-multiselect>\n    <label [for]=\"control.formControlName\">\n      {{ control.label }}\n      <span *ngIf=\"isRequired(control.formControlName, listFormGroup)\">*</span>\n    </label>\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: MultiSelectModule }, { kind: "component", type: i4$3.MultiSelect, selector: "p-multiSelect, p-multiselect, p-multi-select", inputs: ["id", "ariaLabel", "style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "fluid", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "variant", "appendTo", "dataKey", "name", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "chipIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "filterBy", "scrollHeight", "lazy", "virtualScroll", "loading", "virtualScrollItemSize", "loadingIcon", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "size", "showClear", "autofocus", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "defaultLabel", "placeholder", "options", "filterValue", "itemSize", "selectAll", "focusOnHover", "filterFields", "selectOnFocus", "autoOptionFocus"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide", "onLazyLoad", "onRemove", "onSelectAllChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormMultiSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-multi-select', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        MultiSelectModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel class=\"h-full\" variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-multiselect\n      [showToggleAll]=\"!control.disableToggleAll\"\n      [inputId]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [display]=\"control.display || 'comma'\"\n      [maxSelectedLabels]=\"control.maxSelectedLabels || null\"\n      selectedItemsLabel=\"{0} items selected\"\n      [filter]=\"true\"\n      appendTo=\"body\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"control.data || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      class=\"w-full h-full\"\n      [optionDisabled]=\"'disabled'\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName)\n          : ''\n      \"\n    >\n    </p-multiselect>\n    <label [for]=\"control.formControlName\">\n      {{ control.label }}\n      <span *ngIf=\"isRequired(control.formControlName, listFormGroup)\">*</span>\n    </label>\n  </p-floatlabel>\n</ng-container>\n" }]
        }] });

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
            if (arg?.minLength !== undefined) {
                return `${baseMessage} ${arg.minLength} characters`;
            }
            if (arg?.maxLength !== undefined) {
                return `${baseMessage} ${arg.maxLength} characters`;
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
    MINLENGTH: 'This field must be at least',
    MAXLENGTH: 'This field must be at maximum',
};

class PlaFormErrorMessageComponent {
    listFormGroup;
    control;
    submitted = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormErrorMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaFormErrorMessageComponent, isStandalone: true, selector: "pla-form-error-message", inputs: { listFormGroup: "listFormGroup", control: "control", submitted: "submitted" }, ngImport: i0, template: "<!-- Error Message Section -->\n@if (control.formControlName) {\n<div class=\"text-left mt-0\">\n  <!-- Required -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['required'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n    id=\"{{ control.formControlName }}Required\"\n  >\n    {{ \"REQUIRED\" | plaMessage }}</p-message\n  >\n\n  <!-- MAX -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}max\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['max'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MAXVALUE\" | plaMessage : { maxValue: listFormGroup.get(control.formControlName)?.errors?.['max'].max } }}\n    {{ listFormGroup.get(control.formControlName)?.errors?.['max'].message }}</p-message\n  >\n\n  <!-- MIN -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}min\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['min'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MINVALUE\" | plaMessage : { minValue: listFormGroup.get(control.formControlName)?.errors?.['min'].min } }}\n    {{ listFormGroup.get(control.formControlName)?.errors?.['min'].message }}</p-message\n  >\n\n  <!-- MIN LENGTH -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}minlength\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['minlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MINLENGTH\" | plaMessage : { minLength: listFormGroup.get(control.formControlName)?.errors?.['minlength'].requiredLength } }}</p-message\n  >\n\n  <!-- MAX LENGTH -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}maxlength\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['maxlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MAXLENGTH\" | plaMessage : { maxLength: listFormGroup.get(control.formControlName)?.errors?.['maxlength'].requiredLength } }}</p-message\n  >\n\n  <!--  Error from custom validator -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}errorMessage\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['errorMessage']  && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ listFormGroup.get(control.formControlName)?.errors?.['errorMessage'].message }}</p-message\n  >\n\n  <!-- <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}asciiOnly\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['asciiOnly'] === true && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ control?.msgCustom }}</p-message\n  > -->\n\n  <!-- Not allow available data -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}valueNotAllowed\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ listFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'].value }}\n            is already in use.</p-message\n          > -->\n\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}upperCaseEnOnly\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'].message }}</p-message\n          > -->\n  <!-- {{listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] | json}} -->\n  <!-- MESSAGE REQUIRED -->\n\n  <!-- MESSAGE MIN LENGTH -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!listFormGroup.get(control.formControlName)?.errors?.['pattern'] && listFormGroup.get(control.formControlName)?.errors?.['minlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Minlength\"\n          >\n            {{ \"MINIMUM\" | plaMessage : { max: control?.max } }}</p-message\n          > -->\n\n  <!-- MESSAGE MAX LENGTH -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!listFormGroup.get(control.formControlName)?.errors?.['pattern'] && listFormGroup.get(control.formControlName)?.errors?.['maxlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Maxlength\"\n          >\n            {{ \"MAXIMUM\" | plaMessage : { min: control?.min } }}</p-message\n          > -->\n  <!-- RANGE PATTEN -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !listFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              (\n                listFormGroup.get(control.formControlName)?.errors?.['minTooHigh'] ||\n                listFormGroup.get(control.formControlName)?.errors?.['maxTooLow']\n              ) &&\n              (listFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-validator\"\n          >\n            {{\n              \"RANGE\" | plaMessage : { range: control.rangeLabel }\n            }}</p-message\n          > -->\n\n  <!-- RANGE REQUIRED PATTEN -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !listFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              !listFormGroup.get(control.formControlName)?.errors?.['required'] &&\n              (\n                listFormGroup.get(control.formControlName)?.errors?.['minRequired'] ||\n                listFormGroup.get(control.formControlName)?.errors?.['maxRequired']\n              ) &&\n              (listFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-required-validator\"\n          >\n            {{ \"REQUIRED\" | plaMessage }}</p-message\n          > -->\n\n  <!-- MESSAGE PATTEN -->\n\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}Pattern\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['pattern'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{\n              \"PATTERN\" | plaMessage : { pattern: control?.msgCustom }\n            }}</p-message\n          > -->\n</div>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: Message, selector: "p-message", inputs: ["severity", "text", "escape", "style", "styleClass", "closable", "icon", "closeIcon", "life", "showTransitionOptions", "hideTransitionOptions", "size", "variant"], outputs: ["onClose"] }, { kind: "pipe", type: PlaMessageMappingPipe, name: "plaMessage" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormErrorMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-error-message', imports: [CommonModule, Message, PlaMessageMappingPipe], template: "<!-- Error Message Section -->\n@if (control.formControlName) {\n<div class=\"text-left mt-0\">\n  <!-- Required -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['required'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n    id=\"{{ control.formControlName }}Required\"\n  >\n    {{ \"REQUIRED\" | plaMessage }}</p-message\n  >\n\n  <!-- MAX -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}max\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['max'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MAXVALUE\" | plaMessage : { maxValue: listFormGroup.get(control.formControlName)?.errors?.['max'].max } }}\n    {{ listFormGroup.get(control.formControlName)?.errors?.['max'].message }}</p-message\n  >\n\n  <!-- MIN -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}min\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['min'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MINVALUE\" | plaMessage : { minValue: listFormGroup.get(control.formControlName)?.errors?.['min'].min } }}\n    {{ listFormGroup.get(control.formControlName)?.errors?.['min'].message }}</p-message\n  >\n\n  <!-- MIN LENGTH -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}minlength\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['minlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MINLENGTH\" | plaMessage : { minLength: listFormGroup.get(control.formControlName)?.errors?.['minlength'].requiredLength } }}</p-message\n  >\n\n  <!-- MAX LENGTH -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}maxlength\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['maxlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ \"MAXLENGTH\" | plaMessage : { maxLength: listFormGroup.get(control.formControlName)?.errors?.['maxlength'].requiredLength } }}</p-message\n  >\n\n  <!--  Error from custom validator -->\n  <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}errorMessage\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['errorMessage']  && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ listFormGroup.get(control.formControlName)?.errors?.['errorMessage'].message }}</p-message\n  >\n\n  <!-- <p-message\n    severity=\"error\"\n    variant=\"simple\"\n    size=\"small\"\n    id=\"{{ control.formControlName }}asciiOnly\"\n    *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['asciiOnly'] === true && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n  >\n    {{ control?.msgCustom }}</p-message\n  > -->\n\n  <!-- Not allow available data -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}valueNotAllowed\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ listFormGroup.get(control.formControlName)?.errors?.['valueNotAllowed'].value }}\n            is already in use.</p-message\n          > -->\n\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}upperCaseEnOnly\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{ listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'].message }}</p-message\n          > -->\n  <!-- {{listFormGroup.get(control.formControlName)?.errors?.['upperCaseEnOnly'] | json}} -->\n  <!-- MESSAGE REQUIRED -->\n\n  <!-- MESSAGE MIN LENGTH -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!listFormGroup.get(control.formControlName)?.errors?.['pattern'] && listFormGroup.get(control.formControlName)?.errors?.['minlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Minlength\"\n          >\n            {{ \"MINIMUM\" | plaMessage : { max: control?.max } }}</p-message\n          > -->\n\n  <!-- MESSAGE MAX LENGTH -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"!listFormGroup.get(control.formControlName)?.errors?.['pattern'] && listFormGroup.get(control.formControlName)?.errors?.['maxlength'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n            id=\"{{ control.formControlName }}Maxlength\"\n          >\n            {{ \"MAXIMUM\" | plaMessage : { min: control?.min } }}</p-message\n          > -->\n  <!-- RANGE PATTEN -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !listFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              (\n                listFormGroup.get(control.formControlName)?.errors?.['minTooHigh'] ||\n                listFormGroup.get(control.formControlName)?.errors?.['maxTooLow']\n              ) &&\n              (listFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-validator\"\n          >\n            {{\n              \"RANGE\" | plaMessage : { range: control.rangeLabel }\n            }}</p-message\n          > -->\n\n  <!-- RANGE REQUIRED PATTEN -->\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            *ngIf=\"\n              !listFormGroup.get(control.formControlName)?.errors?.['pattern'] &&\n              !listFormGroup.get(control.formControlName)?.errors?.['required'] &&\n              (\n                listFormGroup.get(control.formControlName)?.errors?.['minRequired'] ||\n                listFormGroup.get(control.formControlName)?.errors?.['maxRequired']\n              ) &&\n              (listFormGroup.get(control.formControlName)?.dirty || submitted)\n            \"\n            id=\"{{ control.formControlName }}-min-max-required-validator\"\n          >\n            {{ \"REQUIRED\" | plaMessage }}</p-message\n          > -->\n\n  <!-- MESSAGE PATTEN -->\n\n  <!-- <p-message\n            severity=\"error\"\n            variant=\"simple\"\n            size=\"small\"\n            id=\"{{ control.formControlName }}Pattern\"\n            *ngIf=\"listFormGroup.get(control.formControlName)?.errors?.['pattern'] && (listFormGroup.get(control.formControlName)?.dirty || submitted)\"\n          >\n            {{\n              \"PATTERN\" | plaMessage : { pattern: control?.msgCustom }\n            }}</p-message\n          > -->\n</div>\n}\n" }]
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

class PlaFormDatePickerComponent extends PlaFormBaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormDatePickerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormDatePickerComponent, isStandalone: true, selector: "pla-form-date-picker", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel class=\"h-full\" variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-datepicker\n      appendTo=\"body\"\n      [inputId]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [placeholder]=\"control.placeholder\"\n      showIcon\n      [dateFormat]=\"control.dateFormat || 'dd-mm-yy'\"\n      [showTime]=\"control.showTime || false\"\n      [hourFormat]=\"control.hourFormat || '24'\"\n      [showButtonBar]=\"control.showButtonBar || false\"\n      [minDate]=\"\n        control.minDate ? listFormGroup.get(control.minDate)?.value : null\n      \"\n      [maxDate]=\"\n        control.maxDate ? listFormGroup.get(control.maxDate)?.value : null\n      \"\n      [selectionMode]=\"control.selectionMode || 'single'\"\n      [readonlyInput]=\"control.readonlyInput || false\"\n      [fluid]=\"control.fluid || true\"\n      iconDisplay=\"input\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n    />\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\">*</span></label\n    >\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: DatePickerModule }, { kind: "component", type: i4$4.DatePicker, selector: "p-datePicker, p-datepicker, p-date-picker", inputs: ["iconDisplay", "style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "ariaLabel", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "fluid", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "startWeekFromFirstDayOfYear", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autofocus", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "variant", "size", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale", "view", "defaultDate"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-date-picker', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        DatePickerModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel class=\"h-full\" variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-datepicker\n      appendTo=\"body\"\n      [inputId]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [placeholder]=\"control.placeholder\"\n      showIcon\n      [dateFormat]=\"control.dateFormat || 'dd-mm-yy'\"\n      [showTime]=\"control.showTime || false\"\n      [hourFormat]=\"control.hourFormat || '24'\"\n      [showButtonBar]=\"control.showButtonBar || false\"\n      [minDate]=\"\n        control.minDate ? listFormGroup.get(control.minDate)?.value : null\n      \"\n      [maxDate]=\"\n        control.maxDate ? listFormGroup.get(control.maxDate)?.value : null\n      \"\n      [selectionMode]=\"control.selectionMode || 'single'\"\n      [readonlyInput]=\"control.readonlyInput || false\"\n      [fluid]=\"control.fluid || true\"\n      iconDisplay=\"input\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n    />\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\">*</span></label\n    >\n  </p-floatlabel>\n</ng-container>\n" }]
        }] });

class PlaFormToggleSwitchComponent extends PlaFormBaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormToggleSwitchComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormToggleSwitchComponent, isStandalone: true, selector: "pla-form-toggle-switch", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <ng-container *ngIf=\"control.formControlName\">\n    <div\n      class=\"flex flex-wrap gap-3 align-items-center justify-content-between w-full\"\n    >\n      <div class=\"flex flex-wrap gap-3 radio-button-type\">\n        <p-toggleswitch\n          [inputId]=\"control.formControlName\"\n          [formControlName]=\"control.formControlName\"\n          [disabled]=\"control.disabled || false\"\n          [trueValue]=\"control.trueValue || true\"\n          [falseValue]=\"control.falseValue || false\"\n          [ngClass]=\"\n            classValidate(\n              listFormGroup.controls[control.formControlName],\n              submitted\n            )\n          \"\n          (onChange)=\"\n            control.onFormToggleChange\n              ? control.onFormToggleChange($event, control.formControlName)\n              : ''\n          \"\n        />\n        <label [for]=\"control.formControlName\" class=\"ml-2\">{{\n          control.label\n        }}</label>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "ngmodule", type: ToggleSwitchModule }, { kind: "component", type: i3$3.ToggleSwitch, selector: "p-toggleswitch, p-toggleSwitch, p-toggle-switch", inputs: ["style", "styleClass", "tabindex", "inputId", "name", "disabled", "readonly", "trueValue", "falseValue", "ariaLabel", "ariaLabelledBy", "autofocus"], outputs: ["onChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormToggleSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-toggle-switch', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FloatLabelModule,
                        ToggleSwitchModule,
                    ], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <ng-container *ngIf=\"control.formControlName\">\n    <div\n      class=\"flex flex-wrap gap-3 align-items-center justify-content-between w-full\"\n    >\n      <div class=\"flex flex-wrap gap-3 radio-button-type\">\n        <p-toggleswitch\n          [inputId]=\"control.formControlName\"\n          [formControlName]=\"control.formControlName\"\n          [disabled]=\"control.disabled || false\"\n          [trueValue]=\"control.trueValue || true\"\n          [falseValue]=\"control.falseValue || false\"\n          [ngClass]=\"\n            classValidate(\n              listFormGroup.controls[control.formControlName],\n              submitted\n            )\n          \"\n          (onChange)=\"\n            control.onFormToggleChange\n              ? control.onFormToggleChange($event, control.formControlName)\n              : ''\n          \"\n        />\n        <label [for]=\"control.formControlName\" class=\"ml-2\">{{\n          control.label\n        }}</label>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n" }]
        }] });

class PlaFormInputGroupComponent extends PlaFormBaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputGroupComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaFormInputGroupComponent, isStandalone: true, selector: "pla-form-input-group", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  @if (control.formControlName) {\n  <p-floatlabel variant=\"in\">\n    <p-iconfield>\n      <div class=\"relative w-full\">\n        <p-inputNumber\n          class=\"w-full pr-24\"\n          [inputId]=\"control.formControlName\"\n          [name]=\"control.formControlName\"\n          [formControlName]=\"control.formControlName\"\n          [min]=\"control?.min || 0\"\n          [ngClass]=\"\n            classValidate(\n              listFormGroup.controls[control.formControlName],\n              submitted\n            )\n          \"\n        />\n\n        <p-selectbutton\n          [id]=\"control.subFormControlName\"\n          class=\"select-button\"\n          [ngClass]=\"{\n            'cursor-not-allowed':\n              listFormGroup.controls[control.subFormControlName].disabled\n          }\"\n          *ngIf=\"control.subFormControlName && !control.isViewMode\"\n          [formControlName]=\"control.subFormControlName\"\n          [options]=\"control.data\"\n          [optionLabel]=\"control.optionLabel || 'name'\"\n          [optionValue]=\"control.optionValue || 'code'\"\n          aria-labelledby=\"basic\"\n          (onOptionClick)=\"\n            control.onClick\n              ? control.onClick(\n                  listFormGroup.controls[control.subFormControlName].value,\n                  index\n                )\n              : ''\n          \"\n        >\n          <ng-template pTemplate=\"item\" let-option let-i=\"index\">\n            <div\n              class=\"p-button-label\"\n              [attr.data-id]=\"control.subFormControlName + '-' + i\"\n            >\n              {{ option[control.optionLabel || \"name\"] }}\n            </div>\n          </ng-template>\n        </p-selectbutton>\n      </div>\n    </p-iconfield>\n\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\">*</span></label\n    >\n  </p-floatlabel>\n  }\n</ng-container>\n", styles: [".select-button{position:absolute;top:50%;right:.5rem;transform:translateY(-50%);z-index:1;padding:.0125rem 0rem;border-radius:.4625rem;box-shadow:0 5.8px 11.6px #e5e5e533}.select-text{position:absolute;top:50%;right:1.25rem;transform:translateY(-50%);z-index:1;color:var(--p-inputtext-disabled-color)}.cursor-not-allowed{cursor:not-allowed!important}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "directive", type: i2$2.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "ngmodule", type: IconFieldModule }, { kind: "component", type: i4$1.IconField, selector: "p-iconfield, p-iconField, p-icon-field", inputs: ["iconPosition", "styleClass"] }, { kind: "ngmodule", type: InputNumberModule }, { kind: "component", type: i5$1.InputNumber, selector: "p-inputNumber, p-inputnumber, p-input-number", inputs: ["showButtons", "format", "buttonLayout", "inputId", "styleClass", "style", "placeholder", "size", "maxlength", "tabindex", "title", "ariaLabelledBy", "ariaLabel", "ariaRequired", "name", "required", "autocomplete", "min", "max", "incrementButtonClass", "decrementButtonClass", "incrementButtonIcon", "decrementButtonIcon", "readonly", "step", "allowEmpty", "locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "variant", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "inputStyle", "inputStyleClass", "showClear", "autofocus", "disabled", "fluid"], outputs: ["onInput", "onFocus", "onBlur", "onKeyDown", "onClear"] }, { kind: "component", type: SelectButton, selector: "p-selectButton, p-selectbutton, p-select-button", inputs: ["options", "optionLabel", "optionValue", "optionDisabled", "unselectable", "tabindex", "multiple", "allowEmpty", "style", "styleClass", "ariaLabelledBy", "size", "disabled", "dataKey", "autofocus"], outputs: ["onOptionClick", "onChange"] }, { kind: "ngmodule", type: ButtonModule }, { kind: "ngmodule", type: ToggleButtonModule }] });
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
        }] });

class PlaFormSelectObsComponent extends PlaFormBaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormSelectObsComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaFormSelectObsComponent, isStandalone: true, selector: "pla-form-select-obs", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-select\n      [inputId]=\"control.formControlName\"\n      [attr.name]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      appendTo=\"body\"\n      [id]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"(control.data$ | async) || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      [loading]=\"control.loading\"\n      class=\"w-full\"\n      [showClear]=\"control.clear || false\"\n      [filter]=\"control.filter || false\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event, index) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName, index)\n          : ''\n      \"\n      (onClick)=\"control.onClick ? control.onClick($event, index) : ''\"\n      (onHide)=\"\n        control.onHide ? control.onHide($event, control.formControlName) : ''\n      \"\n    >\n      <ng-template #emptyfilter>\n        <span>Not found</span>\n      </ng-template>\n    </p-select>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1$1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: FloatLabelModule }, { kind: "component", type: i3.FloatLabel, selector: "p-floatlabel, p-floatLabel, p-float-label", inputs: ["variant"] }, { kind: "ngmodule", type: SelectModule }, { kind: "component", type: i4.Select, selector: "p-select", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "loadingIcon", "filterPlaceholder", "filterLocale", "variant", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "checkmark", "dropdownIcon", "loading", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "size", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "fluid", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormSelectObsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-select-obs', imports: [CommonModule, ReactiveFormsModule, FloatLabelModule, SelectModule], template: "<ng-container [formGroup]=\"listFormGroup\">\n  <p-floatlabel variant=\"in\" *ngIf=\"control.formControlName\">\n    <p-select\n      [inputId]=\"control.formControlName\"\n      [attr.name]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      appendTo=\"body\"\n      [id]=\"control.formControlName\"\n      [name]=\"control.formControlName\"\n      [formControlName]=\"control.formControlName\"\n      [inputId]=\"control.formControlName\"\n      [options]=\"(control.data$ | async) || []\"\n      [optionLabel]=\"control.optionLabel || 'name'\"\n      [optionValue]=\"control.optionValue || 'code'\"\n      [loading]=\"control.loading\"\n      class=\"w-full\"\n      [showClear]=\"control.clear || false\"\n      [filter]=\"control.filter || false\"\n      [ngClass]=\"\n        classValidate(\n          listFormGroup.controls[control.formControlName],\n          submitted\n        )\n      \"\n      (onFilter)=\"control.onFilter ? control.onFilter($event, index) : ''\"\n      (onChange)=\"\n        control.onChange\n          ? control.onChange($event, control.formControlName, index)\n          : ''\n      \"\n      (onClick)=\"control.onClick ? control.onClick($event, index) : ''\"\n      (onHide)=\"\n        control.onHide ? control.onHide($event, control.formControlName) : ''\n      \"\n    >\n      <ng-template #emptyfilter>\n        <span>Not found</span>\n      </ng-template>\n    </p-select>\n    <label [for]=\"control.formControlName\"\n      >{{ control.label\n      }}<span *ngIf=\"isRequired(control.formControlName, listFormGroup)\"\n        >*</span\n      ></label\n    >\n  </p-floatlabel>\n</ng-container>\n" }]
        }] });

class PlaDynamicForm {
    listFormGroup;
    listFormDesign = [];
    submitted = false;
    loading = false;
    index = null; // For Input form array only
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaDynamicForm, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaDynamicForm, isStandalone: true, selector: "pla-dynamic-form", inputs: { listFormGroup: "listFormGroup", listFormDesign: "listFormDesign", submitted: "submitted", loading: "loading", index: "index" }, ngImport: i0, template: "<form class=\"grid w-full m-0\">\n  <ng-container *ngFor=\"let control of listFormDesign\">\n    <div\n      *ngIf=\"!control?.hidden\"\n      class=\"{{ control?.class || 'row' }}\"\n      [attr.data-type]=\"control?.type\"\n    >\n      <ng-container\n        *ngIf=\"!loading || control?.type === 'empty'; else loadingTemplate\"\n      >\n        <ng-container [ngSwitch]=\"control?.type\">\n          <!-- EMPTY -->\n          <div *ngSwitchCase=\"'empty'\" class=\"w-full\"></div>\n\n          <!-- INPUT TEXT -->\n          <div *ngSwitchCase=\"'text'\">\n            <pla-form-input-text\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n              [index]=\"index\"\n            />\n          </div>\n\n          <!-- INPUT NUMBER -->\n          <div *ngSwitchCase=\"'number'\">\n            <pla-form-input-number\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- TEXTAREA -->\n          <div *ngSwitchCase=\"'textarea'\">\n            <pla-form-text-area\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- SELECT -->\n          <div class=\"w-full\" *ngSwitchCase=\"'select'\">\n            <pla-form-select\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n              [index]=\"index\"\n            />\n          </div>\n\n          <!-- SELECT OBS -->\n          <div class=\"w-full\" *ngSwitchCase=\"'select-obs'\">\n            <pla-form-select-obs\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n              [index]=\"index\"\n            />\n          </div>\n\n          <!-- MULTI-SELECT -->\n          <div class=\"h-full\" *ngSwitchCase=\"'multiselect'\">\n            <pla-form-multi-select\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- RADIO -->\n          <div *ngSwitchCase=\"'radio'\">\n            <pla-form-radio\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- CHECKBOX -->\n          <div *ngSwitchCase=\"'checkbox'\">\n            <pla-form-checkbox\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- DATE PICKER -->\n          <div *ngSwitchCase=\"'datepicker'\">\n            <pla-form-date-picker\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- TOGGLE SWITCH -->\n          <div *ngSwitchCase=\"'toggleswitch'\">\n            <pla-form-toggle-switch\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- INPUT GROUP NUMBER -->\n          <div *ngSwitchCase=\"'input-group'\">\n            <pla-form-input-group\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n              [index]=\"index\"\n            />\n          </div>\n\n          <pla-form-error-message\n            [control]=\"control\"\n            [listFormGroup]=\"listFormGroup\"\n            [submitted]=\"submitted\"\n          />\n\n          <!-- Input Group -->\n          <!-- <div *ngSwitchCase=\"'input-group'\">\n              <p-floatlabel variant=\"in\">\n                <p-iconfield>\n                  <div class=\"relative w-full\">\n                    <p-inputNumber\n                      class=\"w-full pr-24\"\n                      [inputId]=\"control.formControlName\"\n                      [name]=\"control.formControlName\"\n                      [formControlName]=\"control.formControlName\"\n                      [min]=\"control?.min || 0\"\n                      [ngClass]=\"\n                        classValidate(\n                          lisFormGroup.controls[control.formControlName],\n                          submitted\n                        )\n                      \"\n                    />\n                    <div class=\"select-text\" *ngIf=\"control.isViewMode\">\n                      {{\n                        getSelectedValue(\n                          control.data,\n                          lisFormGroup.controls[control.subFormControlName]\n                            .value\n                        )\n                      }}\n                    </div>\n\n                    <p-selectbutton\n                      class=\"select-button\"\n                      [ngClass]=\"{\n                        'cursor-not-allowed':\n                          lisFormGroup.controls[control.subFormControlName]\n                            .disabled\n                      }\"\n                      *ngIf=\"control.subFormControlName && !control.isViewMode\"\n                      [formControlName]=\"control.subFormControlName\"\n                      [options]=\"control.data\"\n                      [optionLabel]=\"control.optionLabel || 'name'\"\n                      [optionValue]=\"control.optionValue || 'code'\"\n                      aria-labelledby=\"basic\"\n                      (click)=\"\n                        control?.onClick\n                          ? control.onClick(\n                              lisFormGroup.controls[control.subFormControlName]\n                                .value\n                            )\n                          : ''\n                      \"\n                    />\n                  </div>\n                </p-iconfield>\n\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n          <!-- SELECT BUTTON -->\n          <!-- <div *ngSwitchCase=\"'select-button'\">\n              <p-selectbutton\n                [formControlName]=\"control.formControlName\"\n                [options]=\"control.data\"\n                [optionLabel]=\"control.optionLabel || 'name'\"\n                [optionValue]=\"control.optionValue || 'code'\"\n                aria-labelledby=\"basic\"\n                (onClick)=\"\n                  control?.onClick\n                    ? control.onClick($event, control.formControlName)\n                    : ''\n                \"\n              />\n            </div> -->\n\n          <!-- DATEPICKER -->\n          <!-- <div *ngSwitchCase=\"'datepicker'\">\n              <p-floatlabel variant=\"in\">\n                <p-datepicker\n                  appendTo=\"body\"\n                  [inputId]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [formControlName]=\"control.formControlName\"\n                  [placeholder]=\"control.placeholder\"\n                  showIcon\n                  [dateFormat]=\"control.dateFormat || 'dd-mm-yy'\"\n                  [showTime]=\"control.showTime || false\"\n                  [hourFormat]=\"control.hourFormat || '24'\"\n                  [showButtonBar]=\"control.showButtonBar || false\"\n                  [minDate]=\"lisFormGroup.get(control.minDate)?.value || null\"\n                  [maxDate]=\"lisFormGroup.get(control.maxDate)?.value || null\"\n                  [selectionMode]=\"control.selectionMode || 'single'\"\n                  [readonlyInput]=\"control.readonlyInput || false\"\n                  [fluid]=\"control.fluid || true\"\n                  iconDisplay=\"input\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n          <!-- DROPDOWN AUTO-COMPLETE -->\n          <!-- <div *ngSwitchCase=\"'dropdown'\">\n              <p-floatlabel variant=\"in\">\n                <p-autocomplete\n                  [inputId]=\"control.formControlName\"\n                  [attr.name]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  appendTo=\"body\"\n                  [formControlName]=\"control.formControlName\"\n                  [inputId]=\"control.formControlName\"\n                  optionLabel=\"name\"\n                  optionValue=\"code\"\n                  [dropdown]=\"true\"\n                  [suggestions]=\"options || []\"\n                  class=\"w-full\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                  (completeMethod)=\"\n                    control?.completeMethod\n                      ? control.completeMethod($event)\n                      : ''\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n        </ng-container>\n      </ng-container>\n      <ng-template #loadingTemplate>\n        <p-skeleton width=\"100%\" borderRadius=\"1rem\" />\n      </ng-template>\n    </div>\n  </ng-container>\n</form>\n", styles: ["input[readonly]{background-color:#e6e6e6;color:#666;cursor:not-allowed;border:1px solid #ccc}h6{white-space:normal;text-wrap:auto;word-break:normal}.group-checkbox-container{border-radius:10px;border:1px solid #e6e6e6;background:#fff;padding:30px}.checkbox-item{border-radius:10px;border:1px solid #e6e6e6;background:#fff;padding:14px}.input-group-number .p-select{height:2rem!important;padding:0 .25rem;width:auto;max-width:100%}.input-group-number ::ng-deep .p-select-label{padding:0!important}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "component", type: PlaFormInputTextComponent, selector: "pla-form-input-text", inputs: ["formControl"], outputs: ["valueChange"] }, { kind: "component", type: PlaFormInputNumberComponent, selector: "pla-form-input-number" }, { kind: "component", type: PlaFormTextAreaComponent, selector: "pla-form-text-area" }, { kind: "component", type: PlaFormMultiSelectComponent, selector: "pla-form-multi-select" }, { kind: "component", type: PlaFormSelectComponent, selector: "pla-form-select" }, { kind: "component", type: PlaFormSelectObsComponent, selector: "pla-form-select-obs" }, { kind: "component", type: PlaFormRadioComponent, selector: "pla-form-radio" }, { kind: "component", type: PlaFormCheckboxComponent, selector: "pla-form-checkbox", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "component", type: PlaFormDatePickerComponent, selector: "pla-form-date-picker" }, { kind: "component", type: PlaFormToggleSwitchComponent, selector: "pla-form-toggle-switch" }, { kind: "component", type: PlaFormInputGroupComponent, selector: "pla-form-input-group" }, { kind: "component", type: PlaFormErrorMessageComponent, selector: "pla-form-error-message", inputs: ["listFormGroup", "control", "submitted"] }, { kind: "ngmodule", type: SkeletonModule }, { kind: "component", type: i3$4.Skeleton, selector: "p-skeleton", inputs: ["styleClass", "style", "shape", "animation", "borderRadius", "size", "width", "height"] }] });
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
                    ], standalone: true, template: "<form class=\"grid w-full m-0\">\n  <ng-container *ngFor=\"let control of listFormDesign\">\n    <div\n      *ngIf=\"!control?.hidden\"\n      class=\"{{ control?.class || 'row' }}\"\n      [attr.data-type]=\"control?.type\"\n    >\n      <ng-container\n        *ngIf=\"!loading || control?.type === 'empty'; else loadingTemplate\"\n      >\n        <ng-container [ngSwitch]=\"control?.type\">\n          <!-- EMPTY -->\n          <div *ngSwitchCase=\"'empty'\" class=\"w-full\"></div>\n\n          <!-- INPUT TEXT -->\n          <div *ngSwitchCase=\"'text'\">\n            <pla-form-input-text\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n              [index]=\"index\"\n            />\n          </div>\n\n          <!-- INPUT NUMBER -->\n          <div *ngSwitchCase=\"'number'\">\n            <pla-form-input-number\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- TEXTAREA -->\n          <div *ngSwitchCase=\"'textarea'\">\n            <pla-form-text-area\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- SELECT -->\n          <div class=\"w-full\" *ngSwitchCase=\"'select'\">\n            <pla-form-select\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n              [index]=\"index\"\n            />\n          </div>\n\n          <!-- SELECT OBS -->\n          <div class=\"w-full\" *ngSwitchCase=\"'select-obs'\">\n            <pla-form-select-obs\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n              [index]=\"index\"\n            />\n          </div>\n\n          <!-- MULTI-SELECT -->\n          <div class=\"h-full\" *ngSwitchCase=\"'multiselect'\">\n            <pla-form-multi-select\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- RADIO -->\n          <div *ngSwitchCase=\"'radio'\">\n            <pla-form-radio\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- CHECKBOX -->\n          <div *ngSwitchCase=\"'checkbox'\">\n            <pla-form-checkbox\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- DATE PICKER -->\n          <div *ngSwitchCase=\"'datepicker'\">\n            <pla-form-date-picker\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- TOGGLE SWITCH -->\n          <div *ngSwitchCase=\"'toggleswitch'\">\n            <pla-form-toggle-switch\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n            />\n          </div>\n\n          <!-- INPUT GROUP NUMBER -->\n          <div *ngSwitchCase=\"'input-group'\">\n            <pla-form-input-group\n              [control]=\"control\"\n              [listFormGroup]=\"listFormGroup\"\n              [submitted]=\"submitted\"\n              [index]=\"index\"\n            />\n          </div>\n\n          <pla-form-error-message\n            [control]=\"control\"\n            [listFormGroup]=\"listFormGroup\"\n            [submitted]=\"submitted\"\n          />\n\n          <!-- Input Group -->\n          <!-- <div *ngSwitchCase=\"'input-group'\">\n              <p-floatlabel variant=\"in\">\n                <p-iconfield>\n                  <div class=\"relative w-full\">\n                    <p-inputNumber\n                      class=\"w-full pr-24\"\n                      [inputId]=\"control.formControlName\"\n                      [name]=\"control.formControlName\"\n                      [formControlName]=\"control.formControlName\"\n                      [min]=\"control?.min || 0\"\n                      [ngClass]=\"\n                        classValidate(\n                          lisFormGroup.controls[control.formControlName],\n                          submitted\n                        )\n                      \"\n                    />\n                    <div class=\"select-text\" *ngIf=\"control.isViewMode\">\n                      {{\n                        getSelectedValue(\n                          control.data,\n                          lisFormGroup.controls[control.subFormControlName]\n                            .value\n                        )\n                      }}\n                    </div>\n\n                    <p-selectbutton\n                      class=\"select-button\"\n                      [ngClass]=\"{\n                        'cursor-not-allowed':\n                          lisFormGroup.controls[control.subFormControlName]\n                            .disabled\n                      }\"\n                      *ngIf=\"control.subFormControlName && !control.isViewMode\"\n                      [formControlName]=\"control.subFormControlName\"\n                      [options]=\"control.data\"\n                      [optionLabel]=\"control.optionLabel || 'name'\"\n                      [optionValue]=\"control.optionValue || 'code'\"\n                      aria-labelledby=\"basic\"\n                      (click)=\"\n                        control?.onClick\n                          ? control.onClick(\n                              lisFormGroup.controls[control.subFormControlName]\n                                .value\n                            )\n                          : ''\n                      \"\n                    />\n                  </div>\n                </p-iconfield>\n\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n          <!-- SELECT BUTTON -->\n          <!-- <div *ngSwitchCase=\"'select-button'\">\n              <p-selectbutton\n                [formControlName]=\"control.formControlName\"\n                [options]=\"control.data\"\n                [optionLabel]=\"control.optionLabel || 'name'\"\n                [optionValue]=\"control.optionValue || 'code'\"\n                aria-labelledby=\"basic\"\n                (onClick)=\"\n                  control?.onClick\n                    ? control.onClick($event, control.formControlName)\n                    : ''\n                \"\n              />\n            </div> -->\n\n          <!-- DATEPICKER -->\n          <!-- <div *ngSwitchCase=\"'datepicker'\">\n              <p-floatlabel variant=\"in\">\n                <p-datepicker\n                  appendTo=\"body\"\n                  [inputId]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  [formControlName]=\"control.formControlName\"\n                  [placeholder]=\"control.placeholder\"\n                  showIcon\n                  [dateFormat]=\"control.dateFormat || 'dd-mm-yy'\"\n                  [showTime]=\"control.showTime || false\"\n                  [hourFormat]=\"control.hourFormat || '24'\"\n                  [showButtonBar]=\"control.showButtonBar || false\"\n                  [minDate]=\"lisFormGroup.get(control.minDate)?.value || null\"\n                  [maxDate]=\"lisFormGroup.get(control.maxDate)?.value || null\"\n                  [selectionMode]=\"control.selectionMode || 'single'\"\n                  [readonlyInput]=\"control.readonlyInput || false\"\n                  [fluid]=\"control.fluid || true\"\n                  iconDisplay=\"input\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n\n          <!-- DROPDOWN AUTO-COMPLETE -->\n          <!-- <div *ngSwitchCase=\"'dropdown'\">\n              <p-floatlabel variant=\"in\">\n                <p-autocomplete\n                  [inputId]=\"control.formControlName\"\n                  [attr.name]=\"control.formControlName\"\n                  [name]=\"control.formControlName\"\n                  appendTo=\"body\"\n                  [formControlName]=\"control.formControlName\"\n                  [inputId]=\"control.formControlName\"\n                  optionLabel=\"name\"\n                  optionValue=\"code\"\n                  [dropdown]=\"true\"\n                  [suggestions]=\"options || []\"\n                  class=\"w-full\"\n                  [ngClass]=\"\n                    classValidate(\n                      lisFormGroup.controls[control.formControlName],\n                      submitted\n                    )\n                  \"\n                  (completeMethod)=\"\n                    control?.completeMethod\n                      ? control.completeMethod($event)\n                      : ''\n                  \"\n                />\n                <label [for]=\"control.formControlName\"\n                  >{{ control.label\n                  }}<span *ngIf=\"isRequired(control.formControlName)\"\n                    >*</span\n                  ></label\n                >\n              </p-floatlabel>\n            </div> -->\n        </ng-container>\n      </ng-container>\n      <ng-template #loadingTemplate>\n        <p-skeleton width=\"100%\" borderRadius=\"1rem\" />\n      </ng-template>\n    </div>\n  </ng-container>\n</form>\n", styles: ["input[readonly]{background-color:#e6e6e6;color:#666;cursor:not-allowed;border:1px solid #ccc}h6{white-space:normal;text-wrap:auto;word-break:normal}.group-checkbox-container{border-radius:10px;border:1px solid #e6e6e6;background:#fff;padding:30px}.checkbox-item{border-radius:10px;border:1px solid #e6e6e6;background:#fff;padding:14px}.input-group-number .p-select{height:2rem!important;padding:0 .25rem;width:auto;max-width:100%}.input-group-number ::ng-deep .p-select-label{padding:0!important}\n"] }]
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
    isAllowAddAnyPosition = false;
    isDisplayNumberOrder = false;
    additionalButtons = [];
    useDefaultDeleteButton = true;
    itemAdded = new EventEmitter();
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
    getNestedFormGroup(i, key) {
        const group = this.items.at(i);
        return group.get(key);
    }
    // Use the parent's FormArray
    get items() {
        return this.form.get(this.formArrayName);
    }
    addItem(index) {
        const newItem = this.createItemFn
            ? this.createItemFn()
            : this.defaultCreateItem();
        this.items.insert(index + 1, newItem);
        this.itemAdded.emit(index + 1);
    }
    removeItem(index) {
        this.items.removeAt(index);
    }
    // optional fallback if parent doesn't pass createItemFn
    defaultCreateItem() {
        return this.formBuilder.group({});
    }
    onSubmit() { }
    getControls() {
        return this.items.controls;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputArrayComponent, deps: [{ token: i2.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaFormInputArrayComponent, isStandalone: true, selector: "pla-form-input-array", inputs: { pageState: "pageState", form: "form", formArrayName: "formArrayName", createItemFn: "createItemFn", formSections: "formSections", isSubmitted: "isSubmitted", isLoadingPackage: "isLoadingPackage", isAllowAddAnyPosition: "isAllowAddAnyPosition", isDisplayNumberOrder: "isDisplayNumberOrder", additionalButtons: "additionalButtons", useDefaultDeleteButton: "useDefaultDeleteButton" }, outputs: { itemAdded: "itemAdded" }, ngImport: i0, template: "<div [formGroup]=\"form\">\n  <div [formArrayName]=\"formArrayName\">\n    @for (item of getControls(); track i; let i = $index) {\n      <div class=\"flex align-items-center justify-content-between w-full mb-2\">\n        \n        <div\n          [formGroupName]=\"i\"\n          class=\"flex align-items-center flex-grow-1 gap-1 item-container\"\n        >\n          <div class=\"order-number-container\">\n            {{ i + 1 }}\n          </div>\n\n          <div class=\"w-full flex flex-row flex-wrap py-1 gap-1\">\n            @for (section of formSections; track section.key; let j = $index) {\n              <div class=\"col\">\n                <pla-dynamic-form\n                  [index]=\"i\"\n                  [listFormDesign]=\"section.designFn ? section.designFn(i) : section.design\"\n                  [listFormGroup]=\"getNestedFormGroup(i, section.key)\"\n                  [submitted]=\"isSubmitted\"\n                  [loading]=\"isLoadingPackage\"\n                />\n              </div>\n\n              @if (j < formSections.length - 1) {\n                <p-divider\n                  [layout]=\"isSmallScreen ? 'horizontal' : 'vertical'\"\n                  class=\"my-4\"\n                />\n              }\n            }\n          </div>\n        </div>\n\n        <div class=\"flex-shrink-0 h-full flex align-items-center\">\n          @if (pageState === \"Edit\") {\n            <div class=\"flex justify-content-end align-items-center gap-2 px-3 button-container\">\n              @if (additionalButtons.length > 0) {\n                @for (btn of additionalButtons; track $index) {\n                  <p-button\n                    [disabled]=\"btn.isDisable\"\n                    [icon]=\"btn.icon\"\n                    [variant]=\"btn.variant\"\n                    [severity]=\"btn.severity\"\n                    (click)=\"btn?.bindingFunction(i)\"\n                  />\n                }\n              }\n\n              @if(useDefaultDeleteButton){\n <p-button\n                [disabled]=\"!i && items.length === i + 1\"\n                icon=\"pi pi-trash\"\n                variant=\"outlined\"\n                severity=\"secondary\"\n                (click)=\"removeItem(i)\"\n              />\n              }\n             \n\n              @if (isAllowAddAnyPosition || items.length === i + 1) {\n                <p-button\n                  icon=\"pi pi-plus\"\n                  variant=\"outlined\"\n                  severity=\"secondary\"\n                  (click)=\"addItem(i)\"\n                />\n              }\n            </div>\n          }\n        </div>\n      </div>\n    }\n  </div>\n</div>", styles: [".button-container{min-width:fit-content;white-space:nowrap;display:flex}.item-container{position:relative;border:1px solid #d4d4d4;border-radius:.75rem;padding:.5rem;margin-bottom:0;min-width:0}.order-number-container{position:absolute;min-width:50px;top:0;left:0;display:flex;align-items:center;justify-content:center;border-top-left-radius:.75rem;border-bottom-right-radius:.75rem;background-color:var(--color-primary-9);border:1px solid #d4d4d4;color:#fff;z-index:10}:host ::v-deep .p-button{flex-shrink:0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i2.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "ngmodule", type: DividerModule }, { kind: "component", type: i2$3.Divider, selector: "p-divider", inputs: ["style", "styleClass", "layout", "type", "align"] }, { kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: PlaDynamicForm, selector: "pla-dynamic-form", inputs: ["listFormGroup", "listFormDesign", "submitted", "loading", "index"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaFormInputArrayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-form-input-array', imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        DividerModule,
                        ButtonModule,
                        PlaDynamicForm,
                    ], template: "<div [formGroup]=\"form\">\n  <div [formArrayName]=\"formArrayName\">\n    @for (item of getControls(); track i; let i = $index) {\n      <div class=\"flex align-items-center justify-content-between w-full mb-2\">\n        \n        <div\n          [formGroupName]=\"i\"\n          class=\"flex align-items-center flex-grow-1 gap-1 item-container\"\n        >\n          <div class=\"order-number-container\">\n            {{ i + 1 }}\n          </div>\n\n          <div class=\"w-full flex flex-row flex-wrap py-1 gap-1\">\n            @for (section of formSections; track section.key; let j = $index) {\n              <div class=\"col\">\n                <pla-dynamic-form\n                  [index]=\"i\"\n                  [listFormDesign]=\"section.designFn ? section.designFn(i) : section.design\"\n                  [listFormGroup]=\"getNestedFormGroup(i, section.key)\"\n                  [submitted]=\"isSubmitted\"\n                  [loading]=\"isLoadingPackage\"\n                />\n              </div>\n\n              @if (j < formSections.length - 1) {\n                <p-divider\n                  [layout]=\"isSmallScreen ? 'horizontal' : 'vertical'\"\n                  class=\"my-4\"\n                />\n              }\n            }\n          </div>\n        </div>\n\n        <div class=\"flex-shrink-0 h-full flex align-items-center\">\n          @if (pageState === \"Edit\") {\n            <div class=\"flex justify-content-end align-items-center gap-2 px-3 button-container\">\n              @if (additionalButtons.length > 0) {\n                @for (btn of additionalButtons; track $index) {\n                  <p-button\n                    [disabled]=\"btn.isDisable\"\n                    [icon]=\"btn.icon\"\n                    [variant]=\"btn.variant\"\n                    [severity]=\"btn.severity\"\n                    (click)=\"btn?.bindingFunction(i)\"\n                  />\n                }\n              }\n\n              @if(useDefaultDeleteButton){\n <p-button\n                [disabled]=\"!i && items.length === i + 1\"\n                icon=\"pi pi-trash\"\n                variant=\"outlined\"\n                severity=\"secondary\"\n                (click)=\"removeItem(i)\"\n              />\n              }\n             \n\n              @if (isAllowAddAnyPosition || items.length === i + 1) {\n                <p-button\n                  icon=\"pi pi-plus\"\n                  variant=\"outlined\"\n                  severity=\"secondary\"\n                  (click)=\"addItem(i)\"\n                />\n              }\n            </div>\n          }\n        </div>\n      </div>\n    }\n  </div>\n</div>", styles: [".button-container{min-width:fit-content;white-space:nowrap;display:flex}.item-container{position:relative;border:1px solid #d4d4d4;border-radius:.75rem;padding:.5rem;margin-bottom:0;min-width:0}.order-number-container{position:absolute;min-width:50px;top:0;left:0;display:flex;align-items:center;justify-content:center;border-top-left-radius:.75rem;border-bottom-right-radius:.75rem;background-color:var(--color-primary-9);border:1px solid #d4d4d4;color:#fff;z-index:10}:host ::v-deep .p-button{flex-shrink:0}\n"] }]
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
            }], isAllowAddAnyPosition: [{
                type: Input
            }], isDisplayNumberOrder: [{
                type: Input
            }], additionalButtons: [{
                type: Input
            }], useDefaultDeleteButton: [{
                type: Input
            }], itemAdded: [{
                type: Output
            }] } });

class PlaContentContainerComponent {
    title = 'Title';
    menuList = [];
    selectMenu = null;
    sidebarMaximumHeight = undefined;
    selectMenuChange = new EventEmitter();
    splitButtonMenu = [];
    ngOnChanges(changes) {
        if (changes?.['menuList']?.currentValue) {
            this.initialMenu();
        }
    }
    async ngOnInit() {
        this.initialMenu();
        if (this.selectMenu) {
            this.selectMenuChange.emit(this.selectMenu);
        }
        else {
            this.selectMenu = this.menuList[0];
            this.selectMenuChange.emit(this.menuList[0]);
        }
    }
    initialMenu() {
        this.splitButtonMenu = this.menuList.map((menu) => {
            return {
                label: menu.label_key,
                command: () => {
                    this.onSelectMenu(menu);
                },
            };
        });
    }
    onSelectMenu(menu) {
        this.selectMenuChange.emit(menu);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaContentContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaContentContainerComponent, isStandalone: true, selector: "pla-content-container", inputs: { title: "title", menuList: "menuList", selectMenu: "selectMenu", sidebarMaximumHeight: "sidebarMaximumHeight" }, outputs: { selectMenuChange: "selectMenuChange" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"content-layout\">\n  <div class=\"header-content\">\n    <h4 class=\"m-0\" [id]=\"title\">{{ title }}</h4>\n    <div class=\"col-auto\">\n      <p-splitbutton\n        class=\"flex lg:hidden btn-primary-linear-gradient ml-auto\"\n        [label]=\"selectMenu?.label_key || '-'\"\n        [model]=\"splitButtonMenu\"\n      />\n    </div>\n  </div>\n  <div class=\"content-container\">\n    <div\n      class=\"hidden lg:flex menu-container col-12 lg:col-3\"\n      [ngStyle]=\"{\n        height: sidebarMaximumHeight,\n        'overflow-y': 'auto',\n      }\"\n    >\n      @for (menu of menuList; track $index) {\n        <div\n          [id]=\"menu.value\"\n          class=\"menu\"\n          [ngClass]=\"{ 'selected-menu': selectMenu?.value === menu.value }\"\n          (click)=\"onSelectMenu(menu)\"\n          (keyup.enter)=\"onSelectMenu(menu)\"\n          (keyup.space)=\"onSelectMenu(menu)\"\n          tabindex=\"0\"\n          role=\"button\"\n        >\n          <span>{{ menu.label_key || \"-\" }}</span>\n        </div>\n      }\n    </div>\n    <div class=\"content col-12 lg:col\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [".content-layout{display:flex;flex-direction:column}@media screen and (max-width: 575px){.content-layout{padding:1rem 1.15rem 0}}@media screen and (min-width: 576px){.content-layout{padding:1.875rem 2.5rem 0}}.content-layout .header-content{display:flex;justify-content:space-between;align-items:center;margin:0;padding:0 0 1.875rem;flex-wrap:wrap}.content-layout .header-content h6{margin-bottom:0rem}.content-layout .content-container{display:flex;flex-wrap:wrap;gap:1rem}.content-layout .content-container .menu-container{display:flex;flex-direction:column;background-color:var(--color-white);border:1px solid var(--color-text-3);padding:1.25rem;border-radius:1.25rem;max-height:fit-content;max-width:18.75rem}.content-layout .content-container .menu-container .menu{display:flex;align-items:center;padding:.875rem 1.25rem;height:3.125rem;width:100%;border-radius:.625rem;cursor:pointer}.content-layout .content-container .menu-container .menu:hover{background:var(--background-color-hover);color:var(--color-hover)}.content-layout .content-container .menu-container .selected-menu{color:var(--color-white);background:var(--background-color-active);box-shadow:0 .625rem .625rem #0000000d}.content-layout .content-container .content{display:flex;flex-direction:column;background-color:var(--color-white);border:1px solid var(--color-text-3);border-radius:1.25rem;overflow:auto}@media screen and (max-width: 575px){.content-layout .content-container .content{padding:1rem}}@media screen and (min-width: 576px){.content-layout .content-container .content{padding:1.5625rem 2.5rem 2.5rem}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: SplitButtonModule }, { kind: "component", type: i2$4.SplitButton, selector: "p-splitbutton, p-splitButton, p-split-button", inputs: ["model", "severity", "raised", "rounded", "text", "outlined", "size", "plain", "icon", "iconPos", "label", "tooltip", "tooltipOptions", "style", "styleClass", "menuStyle", "menuStyleClass", "dropdownIcon", "appendTo", "dir", "expandAriaLabel", "showTransitionOptions", "hideTransitionOptions", "buttonProps", "menuButtonProps", "autofocus", "disabled", "tabindex", "menuButtonDisabled", "buttonDisabled"], outputs: ["onClick", "onMenuHide", "onMenuShow", "onDropdownClick"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaContentContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-content-container', imports: [CommonModule, SplitButtonModule], standalone: true, template: "<div class=\"content-layout\">\n  <div class=\"header-content\">\n    <h4 class=\"m-0\" [id]=\"title\">{{ title }}</h4>\n    <div class=\"col-auto\">\n      <p-splitbutton\n        class=\"flex lg:hidden btn-primary-linear-gradient ml-auto\"\n        [label]=\"selectMenu?.label_key || '-'\"\n        [model]=\"splitButtonMenu\"\n      />\n    </div>\n  </div>\n  <div class=\"content-container\">\n    <div\n      class=\"hidden lg:flex menu-container col-12 lg:col-3\"\n      [ngStyle]=\"{\n        height: sidebarMaximumHeight,\n        'overflow-y': 'auto',\n      }\"\n    >\n      @for (menu of menuList; track $index) {\n        <div\n          [id]=\"menu.value\"\n          class=\"menu\"\n          [ngClass]=\"{ 'selected-menu': selectMenu?.value === menu.value }\"\n          (click)=\"onSelectMenu(menu)\"\n          (keyup.enter)=\"onSelectMenu(menu)\"\n          (keyup.space)=\"onSelectMenu(menu)\"\n          tabindex=\"0\"\n          role=\"button\"\n        >\n          <span>{{ menu.label_key || \"-\" }}</span>\n        </div>\n      }\n    </div>\n    <div class=\"content col-12 lg:col\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [".content-layout{display:flex;flex-direction:column}@media screen and (max-width: 575px){.content-layout{padding:1rem 1.15rem 0}}@media screen and (min-width: 576px){.content-layout{padding:1.875rem 2.5rem 0}}.content-layout .header-content{display:flex;justify-content:space-between;align-items:center;margin:0;padding:0 0 1.875rem;flex-wrap:wrap}.content-layout .header-content h6{margin-bottom:0rem}.content-layout .content-container{display:flex;flex-wrap:wrap;gap:1rem}.content-layout .content-container .menu-container{display:flex;flex-direction:column;background-color:var(--color-white);border:1px solid var(--color-text-3);padding:1.25rem;border-radius:1.25rem;max-height:fit-content;max-width:18.75rem}.content-layout .content-container .menu-container .menu{display:flex;align-items:center;padding:.875rem 1.25rem;height:3.125rem;width:100%;border-radius:.625rem;cursor:pointer}.content-layout .content-container .menu-container .menu:hover{background:var(--background-color-hover);color:var(--color-hover)}.content-layout .content-container .menu-container .selected-menu{color:var(--color-white);background:var(--background-color-active);box-shadow:0 .625rem .625rem #0000000d}.content-layout .content-container .content{display:flex;flex-direction:column;background-color:var(--color-white);border:1px solid var(--color-text-3);border-radius:1.25rem;overflow:auto}@media screen and (max-width: 575px){.content-layout .content-container .content{padding:1rem}}@media screen and (min-width: 576px){.content-layout .content-container .content{padding:1.5625rem 2.5rem 2.5rem}}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], menuList: [{
                type: Input
            }], selectMenu: [{
                type: Input
            }], sidebarMaximumHeight: [{
                type: Input
            }], selectMenuChange: [{
                type: Output
            }] } });

class PlaConfirmModalComponent {
    isVisible = false;
    image = 'assets/svg/icon-bell.svg';
    title = 'Title';
    description = 'description';
    saveText = 'Save';
    cancelText = 'Cancel';
    isVisibleChange = new EventEmitter();
    isCancel = new EventEmitter();
    isSubmit = new EventEmitter();
    onClickCancel(isReject) {
        this.isVisibleChange.emit(false);
        if (isReject) {
            this.isCancel.emit();
        }
    }
    onClickSubmit() {
        this.isVisibleChange.emit(false);
        this.isSubmit.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaConfirmModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaConfirmModalComponent, isStandalone: true, selector: "pla-confirm-modal", inputs: { isVisible: "isVisible", image: "image", title: "title", description: "description", saveText: "saveText", cancelText: "cancelText" }, outputs: { isVisibleChange: "isVisibleChange", isCancel: "isCancel", isSubmit: "isSubmit" }, ngImport: i0, template: "<p-dialog\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [(visible)]=\"isVisible\"\n  [style]=\"{ width: '28.125rem', 'z-index': '100' }\"\n  (visibleChange)=\"onClickCancel(false)\"\n  appendTo=\"body\"\n  maskStyleClass=\"confirm-modal\">\n  <div class=\"modal-container\">\n    <div class=\"image-icon\">\n      <img class=\"custom-swal-icon\" src=\"assets/svg/icon-bell.svg\" alt=\"icon-bell\">\n      <!-- <svg-icon\n        class=\"icon-primary\"\n        [src]=\"'assets/svg/icon-bell.svg'\"\n        [svgStyle]=\"{\n          'height.rem': 3.75,\n          'width.rem': 3.75,\n        }\">\n      </svg-icon> -->\n    </div>\n    <h5 [id]=\"title\" class=\"title\">{{ title  }}</h5>\n    <p [id]=\"description\" class=\"description text-center mb-4\">\n      {{ description  }}\n    </p>\n    <div class=\"flex justify-content-center gap-2 w-full\">\n      <p-button\n        id=\"button-cancel-confirm\"\n        class=\"btn-small\"\n        [label]=\"cancelText\"\n        severity=\"secondary\"\n        (click)=\"onClickCancel(true)\" />\n      <p-button\n        id=\"button-submit-confirm\"\n        class=\"btn-small btn-primary-linear-gradient\"\n        [label]=\"saveText\"\n        (click)=\"onClickSubmit()\" />\n    </div>\n  </div>\n</p-dialog>\n", styles: [".modal-container{display:flex;flex-direction:column;align-items:center;max-width:28rem;word-wrap:break-word}.modal-container .image-icon{display:flex;align-items:center;justify-content:center;width:6.25rem;height:6.25rem;border-radius:1.5625rem;background-color:#eee}.modal-container .title{max-width:22rem;font-size:1.875rem;word-wrap:break-word;text-overflow:ellipsis;text-align:center}.modal-container .description{max-width:27rem;word-wrap:break-word;text-overflow:ellipsis;font-size:1.25rem}\n"], dependencies: [{ kind: "ngmodule", type: DialogModule }, { kind: "component", type: i1$3.Dialog, selector: "p-dialog", inputs: ["header", "draggable", "resizable", "positionLeft", "positionTop", "contentStyle", "contentStyleClass", "modal", "closeOnEscape", "dismissableMask", "rtl", "closable", "responsive", "appendTo", "breakpoints", "styleClass", "maskStyleClass", "maskStyle", "showHeader", "breakpoint", "blockScroll", "autoZIndex", "baseZIndex", "minX", "minY", "focusOnShow", "maximizable", "keepInViewport", "focusTrap", "transitionOptions", "closeIcon", "closeAriaLabel", "closeTabindex", "minimizeIcon", "maximizeIcon", "closeButtonProps", "maximizeButtonProps", "visible", "style", "position", "role", "content", "contentTemplate", "footerTemplate", "closeIconTemplate", "maximizeIconTemplate", "minimizeIconTemplate", "headlessTemplate"], outputs: ["onShow", "onHide", "visibleChange", "onResizeInit", "onResizeEnd", "onDragEnd", "onMaximize"] }, { kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: AngularSvgIconModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaConfirmModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-confirm-modal', imports: [DialogModule, ButtonModule, AngularSvgIconModule], standalone: true, template: "<p-dialog\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [(visible)]=\"isVisible\"\n  [style]=\"{ width: '28.125rem', 'z-index': '100' }\"\n  (visibleChange)=\"onClickCancel(false)\"\n  appendTo=\"body\"\n  maskStyleClass=\"confirm-modal\">\n  <div class=\"modal-container\">\n    <div class=\"image-icon\">\n      <img class=\"custom-swal-icon\" src=\"assets/svg/icon-bell.svg\" alt=\"icon-bell\">\n      <!-- <svg-icon\n        class=\"icon-primary\"\n        [src]=\"'assets/svg/icon-bell.svg'\"\n        [svgStyle]=\"{\n          'height.rem': 3.75,\n          'width.rem': 3.75,\n        }\">\n      </svg-icon> -->\n    </div>\n    <h5 [id]=\"title\" class=\"title\">{{ title  }}</h5>\n    <p [id]=\"description\" class=\"description text-center mb-4\">\n      {{ description  }}\n    </p>\n    <div class=\"flex justify-content-center gap-2 w-full\">\n      <p-button\n        id=\"button-cancel-confirm\"\n        class=\"btn-small\"\n        [label]=\"cancelText\"\n        severity=\"secondary\"\n        (click)=\"onClickCancel(true)\" />\n      <p-button\n        id=\"button-submit-confirm\"\n        class=\"btn-small btn-primary-linear-gradient\"\n        [label]=\"saveText\"\n        (click)=\"onClickSubmit()\" />\n    </div>\n  </div>\n</p-dialog>\n", styles: [".modal-container{display:flex;flex-direction:column;align-items:center;max-width:28rem;word-wrap:break-word}.modal-container .image-icon{display:flex;align-items:center;justify-content:center;width:6.25rem;height:6.25rem;border-radius:1.5625rem;background-color:#eee}.modal-container .title{max-width:22rem;font-size:1.875rem;word-wrap:break-word;text-overflow:ellipsis;text-align:center}.modal-container .description{max-width:27rem;word-wrap:break-word;text-overflow:ellipsis;font-size:1.25rem}\n"] }]
        }], propDecorators: { isVisible: [{
                type: Input
            }], image: [{
                type: Input
            }], title: [{
                type: Input
            }], description: [{
                type: Input
            }], saveText: [{
                type: Input
            }], cancelText: [{
                type: Input
            }], isVisibleChange: [{
                type: Output
            }], isCancel: [{
                type: Output
            }], isSubmit: [{
                type: Output
            }] } });

class PlaToastService {
    messageSubject = new Subject();
    message$ = this.messageSubject.asObservable();
    show(message) {
        this.messageSubject.next(message);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaToastService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaToastService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class PlaToastComponent {
    messageService = inject(MessageService);
    toastService = inject(PlaToastService);
    svgIconPath = null;
    ngOnInit() {
        this.toastService.message$.subscribe((event) => {
            this.onShow(event.severity, event.summary, event.description, event.life, event.svgIconPath);
        });
    }
    onShow(severity, summary, description, life = 3000, svgIconPath) {
        this.messageService.add({
            severity: severity,
            summary: summary,
            detail: description,
            life: life,
        });
        this.svgIconPath = svgIconPath || null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaToastComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaToastComponent, isStandalone: true, selector: "pla-toast", providers: [MessageService], ngImport: i0, template: "<p-toast>\n  <ng-template let-message #message>\n    <div class=\"flex flex items-start flex-auto p-2 toast-container\">\n      <div class=\"icon mr-3\">\n        <svg-icon\n          class=\"icon-primary\"\n          [src]=\"svgIconPath || 'assets/svg/icon-bell.svg'\"\n          [svgStyle]=\"{\n            'height.rem': 1.5,\n            'width.rem': 1.5,\n          }\"></svg-icon>\n      </div>\n      <div class=\"flex flex-column\">\n        <div class=\"font-bold text-lg\">{{ message.summary }}</div>\n        <div class=\"font-normal text-md text-black\">{{ message.detail }}</div>\n      </div>\n    </div>\n  </ng-template>\n</p-toast>\n", styles: [".toast-container{border:0px;border-radius:1.25rem}.toast-container .icon{width:2.5rem;height:2.5rem;background-color:#fff;border-radius:.625rem;display:flex;align-items:center;justify-content:center}.toast-container .text-black{color:#000!important}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ToastModule }, { kind: "component", type: i1$4.Toast, selector: "p-toast", inputs: ["key", "autoZIndex", "baseZIndex", "life", "style", "styleClass", "position", "preventOpenDuplicates", "preventDuplicates", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "breakpoints"], outputs: ["onClose"] }, { kind: "ngmodule", type: AngularSvgIconModule }, { kind: "component", type: i2$1.SvgIconComponent, selector: "svg-icon", inputs: ["src", "name", "stretch", "applyClass", "svgClass", "class", "viewBox", "svgAriaLabel", "onSVGLoaded", "svgStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-toast', imports: [CommonModule, ToastModule, AngularSvgIconModule], providers: [MessageService], template: "<p-toast>\n  <ng-template let-message #message>\n    <div class=\"flex flex items-start flex-auto p-2 toast-container\">\n      <div class=\"icon mr-3\">\n        <svg-icon\n          class=\"icon-primary\"\n          [src]=\"svgIconPath || 'assets/svg/icon-bell.svg'\"\n          [svgStyle]=\"{\n            'height.rem': 1.5,\n            'width.rem': 1.5,\n          }\"></svg-icon>\n      </div>\n      <div class=\"flex flex-column\">\n        <div class=\"font-bold text-lg\">{{ message.summary }}</div>\n        <div class=\"font-normal text-md text-black\">{{ message.detail }}</div>\n      </div>\n    </div>\n  </ng-template>\n</p-toast>\n", styles: [".toast-container{border:0px;border-radius:1.25rem}.toast-container .icon{width:2.5rem;height:2.5rem;background-color:#fff;border-radius:.625rem;display:flex;align-items:center;justify-content:center}.toast-container .text-black{color:#000!important}\n"] }]
        }] });

var FILTER_TYPE;
(function (FILTER_TYPE) {
    FILTER_TYPE["INPUT_TEXT"] = "INPUT_TEXT";
    FILTER_TYPE["DATE"] = "DATE";
    FILTER_TYPE["SELECT"] = "SELECT";
    FILTER_TYPE["MULTI_SELECT"] = "MULTI_SELECT";
    FILTER_TYPE["CUSTOM_SELECT"] = "CUSTOM_SELECT";
})(FILTER_TYPE || (FILTER_TYPE = {}));
var OPERATOR;
(function (OPERATOR) {
    OPERATOR["EQUAL"] = "EQUAL";
    OPERATOR["NOT_EQUAL"] = "NOT_EQUAL";
    OPERATOR["GREATER_THAN"] = "GREATER_THAN";
    OPERATOR["GREATER_THAN_OR_EQUAL"] = "GREATER_THAN_OR_EQUAL";
    OPERATOR["LESS_THAN"] = "LESS_THAN";
    OPERATOR["LESS_THAN_OR_EQUAL"] = "LESS_THAN_OR_EQUAL";
    OPERATOR["LIKE"] = "LIKE";
    OPERATOR["STARTS_WITH"] = "STARTS_WITH";
    OPERATOR["ENDS_WITH"] = "ENDS_WITH";
    OPERATOR["IN"] = "IN";
    OPERATOR["IS_NULL"] = "IS_NULL";
    OPERATOR["IS_NOT_NULL"] = "IS_NOT_NULL";
})(OPERATOR || (OPERATOR = {}));

class PlaTableHeaderComponent {
    tableColumns = [];
    ngOnInit() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaTableHeaderComponent, isStandalone: true, selector: "tr[pla-table-header]", inputs: { tableColumns: "tableColumns" }, ngImport: i0, template: "@for (column of tableColumns; track $index) {\n  <th\n    [pSortableColumn]=\"column.field ? column.field : 'false'\"\n    [pSortableColumnDisabled]=\"column.isDisableSort\"\n    [id]=\"column.field\"\n    [ngStyle]=\"{\n      'text-align': column.headerAlign,\n      'min-width': column.minWidth,\n      'max-width': column.maxWidth,\n      'border-left': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n      'border-right': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n    }\"\n    [alignFrozen]=\"column.alignFrozen ? column.alignFrozen : 'right'\"\n    pFrozenColumn\n    [frozen]=\"column.frozenColumn ? true : false\"\n  >\n    {{ column.title }}\n    @if (column.field && !column.isDisableSort) {\n      <p-sortIcon [field]=\"column.field\" class=\"ml-2\" />\n    }\n  </th>\n}\n\n<!-- @for (item of frozenColumns; track $index) {\n  @if (frozenColumns.length > 0) {\n    <th\n      [id]=\"item.title\"\n      [ngStyle]=\"{\n        'text-align': 'center',\n        'border-left': '1px solid #e2e8f0',\n      }\"\n      [alignFrozen]=\"item.alignFrozen ? item.alignFrozen : 'right'\"\n      pFrozenColumn\n      [frozen]=\"true\"\n    >\n      @switch (item.columnType) {\n        @case (\"action\") {\n          <span> {{ \"Actions\" }}</span>\n        }\n        @default {\n          <span> {{ item.title }}</span>\n        }\n      }\n    </th>\n  }\n} -->\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TableModule }, { kind: "directive", type: i1$5.SortableColumn, selector: "[pSortableColumn]", inputs: ["pSortableColumn", "pSortableColumnDisabled"] }, { kind: "directive", type: i1$5.FrozenColumn, selector: "[pFrozenColumn]", inputs: ["frozen", "alignFrozen"] }, { kind: "component", type: i1$5.SortIcon, selector: "p-sortIcon", inputs: ["field"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tr[pla-table-header]', imports: [TableModule, CommonModule], template: "@for (column of tableColumns; track $index) {\n  <th\n    [pSortableColumn]=\"column.field ? column.field : 'false'\"\n    [pSortableColumnDisabled]=\"column.isDisableSort\"\n    [id]=\"column.field\"\n    [ngStyle]=\"{\n      'text-align': column.headerAlign,\n      'min-width': column.minWidth,\n      'max-width': column.maxWidth,\n      'border-left': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n      'border-right': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n    }\"\n    [alignFrozen]=\"column.alignFrozen ? column.alignFrozen : 'right'\"\n    pFrozenColumn\n    [frozen]=\"column.frozenColumn ? true : false\"\n  >\n    {{ column.title }}\n    @if (column.field && !column.isDisableSort) {\n      <p-sortIcon [field]=\"column.field\" class=\"ml-2\" />\n    }\n  </th>\n}\n\n<!-- @for (item of frozenColumns; track $index) {\n  @if (frozenColumns.length > 0) {\n    <th\n      [id]=\"item.title\"\n      [ngStyle]=\"{\n        'text-align': 'center',\n        'border-left': '1px solid #e2e8f0',\n      }\"\n      [alignFrozen]=\"item.alignFrozen ? item.alignFrozen : 'right'\"\n      pFrozenColumn\n      [frozen]=\"true\"\n    >\n      @switch (item.columnType) {\n        @case (\"action\") {\n          <span> {{ \"Actions\" }}</span>\n        }\n        @default {\n          <span> {{ item.title }}</span>\n        }\n      }\n    </th>\n  }\n} -->\n" }]
        }], propDecorators: { tableColumns: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class MenuService {
    async getGroupMenu(targetPath, storage) {
        const prefixPath = targetPath.split('gio');
        const currentPath = prefixPath[0].split('/');
        const currentUrl = currentPath[1].toLowerCase();
        const dataState = await this.fetchData(storage);
        const groupMenus = dataState.user?.groupMenus;
        if (!groupMenus)
            return null;
        const findMenuPath = (menus, url, path = []) => {
            for (const menu of menus) {
                const parsedUrl = (menu.menuURL || '')
                    .replace(/^\/+/, '')
                    .replace(/\s+/g, '-')
                    .toLowerCase();
                const newPath = [...path, menu];
                if (parsedUrl === url) {
                    return newPath;
                }
                if (menu.groupMenus?.length) {
                    const found = findMenuPath(menu.groupMenus, url, newPath);
                    if (found)
                        return found;
                }
            }
            return null;
        };
        const fullPath = findMenuPath(groupMenus, currentUrl);
        if (!fullPath)
            return null;
        const targetMenu = fullPath[fullPath.length - 1];
        return { targetMenu, path: fullPath };
    }
    async getMenus(storage) {
        const dataState = await this.fetchData(storage);
        const flatten = (menus = []) => menus.reduce((acc, item) => {
            if (item.menuURL)
                acc.push(item);
            if (item.groupMenus)
                acc.push(...flatten(item.groupMenus));
            return acc;
        }, []);
        return flatten(dataState.user?.groupMenus);
    }
    fetchData(storage) {
        try {
            const sessionData = localStorage.getItem(storage);
            const data = JSON.parse(sessionData || '{}');
            return data;
        }
        catch (error) {
            return {};
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: MenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: MenuService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: MenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class PermissionService {
    menuService = inject(MenuService);
    router = inject(Router);
    async hasPermission(permission, storage) {
        const currentUrl = this.router.url;
        const targetMenu = await this.menuService.getGroupMenu(currentUrl, storage);
        const grantedPermission = new Set((targetMenu?.targetMenu?.permission || '[]')
            .replace(/^\[|\]$/g, '')
            .split(',')
            .map((item) => item.trim()));
        return grantedPermission.has(permission);
    }
    async hasMenuUAM(url, storage) {
        const targetMenu = await this.menuService.getGroupMenu(url, storage);
        return targetMenu;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PermissionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PermissionService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PermissionService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class HasMenuUAMDirective {
    menuUrl;
    storage;
    templateRef = inject((TemplateRef));
    viewContainer = inject(ViewContainerRef);
    permissionService = inject(PermissionService);
    async ngOnInit() {
        if (this.menuUrl) {
            if (await this.permissionService.hasMenuUAM(this.menuUrl, this.storage)) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: HasMenuUAMDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.14", type: HasMenuUAMDirective, isStandalone: true, selector: "[appHasMenuUAM]", inputs: { menuUrl: ["appHasMenuUAM", "menuUrl"], storage: ["appHasMenuUAMStorage", "storage"] }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: HasMenuUAMDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appHasMenuUAM]',
                }]
        }], propDecorators: { menuUrl: [{
                type: Input,
                args: ['appHasMenuUAM']
            }], storage: [{
                type: Input,
                args: ['appHasMenuUAMStorage']
            }] } });

// has-permission.directive.ts
class HasPermissionDirective {
    requiredPermission;
    storage;
    templateRef = inject((TemplateRef));
    viewContainer = inject(ViewContainerRef);
    permissionService = inject(PermissionService);
    async ngOnInit() {
        if (await this.permissionService.hasPermission(this.requiredPermission, this.storage)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: HasPermissionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.14", type: HasPermissionDirective, isStandalone: true, selector: "[appHasPermission]", inputs: { requiredPermission: ["appHasPermission", "requiredPermission"], storage: ["appHasPermissionStorage", "storage"] }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: HasPermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appHasPermission]',
                }]
        }], propDecorators: { requiredPermission: [{
                type: Input,
                args: ['appHasPermission']
            }], storage: [{
                type: Input,
                args: ['appHasPermissionStorage']
            }] } });

class NumberDecimalPipe {
    transform(value, decimalDigit) {
        if (value === null || value === undefined || value === '')
            return '';
        const num = Number(value);
        if (isNaN(num))
            return String(value);
        const digits = decimalDigit !== undefined ? parseInt(decimalDigit, 10) : 2;
        const safeDigits = isNaN(digits) ? 2 : digits;
        return num.toLocaleString('en-US', {
            minimumFractionDigits: safeDigits,
            maximumFractionDigits: safeDigits,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: NumberDecimalPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: NumberDecimalPipe, isStandalone: true, name: "numberDecimal" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: NumberDecimalPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'numberDecimal',
                    standalone: true,
                }]
        }] });

// import { BuddhistDatePipe } from '../../../../pipes/buddhist-date.pipe';
class PlaTableBodyComponent {
    applicationStorageName;
    tableColumns = [];
    rowData;
    rowIndex = 0;
    ngOnInit() { }
    getSeverity(status) {
        switch (status) {
            case 'secondary':
                return 'secondary';
            case 'warn':
                return 'warn';
            case 'success':
                return 'success';
            case 'danger':
                return 'danger';
            case 'info':
                return 'info';
            case 'contrast':
                return 'contrast';
            default:
                return 'secondary';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaTableBodyComponent, isStandalone: true, selector: "tr[pla-table-body]", inputs: { applicationStorageName: "applicationStorageName", tableColumns: "tableColumns", rowData: "rowData", rowIndex: "rowIndex" }, ngImport: i0, template: "@for (column of tableColumns; track $index) {\n  <td\n    [ngStyle]=\"{\n      'text-align': column.textAlign,\n      'min-width': column.minWidth,\n      'max-width': column.maxWidth,\n      'border-left': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n      'border-right': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n    }\"\n    [alignFrozen]=\"column.alignFrozen ? column.alignFrozen : 'right'\"\n    pFrozenColumn\n    [frozen]=\"column.frozenColumn ? true : false\"\n  >\n    <div\n      [ngStyle]=\"{\n        'min-height': column.minHeight,\n        height: '100%',\n        display: 'flex',\n        'align-items': 'center',\n        'justify-content':\n          column.columnType === 'action' ? 'center' : column.textAlign,\n      }\"\n    >\n      @switch (column.columnType) {\n        @case (\"text\") {\n          @if (rowData[column.field] != null && rowData[column.field] !== \"\") {\n            {{ rowData[column.field] }}\n          } @else {\n            -\n          }\n        }\n        @case (\"date\") {\n          <!-- @if (column.dateLocalBuddhist) {\n            {{ rowData[column.field] | buddhistDate: column.dateFormat }}\n          } @else {\n            {{\n              rowData[column.field]\n                ? (rowData[column.field]\n                  | date: column.dateFormat || \"dd/MM/yyyy\")\n                : \"-\"\n            }}\n          } -->\n          {{\n            rowData[column.field]\n              ? (rowData[column.field]\n                | date: column.dateFormat || \"dd/MM/yyyy\")\n              : \"-\"\n          }}\n        }\n        @case (\"decimal\") {\n          {{\n            column.field\n              ? (rowData[column.field] | numberDecimal: column.decimalDigit)\n              : \"\"\n          }}\n        }\n        @case (\"tag\") {\n          <!-- icon=\"pi pi-circle-fill\" -->\n          <p-tag\n            [value]=\"rowData[column.field].value\"\n            [severity]=\"getSeverity(rowData[column.field].severity)\"\n          ></p-tag>\n        }\n        @case (\"action\") {\n          <div class=\"flex justify-content-center align-items-center\">\n            @if (column.action_Buttons && column.action_Buttons.length === 1) {\n              <div\n                [ngStyle]=\"{\n                  display: 'flex',\n                  'align-items': 'center',\n                  'justify-content': 'center',\n                  'min-height': column.minHeight,\n                }\"\n              >\n                <ng-container\n                  *appHasMenuUAM=\"\n                    column.menu_UAM || '';\n                    storage: applicationStorageName\n                  \"\n                >\n                  <ng-container\n                    *appHasPermission=\"\n                      column.action_Buttons[0].permission || '';\n                      storage: applicationStorageName\n                    \"\n                  >\n                    @if (\n                      !(\n                        (`button-${column.action_Buttons[0].label}_${rowData.id}`\n                          | i18nSelect: column?.action_Disable || {}) ===\n                        \"disabled\"\n                      )\n                    ) {\n                      <a\n                        pRipple\n                        class=\"flex items-center p-tieredmenu-item-link\"\n                        [id]=\"\n                          `button-${column.action_Buttons[0].label}_${rowData.id}`\n                        \"\n                        (click)=\"\n                          column.action_Buttons[0].onActionClick(rowData)\n                        \"\n                        (keyup.enter)=\"\n                          column.action_Buttons[0].onActionClick(rowData)\n                        \"\n                        (keyup.space)=\"\n                          column.action_Buttons[0].onActionClick(rowData)\n                        \"\n                        tabindex=\"0\"\n                        role=\"button\"\n                      >\n                        <span\n                          class=\"flex align-items-center p-tieredmenu-item-icon\"\n                          [class]=\"column.action_Buttons[0].icon\"\n                        ></span>\n                      </a>\n                    }\n                  </ng-container>\n                </ng-container>\n              </div>\n            } @else {\n              <p-button\n                [id]=\"'auction-button-' + rowIndex\"\n                (click)=\"menu.toggle($event)\"\n                icon=\"pi pi-ellipsis-v\"\n                variant=\"text\"\n              />\n              <p-tieredmenu\n                #menu\n                [model]=\"column.action_Buttons\"\n                [popup]=\"true\"\n                appendTo=\"body\"\n                styleClass=\"table-action-button\"\n              >\n                <ng-template #item let-item let-hasSubmenu=\"hasSubmenu\">\n                  <ng-container *appHasMenuUAM=\"item.menu_UAM\">\n                    <ng-container\n                      *appHasPermission=\"\n                        item.permission;\n                        storage: applicationStorageName\n                      \"\n                    >\n                      @if (\n                        !(\n                          (`button-${item.label}_${rowData.id}`\n                            | i18nSelect: column?.action_Disable || {}) ===\n                          \"disabled\"\n                        )\n                      ) {\n                        <a\n                          pRipple\n                          class=\"flex items-center w-full p-tieredmenu-item-link\"\n                          [id]=\"`button-${item.label}_${rowData.id}`\"\n                          (click)=\"item.onActionClick(rowData)\"\n                          (keyup.enter)=\"item.onActionClick(rowData)\"\n                          (keyup.space)=\"item.onActionClick(rowData)\"\n                          tabindex=\"0\"\n                          role=\"button\"\n                        >\n                          <span\n                            class=\"flex align-items-center p-tieredmenu-item-icon\"\n                            [class]=\"item.icon\"\n                          ></span>\n                          <span class=\"ml-2\">{{ item.label }}</span>\n                          @if (hasSubmenu) {\n                            <i class=\"pi pi-angle-right ml-auto\"></i>\n                          }\n                        </a>\n                      }\n                    </ng-container>\n                  </ng-container>\n                </ng-template>\n              </p-tieredmenu>\n            }\n          </div>\n        }\n\n        @default {\n          {{ column.field ? rowData[column.field] : \"\" }}\n        }\n      }\n    </div>\n  </td>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TableModule }, { kind: "directive", type: i1$5.FrozenColumn, selector: "[pFrozenColumn]", inputs: ["frozen", "alignFrozen"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "pipe", type: i1$1.DatePipe, name: "date" }, { kind: "pipe", type: i1$1.I18nSelectPipe, name: "i18nSelect" }, { kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "fluid", "buttonProps"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: TieredMenuModule }, { kind: "component", type: i4$5.TieredMenu, selector: "p-tieredMenu, p-tieredmenu, p-tiered-menu", inputs: ["model", "popup", "style", "styleClass", "appendTo", "breakpoint", "autoZIndex", "baseZIndex", "autoDisplay", "showTransitionOptions", "hideTransitionOptions", "id", "ariaLabel", "ariaLabelledBy", "disabled", "tabindex"], outputs: ["onShow", "onHide"] }, { kind: "ngmodule", type: TagModule }, { kind: "component", type: i5$2.Tag, selector: "p-tag", inputs: ["style", "styleClass", "severity", "value", "icon", "rounded"] }, { kind: "directive", type: HasPermissionDirective, selector: "[appHasPermission]", inputs: ["appHasPermission", "appHasPermissionStorage"] }, { kind: "directive", type: HasMenuUAMDirective, selector: "[appHasMenuUAM]", inputs: ["appHasMenuUAM", "appHasMenuUAMStorage"] }, { kind: "pipe", type: NumberDecimalPipe, name: "numberDecimal" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableBodyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tr[pla-table-body]', imports: [
                        TableModule,
                        CommonModule,
                        ButtonModule,
                        TieredMenuModule,
                        TagModule,
                        HasPermissionDirective,
                        HasMenuUAMDirective,
                        NumberDecimalPipe,
                        // BuddhistDatePipe,
                    ], template: "@for (column of tableColumns; track $index) {\n  <td\n    [ngStyle]=\"{\n      'text-align': column.textAlign,\n      'min-width': column.minWidth,\n      'max-width': column.maxWidth,\n      'border-left': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n      'border-right': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n    }\"\n    [alignFrozen]=\"column.alignFrozen ? column.alignFrozen : 'right'\"\n    pFrozenColumn\n    [frozen]=\"column.frozenColumn ? true : false\"\n  >\n    <div\n      [ngStyle]=\"{\n        'min-height': column.minHeight,\n        height: '100%',\n        display: 'flex',\n        'align-items': 'center',\n        'justify-content':\n          column.columnType === 'action' ? 'center' : column.textAlign,\n      }\"\n    >\n      @switch (column.columnType) {\n        @case (\"text\") {\n          @if (rowData[column.field] != null && rowData[column.field] !== \"\") {\n            {{ rowData[column.field] }}\n          } @else {\n            -\n          }\n        }\n        @case (\"date\") {\n          <!-- @if (column.dateLocalBuddhist) {\n            {{ rowData[column.field] | buddhistDate: column.dateFormat }}\n          } @else {\n            {{\n              rowData[column.field]\n                ? (rowData[column.field]\n                  | date: column.dateFormat || \"dd/MM/yyyy\")\n                : \"-\"\n            }}\n          } -->\n          {{\n            rowData[column.field]\n              ? (rowData[column.field]\n                | date: column.dateFormat || \"dd/MM/yyyy\")\n              : \"-\"\n          }}\n        }\n        @case (\"decimal\") {\n          {{\n            column.field\n              ? (rowData[column.field] | numberDecimal: column.decimalDigit)\n              : \"\"\n          }}\n        }\n        @case (\"tag\") {\n          <!-- icon=\"pi pi-circle-fill\" -->\n          <p-tag\n            [value]=\"rowData[column.field].value\"\n            [severity]=\"getSeverity(rowData[column.field].severity)\"\n          ></p-tag>\n        }\n        @case (\"action\") {\n          <div class=\"flex justify-content-center align-items-center\">\n            @if (column.action_Buttons && column.action_Buttons.length === 1) {\n              <div\n                [ngStyle]=\"{\n                  display: 'flex',\n                  'align-items': 'center',\n                  'justify-content': 'center',\n                  'min-height': column.minHeight,\n                }\"\n              >\n                <ng-container\n                  *appHasMenuUAM=\"\n                    column.menu_UAM || '';\n                    storage: applicationStorageName\n                  \"\n                >\n                  <ng-container\n                    *appHasPermission=\"\n                      column.action_Buttons[0].permission || '';\n                      storage: applicationStorageName\n                    \"\n                  >\n                    @if (\n                      !(\n                        (`button-${column.action_Buttons[0].label}_${rowData.id}`\n                          | i18nSelect: column?.action_Disable || {}) ===\n                        \"disabled\"\n                      )\n                    ) {\n                      <a\n                        pRipple\n                        class=\"flex items-center p-tieredmenu-item-link\"\n                        [id]=\"\n                          `button-${column.action_Buttons[0].label}_${rowData.id}`\n                        \"\n                        (click)=\"\n                          column.action_Buttons[0].onActionClick(rowData)\n                        \"\n                        (keyup.enter)=\"\n                          column.action_Buttons[0].onActionClick(rowData)\n                        \"\n                        (keyup.space)=\"\n                          column.action_Buttons[0].onActionClick(rowData)\n                        \"\n                        tabindex=\"0\"\n                        role=\"button\"\n                      >\n                        <span\n                          class=\"flex align-items-center p-tieredmenu-item-icon\"\n                          [class]=\"column.action_Buttons[0].icon\"\n                        ></span>\n                      </a>\n                    }\n                  </ng-container>\n                </ng-container>\n              </div>\n            } @else {\n              <p-button\n                [id]=\"'auction-button-' + rowIndex\"\n                (click)=\"menu.toggle($event)\"\n                icon=\"pi pi-ellipsis-v\"\n                variant=\"text\"\n              />\n              <p-tieredmenu\n                #menu\n                [model]=\"column.action_Buttons\"\n                [popup]=\"true\"\n                appendTo=\"body\"\n                styleClass=\"table-action-button\"\n              >\n                <ng-template #item let-item let-hasSubmenu=\"hasSubmenu\">\n                  <ng-container *appHasMenuUAM=\"item.menu_UAM\">\n                    <ng-container\n                      *appHasPermission=\"\n                        item.permission;\n                        storage: applicationStorageName\n                      \"\n                    >\n                      @if (\n                        !(\n                          (`button-${item.label}_${rowData.id}`\n                            | i18nSelect: column?.action_Disable || {}) ===\n                          \"disabled\"\n                        )\n                      ) {\n                        <a\n                          pRipple\n                          class=\"flex items-center w-full p-tieredmenu-item-link\"\n                          [id]=\"`button-${item.label}_${rowData.id}`\"\n                          (click)=\"item.onActionClick(rowData)\"\n                          (keyup.enter)=\"item.onActionClick(rowData)\"\n                          (keyup.space)=\"item.onActionClick(rowData)\"\n                          tabindex=\"0\"\n                          role=\"button\"\n                        >\n                          <span\n                            class=\"flex align-items-center p-tieredmenu-item-icon\"\n                            [class]=\"item.icon\"\n                          ></span>\n                          <span class=\"ml-2\">{{ item.label }}</span>\n                          @if (hasSubmenu) {\n                            <i class=\"pi pi-angle-right ml-auto\"></i>\n                          }\n                        </a>\n                      }\n                    </ng-container>\n                  </ng-container>\n                </ng-template>\n              </p-tieredmenu>\n            }\n          </div>\n        }\n\n        @default {\n          {{ column.field ? rowData[column.field] : \"\" }}\n        }\n      }\n    </div>\n  </td>\n}\n" }]
        }], propDecorators: { applicationStorageName: [{
                type: Input,
                args: [{ required: true }]
            }], tableColumns: [{
                type: Input,
                args: [{ required: true }]
            }], rowData: [{
                type: Input,
                args: [{ required: true }]
            }], rowIndex: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaTableFilterInputTextComponent {
    column = {
        field: '',
        title: '',
        columnType: 'text',
    };
    appliedFilters = {};
    operatorOptions = [];
    filterTextSubject = new Subject();
    skipNextInput = false;
    ngOnInit() {
        this.initTextSearch();
    }
    ngOnChanges() { }
    initTextSearch() {
        this.filterTextSubject
            .pipe(debounceTime(1500))
            .subscribe(({ value, callback }) => {
            if (!this.skipNextInput) {
                callback(value);
            }
        });
    }
    clearFilter(input, field, callback) {
        input.value = '';
        callback(null);
    }
    onTextFilterChange(event, field, callback) {
        const input = event.target;
        const value = input.value;
        this.skipNextInput = false;
        this.filterTextSubject.next({ field, value, callback });
    }
    onTextFilterEnter(event, callback) {
        const input = event.target;
        this.skipNextInput = true;
        callback(input.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableFilterInputTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaTableFilterInputTextComponent, isStandalone: true, selector: "pla-table-filter-input-text", inputs: { column: "column", appliedFilters: "appliedFilters", operatorOptions: "operatorOptions" }, usesOnChanges: true, ngImport: i0, template: "<p-columnFilter\n  type=\"custom\"\n  [field]=\"column.field\"\n  [showClearButton]=\"false\"\n  [matchModeOptions]=\"operatorOptions\"\n>\n  <ng-template pTemplate=\"filter\" let-value let-filterCallback=\"filterCallback\">\n    <p-iconfield>\n      <input\n        [value]=\"appliedFilters[column.field]?.value ?? ''\"\n        #inputRef\n        type=\"text\"\n        pInputText\n        [ngStyle]=\"{ 'min-width': column.minWidth }\"\n        (keydown.enter)=\"onTextFilterEnter($event, filterCallback)\"\n        (input)=\"onTextFilterChange($event, column.field, filterCallback)\"\n        [placeholder]=\"column.searchPlaceHolder ?? 'Search'\"\n      />\n      @if (inputRef.value) {\n        <p-inputicon\n          class=\"pi pi-times\"\n          (click)=\"clearFilter(inputRef, column.field, filterCallback)\"\n          style=\"cursor: pointer\"\n        />\n      }</p-iconfield\n  ></ng-template>\n</p-columnFilter>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: TableModule }, { kind: "directive", type: i2$2.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i1$5.ColumnFilter, selector: "p-columnFilter", inputs: ["field", "type", "display", "showMenu", "matchMode", "operator", "showOperator", "showClearButton", "showApplyButton", "showMatchModes", "showAddButton", "hideOnClear", "placeholder", "matchModeOptions", "maxConstraints", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons", "ariaLabel", "filterButtonProps"], outputs: ["onShow", "onHide"] }, { kind: "ngmodule", type: IconFieldModule }, { kind: "component", type: i4$1.IconField, selector: "p-iconfield, p-iconField, p-icon-field", inputs: ["iconPosition", "styleClass"] }, { kind: "ngmodule", type: InputIconModule }, { kind: "component", type: i5$3.InputIcon, selector: "p-inputicon, p-inputIcon", inputs: ["styleClass"] }, { kind: "ngmodule", type: InputTextModule }, { kind: "directive", type: i5.InputText, selector: "[pInputText]", inputs: ["variant", "fluid", "pSize"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableFilterInputTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-table-filter-input-text', imports: [
                        CommonModule,
                        TableModule,
                        IconFieldModule,
                        InputIconModule,
                        IconFieldModule,
                        InputTextModule,
                    ], template: "<p-columnFilter\n  type=\"custom\"\n  [field]=\"column.field\"\n  [showClearButton]=\"false\"\n  [matchModeOptions]=\"operatorOptions\"\n>\n  <ng-template pTemplate=\"filter\" let-value let-filterCallback=\"filterCallback\">\n    <p-iconfield>\n      <input\n        [value]=\"appliedFilters[column.field]?.value ?? ''\"\n        #inputRef\n        type=\"text\"\n        pInputText\n        [ngStyle]=\"{ 'min-width': column.minWidth }\"\n        (keydown.enter)=\"onTextFilterEnter($event, filterCallback)\"\n        (input)=\"onTextFilterChange($event, column.field, filterCallback)\"\n        [placeholder]=\"column.searchPlaceHolder ?? 'Search'\"\n      />\n      @if (inputRef.value) {\n        <p-inputicon\n          class=\"pi pi-times\"\n          (click)=\"clearFilter(inputRef, column.field, filterCallback)\"\n          style=\"cursor: pointer\"\n        />\n      }</p-iconfield\n  ></ng-template>\n</p-columnFilter>\n" }]
        }], propDecorators: { column: [{
                type: Input,
                args: [{ required: true }]
            }], appliedFilters: [{
                type: Input,
                args: [{ required: true }]
            }], operatorOptions: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaTableFilterMultiSelectComponent {
    column = {
        field: '',
        title: '',
        columnType: 'tag',
    };
    appliedFilters = {};
    operatorOptions = [];
    ngOnInit() { }
    onSelectFilter(value, callback) {
        callback(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableFilterMultiSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaTableFilterMultiSelectComponent, isStandalone: true, selector: "pla-table-filter-multi-select", inputs: { column: "column", appliedFilters: "appliedFilters", operatorOptions: "operatorOptions" }, ngImport: i0, template: "<p-columnFilter\n  type=\"custom\"\n  [field]=\"column.field\"\n  matchMode=\"in\"\n  [showMenu]=\"false\"\n  [showClearButton]=\"false\"\n  [matchModeOptions]=\"operatorOptions\"\n>\n  <ng-template pTemplate=\"filter\" let-value let-filterCallback=\"filterCallback\">\n    <!-- {{appliedFilters?.[header.searchField]?.value}} -->\n    <p-multiselect\n      (ngModelChange)=\"onSelectFilter($event, filterCallback)\"\n      [ngModel]=\"appliedFilters[column.field || '']?.value\"\n      [options]=\"column.options\"\n      optionLabel=\"name\"\n      optionValue=\"code\"\n      [placeholder]=\"column.searchPlaceHolder ?? 'Search'\"\n      filter=\"true\"\n      (onFilter)=\"column?.searchFunction($event)\"\n      [loading]=\"column.loading\"\n      [appendTo]=\"'body'\"\n      styleClass=\"w-full\"\n      class=\"status-filter\"\n      panelStyleClass=\"filter-select custom-filter-input\"\n      [ngStyle]=\"{ 'min-width': column.filterWidth }\"\n    />\n  </ng-template>\n</p-columnFilter>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: TableModule }, { kind: "directive", type: i2$2.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i1$5.ColumnFilter, selector: "p-columnFilter", inputs: ["field", "type", "display", "showMenu", "matchMode", "operator", "showOperator", "showClearButton", "showApplyButton", "showMatchModes", "showAddButton", "hideOnClear", "placeholder", "matchModeOptions", "maxConstraints", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons", "ariaLabel", "filterButtonProps"], outputs: ["onShow", "onHide"] }, { kind: "ngmodule", type: IconFieldModule }, { kind: "ngmodule", type: InputIconModule }, { kind: "ngmodule", type: InputTextModule }, { kind: "ngmodule", type: MultiSelectModule }, { kind: "component", type: i4$3.MultiSelect, selector: "p-multiSelect, p-multiselect, p-multi-select", inputs: ["id", "ariaLabel", "style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "fluid", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "variant", "appendTo", "dataKey", "name", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "chipIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "filterBy", "scrollHeight", "lazy", "virtualScroll", "loading", "virtualScrollItemSize", "loadingIcon", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "size", "showClear", "autofocus", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "defaultLabel", "placeholder", "options", "filterValue", "itemSize", "selectAll", "focusOnHover", "filterFields", "selectOnFocus", "autoOptionFocus"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide", "onLazyLoad", "onRemove", "onSelectAllChange"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableFilterMultiSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-table-filter-multi-select', imports: [
                        CommonModule,
                        TableModule,
                        IconFieldModule,
                        InputIconModule,
                        IconFieldModule,
                        InputTextModule,
                        MultiSelectModule,
                        FormsModule,
                    ], template: "<p-columnFilter\n  type=\"custom\"\n  [field]=\"column.field\"\n  matchMode=\"in\"\n  [showMenu]=\"false\"\n  [showClearButton]=\"false\"\n  [matchModeOptions]=\"operatorOptions\"\n>\n  <ng-template pTemplate=\"filter\" let-value let-filterCallback=\"filterCallback\">\n    <!-- {{appliedFilters?.[header.searchField]?.value}} -->\n    <p-multiselect\n      (ngModelChange)=\"onSelectFilter($event, filterCallback)\"\n      [ngModel]=\"appliedFilters[column.field || '']?.value\"\n      [options]=\"column.options\"\n      optionLabel=\"name\"\n      optionValue=\"code\"\n      [placeholder]=\"column.searchPlaceHolder ?? 'Search'\"\n      filter=\"true\"\n      (onFilter)=\"column?.searchFunction($event)\"\n      [loading]=\"column.loading\"\n      [appendTo]=\"'body'\"\n      styleClass=\"w-full\"\n      class=\"status-filter\"\n      panelStyleClass=\"filter-select custom-filter-input\"\n      [ngStyle]=\"{ 'min-width': column.filterWidth }\"\n    />\n  </ng-template>\n</p-columnFilter>\n" }]
        }], propDecorators: { column: [{
                type: Input
            }], appliedFilters: [{
                type: Input,
                args: [{ required: true }]
            }], operatorOptions: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class PlaTableFilterDateComponent {
    appliedFilters = {};
    column = {
        field: '',
        title: '',
        columnType: 'date',
    };
    ngOnInit() { }
    onDateChange(event, filterCallback) {
        if (Array.isArray(event) && event[0] && event[1]) {
            const startDate = new Date(event[0]);
            const endDate = new Date(event[1]);
            // Remark: Need to set Time of actual data start date to midnight. Set Start to 00:00:00.000
            startDate.setHours(0, 0, 0, 0);
            // Remark: Need to set Time of actual data end date before midnight. Set End to 23:59:59.999
            // so it includes the whole last day
            endDate.setHours(23, 59, 59, 999);
            filterCallback([startDate, endDate]);
        }
        else {
            filterCallback(event);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableFilterDateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaTableFilterDateComponent, isStandalone: true, selector: "pla-table-filter-date", inputs: { appliedFilters: "appliedFilters", column: "column" }, ngImport: i0, template: "<!-- {{ appliedFilters?.[column.field]?.value }} -->\n<p-columnFilter\n  [field]=\"column.field\"\n  type=\"date\"\n  [showMenu]=\"false\"\n  [showOperator]=\"false\"\n  [showClearButton]=\"false\"\n  placeholder=\"Select Date\"\n  [matchMode]=\"'between'\"\n>\n  <ng-template\n    pTemplate=\"filter\"\n    let-dateValue\n    let-filterCallback=\"filterCallback\"\n  >\n    <div class=\"flex align-items-center gap-2\">\n      <p-datepicker\n        [ngModel]=\"appliedFilters?.[column.field]?.value\"\n        (ngModelChange)=\"onDateChange($event, filterCallback)\"\n        [selectionMode]=\"'range'\"\n        dateFormat=\"dd/mm/yy\"\n        [placeholder]=\"column.searchPlaceHolder ?? 'Select Date'\"\n        appendTo=\"body\"\n        showClear=\"true\"\n      ></p-datepicker>\n    </div>\n  </ng-template>\n</p-columnFilter>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TableModule }, { kind: "directive", type: i2$2.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i1$5.ColumnFilter, selector: "p-columnFilter", inputs: ["field", "type", "display", "showMenu", "matchMode", "operator", "showOperator", "showClearButton", "showApplyButton", "showMatchModes", "showAddButton", "hideOnClear", "placeholder", "matchModeOptions", "maxConstraints", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons", "ariaLabel", "filterButtonProps"], outputs: ["onShow", "onHide"] }, { kind: "ngmodule", type: IconFieldModule }, { kind: "ngmodule", type: InputIconModule }, { kind: "ngmodule", type: DatePickerModule }, { kind: "component", type: i4$4.DatePicker, selector: "p-datePicker, p-datepicker, p-date-picker", inputs: ["iconDisplay", "style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "ariaLabel", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "fluid", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "startWeekFromFirstDayOfYear", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autofocus", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "variant", "size", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale", "view", "defaultDate"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableFilterDateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-table-filter-date', imports: [
                        FormsModule,
                        CommonModule,
                        TableModule,
                        IconFieldModule,
                        InputIconModule,
                        IconFieldModule,
                        DatePickerModule,
                    ], template: "<!-- {{ appliedFilters?.[column.field]?.value }} -->\n<p-columnFilter\n  [field]=\"column.field\"\n  type=\"date\"\n  [showMenu]=\"false\"\n  [showOperator]=\"false\"\n  [showClearButton]=\"false\"\n  placeholder=\"Select Date\"\n  [matchMode]=\"'between'\"\n>\n  <ng-template\n    pTemplate=\"filter\"\n    let-dateValue\n    let-filterCallback=\"filterCallback\"\n  >\n    <div class=\"flex align-items-center gap-2\">\n      <p-datepicker\n        [ngModel]=\"appliedFilters?.[column.field]?.value\"\n        (ngModelChange)=\"onDateChange($event, filterCallback)\"\n        [selectionMode]=\"'range'\"\n        dateFormat=\"dd/mm/yy\"\n        [placeholder]=\"column.searchPlaceHolder ?? 'Select Date'\"\n        appendTo=\"body\"\n        showClear=\"true\"\n      ></p-datepicker>\n    </div>\n  </ng-template>\n</p-columnFilter>\n" }]
        }], propDecorators: { appliedFilters: [{
                type: Input,
                args: [{ required: true }]
            }], column: [{
                type: Input
            }] } });

class PlaTableFilterComponent {
    tableColumns = [];
    appliedFilters = {};
    operatorOptions = [];
    ngOnInit() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaTableFilterComponent, isStandalone: true, selector: "tr[pla-table-filter]", inputs: { tableColumns: "tableColumns", appliedFilters: "appliedFilters", operatorOptions: "operatorOptions" }, ngImport: i0, template: "@for (column of tableColumns; track $index) {\n  <th\n    [id]=\"column.field\"\n    [ngStyle]=\"{\n      'text-align': column.headerAlign,\n      'min-width': column.minWidth,\n      'max-width': column.maxWidth,\n      'border-left': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n      'border-right': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n    }\"\n    [alignFrozen]=\"column.alignFrozen ? column.alignFrozen : 'right'\"\n    pFrozenColumn\n    [frozen]=\"column.frozenColumn ? true : false\"\n  >\n    @if (column.isDisplayFilter) {\n      <!-- TODO: Filter Here -->\n      @switch (column.filterType) {\n        @case (\"input-text\") {\n          <pla-table-filter-input-text\n            [column]=\"column\"\n            [appliedFilters]=\"appliedFilters\"\n            [operatorOptions]=\"operatorOptions\"\n          />\n        }\n        @case (\"multi-select\") {\n          <pla-table-filter-multi-select\n            [column]=\"column\"\n            [appliedFilters]=\"appliedFilters\"\n            [operatorOptions]=\"operatorOptions\"\n          />\n        }\n        @case (\"date\") {\n          <pla-table-filter-date\n            [column]=\"column\"\n            [appliedFilters]=\"appliedFilters\"\n          />\n        }\n        @default {\n          <pla-table-filter-input-text\n            [column]=\"column\"\n            [appliedFilters]=\"appliedFilters\"\n            [operatorOptions]=\"operatorOptions\"\n          />\n        }\n      }\n    }\n  </th>\n}\n\n<!-- @for (item of frozenColumns; track $index) {\n  @if (frozenColumns.length > 0) {\n    <th\n      id=\"action\"\n      [ngStyle]=\"{\n        'text-align': 'center',\n        'border-left': '1px solid #e2e8f0',\n      }\"\n      [alignFrozen]=\"item.alignFrozen ? item.alignFrozen : 'right'\"\n      pFrozenColumn\n      [frozen]=\"true\"\n    >\n      @switch (item.columnType) {\n        @case (\"action\") {\n          <span></span>\n        }\n        @default {\n          <span> {{ item.title }}</span>\n        }\n      }\n    </th>\n  }\n} -->\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TableModule }, { kind: "directive", type: i1$5.FrozenColumn, selector: "[pFrozenColumn]", inputs: ["frozen", "alignFrozen"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: PlaTableFilterInputTextComponent, selector: "pla-table-filter-input-text", inputs: ["column", "appliedFilters", "operatorOptions"] }, { kind: "component", type: PlaTableFilterMultiSelectComponent, selector: "pla-table-filter-multi-select", inputs: ["column", "appliedFilters", "operatorOptions"] }, { kind: "component", type: PlaTableFilterDateComponent, selector: "pla-table-filter-date", inputs: ["appliedFilters", "column"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tr[pla-table-filter]', imports: [
                        TableModule,
                        CommonModule,
                        PlaTableFilterInputTextComponent,
                        PlaTableFilterMultiSelectComponent,
                        PlaTableFilterDateComponent,
                    ], template: "@for (column of tableColumns; track $index) {\n  <th\n    [id]=\"column.field\"\n    [ngStyle]=\"{\n      'text-align': column.headerAlign,\n      'min-width': column.minWidth,\n      'max-width': column.maxWidth,\n      'border-left': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n      'border-right': column.frozenColumn ? '1px solid #e2e8f0' : 'none',\n    }\"\n    [alignFrozen]=\"column.alignFrozen ? column.alignFrozen : 'right'\"\n    pFrozenColumn\n    [frozen]=\"column.frozenColumn ? true : false\"\n  >\n    @if (column.isDisplayFilter) {\n      <!-- TODO: Filter Here -->\n      @switch (column.filterType) {\n        @case (\"input-text\") {\n          <pla-table-filter-input-text\n            [column]=\"column\"\n            [appliedFilters]=\"appliedFilters\"\n            [operatorOptions]=\"operatorOptions\"\n          />\n        }\n        @case (\"multi-select\") {\n          <pla-table-filter-multi-select\n            [column]=\"column\"\n            [appliedFilters]=\"appliedFilters\"\n            [operatorOptions]=\"operatorOptions\"\n          />\n        }\n        @case (\"date\") {\n          <pla-table-filter-date\n            [column]=\"column\"\n            [appliedFilters]=\"appliedFilters\"\n          />\n        }\n        @default {\n          <pla-table-filter-input-text\n            [column]=\"column\"\n            [appliedFilters]=\"appliedFilters\"\n            [operatorOptions]=\"operatorOptions\"\n          />\n        }\n      }\n    }\n  </th>\n}\n\n<!-- @for (item of frozenColumns; track $index) {\n  @if (frozenColumns.length > 0) {\n    <th\n      id=\"action\"\n      [ngStyle]=\"{\n        'text-align': 'center',\n        'border-left': '1px solid #e2e8f0',\n      }\"\n      [alignFrozen]=\"item.alignFrozen ? item.alignFrozen : 'right'\"\n      pFrozenColumn\n      [frozen]=\"true\"\n    >\n      @switch (item.columnType) {\n        @case (\"action\") {\n          <span></span>\n        }\n        @default {\n          <span> {{ item.title }}</span>\n        }\n      }\n    </th>\n  }\n} -->\n" }]
        }], propDecorators: { tableColumns: [{
                type: Input,
                args: [{ required: true }]
            }], appliedFilters: [{
                type: Input,
                args: [{ required: true }]
            }], operatorOptions: [{
                type: Input,
                args: [{ required: true }]
            }] } });

const DEFAULT_TABLE_LAZY_LOAD_CONFIG = {
    islazyLoad: false,
    totalRecord: 0,
};
const DEFAULT_FIRST_PAGE = 0;
const DEFAULT_ROW_PER_PAGE = 10;
const DEFAULT_TABLE_PAGINATOR_CONFIG = {
    isShowPagination: true,
    paginatorProperties: {
        rowsPerPageOptions: [10, 25, 50],
        showCurrentPageReport: true,
        currentPageReportTemplate: 'Showing {first} to {last} of {totalRecords} entries',
        paginatorDropdownAppendTo: 'body',
    },
};
const DEFAULT_TABLE_FILTER_OPERATOR_OPTIONS = [
    { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
    { label: 'Contains', value: FilterMatchMode.CONTAINS },
    { label: 'Ends With', value: FilterMatchMode.ENDS_WITH },
    { label: 'Equals', value: FilterMatchMode.EQUALS },
    { label: 'Not Equals', value: FilterMatchMode.NOT_EQUALS },
];
// Remark: 'tag' columns render rowData[field] as { value, severity } (see pla-table-body.component.html),
// but PrimeNG's client-side (islazyLoad: false) filter reads rowData[field] directly and compares the
// whole object against the filter value, so it never matches. Unwrap '.value' before delegating to the
// default constraint so 'tag' columns are filterable when islazyLoad is false. Registered once globally
// since FilterService is a root-level singleton shared by every pla-table instance.
const TAG_AWARE_FILTER_MATCH_MODES = [
    FilterMatchMode.STARTS_WITH,
    FilterMatchMode.CONTAINS,
    FilterMatchMode.ENDS_WITH,
    FilterMatchMode.EQUALS,
    FilterMatchMode.NOT_EQUALS,
    FilterMatchMode.IN,
];
const TAG_AWARE_FILTER_MARKER = '__isTagAwareFilter__';
function unwrapTagValue(value) {
    return value && typeof value === 'object' && 'value' in value
        ? value.value
        : value;
}
class PlaTableComponent {
    filterService;
    table;
    tableLoading = false;
    tableData = [];
    tableColumns = [];
    tableConfig = {
        isShowFilter: true,
        first: DEFAULT_FIRST_PAGE,
        rows: DEFAULT_ROW_PER_PAGE,
        tableLazyLoadConfig: DEFAULT_TABLE_LAZY_LOAD_CONFIG,
        tablePaginatorConfig: DEFAULT_TABLE_PAGINATOR_CONFIG,
    };
    // Remark: Get event that emit by p-table of primeNG type of the event is FilterMetadata.
    appliedFilters = {};
    applicationStorageName = '';
    tableName = '';
    operatorOptions = DEFAULT_TABLE_FILTER_OPERATOR_OPTIONS;
    onChangeTableFiltersEmit = new EventEmitter();
    rowSelect = new EventEmitter();
    metaKey = true;
    selectedRow = null;
    rows = DEFAULT_ROW_PER_PAGE;
    skeletonTable = Array.from({
        length: DEFAULT_ROW_PER_PAGE,
    }).map((_, i) => i);
    constructor(filterService) {
        this.filterService = filterService;
        this.registerTagAwareFilterMatchModes();
    }
    ngOnInit() {
        this.onGetFilterFromLocalStorage();
    }
    registerTagAwareFilterMatchModes() {
        // Remark: Guard against re-wrapping by marking the registered function itself rather than a
        // module-level flag — a module flag would go stale (and silently skip registration) if this
        // component's FilterService instance is ever recreated without the module being reloaded too.
        TAG_AWARE_FILTER_MATCH_MODES.forEach((mode) => {
            const baseFilter = this.filterService.filters[mode];
            if (baseFilter[TAG_AWARE_FILTER_MARKER]) {
                return;
            }
            const tagAwareFilter = Object.assign((value, filter, filterLocale) => baseFilter(unwrapTagValue(value), filter, filterLocale), { [TAG_AWARE_FILTER_MARKER]: true });
            this.filterService.register(mode, tagAwareFilter);
        });
    }
    ngOnChanges() {
        if (this.operatorOptions.length === 0) {
            this.operatorOptions = DEFAULT_TABLE_FILTER_OPERATOR_OPTIONS;
        }
        // this.onGetFilterFromLocalStorage();
    }
    onRowSelect(event) {
        this.rowSelect.emit(event.data);
    }
    get paginatorConfig() {
        return this.tableConfig.tablePaginatorConfig.isShowPagination
            ? this.tableConfig.tablePaginatorConfig.paginatorProperties
            : {
                rowsPerPageOptions: [],
                showCurrentPageReport: false,
                paginatorDropdownAppendTo: 'body',
                currentPageReportTemplate: '',
            };
    }
    customSort(event) {
        event.data?.sort((data1, data2) => {
            const field = event.field;
            let value1 = data1[field];
            let value2 = data2[field];
            // Handle tag columns (objects with 'value' property)
            if (typeof value1 === 'object' && value1?.value) {
                value1 = value1.value;
            }
            if (typeof value2 === 'object' && value2?.value) {
                value2 = value2.value;
            }
            let result = 0;
            if (value1 == null && value2 != null) {
                result = -1;
            }
            else if (value1 != null && value2 == null) {
                result = 1;
            }
            else if (value1 == null && value2 == null) {
                result = 0;
            }
            else if (typeof value1 === 'string' && typeof value2 === 'string') {
                result = value1.localeCompare(value2);
            }
            else {
                result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
            }
            return event.order * result;
        });
    }
    onChangeFilter(event) {
        // 1. Deep clone the filters so we don't mutate the live UI state
        const filtersToSave = JSON.parse(JSON.stringify(event.filters, (key, value) => {
            // Check if the value is a date string or object
            if (this.isDate(value)) {
                const date = new Date(value);
                // Offset the date so that toISOString() returns your local time as "Z"
                const offset = date.getTimezoneOffset() * 60000;
                return (new Date(date.getTime() - offset).toISOString().split('T')[0] +
                    'T00:00:00.000Z');
            }
            return value;
        }));
        const currentAppStorageData = localStorage.getItem(this.applicationStorageName) || '{}';
        const dataState = JSON.parse(currentAppStorageData);
        this.appliedFilters = (event.filters ?? {});
        Object.assign(dataState, {
            filter: {
                ...dataState.filter,
                [this.tableName]: filtersToSave, // Save the adjusted filters
            },
        });
        localStorage.setItem(this.applicationStorageName, JSON.stringify(dataState));
    }
    // Helper to detect dates
    isDate(value) {
        return (value instanceof Date ||
            (typeof value === 'string' &&
                !isNaN(Date.parse(value)) &&
                value.length > 15));
    }
    onGetFilterFromLocalStorage() {
        const currentAppStorageData = localStorage.getItem(this.applicationStorageName) || '{}';
        const currentFilter = JSON.parse(currentAppStorageData).filter?.[this.tableName];
        // Remark: Reconcile against the current column config even when a persisted filter already exists.
        // A column's filterType can change between releases (e.g. multi-select -> input-text), but a returning
        // user's localStorage may still hold the old matchMode/value shape (e.g. an 'in' array filter left over
        // from multi-select), which is incompatible with the new filterType and silently never matches.
        const resolvedFilters = currentFilter
            ? this.reconcileFilterMatchModes(currentFilter)
            : this.buildDefaultFilters();
        // Remark: When we get filter from local storage we need to normalize the date filter value because the value is string after we save to local storage but the table component expect the value is Date type for date column to work with p-table filter feature.
        this.normalizeDateFilters(resolvedFilters);
        this.appliedFilters = resolvedFilters;
        const dataState = JSON.parse(currentAppStorageData);
        Object.assign(dataState, {
            filter: {
                ...dataState.filter,
                [this.tableName]: resolvedFilters,
            },
        });
        localStorage.setItem(this.applicationStorageName, JSON.stringify(dataState));
    }
    reconcileFilterMatchModes(persistedFilters) {
        return this.tableColumns
            .filter((col) => col.field)
            .reduce((acc, col) => {
            const expectedMatchMode = this.initFilterMatchMode(col.filterType);
            const persisted = persistedFilters[col.field];
            acc[col.field] =
                persisted?.matchMode === expectedMatchMode
                    ? persisted
                    : { value: null, matchMode: expectedMatchMode };
            return acc;
        }, {});
    }
    normalizeDateFilters(filters) {
        // Get all keys from the filters object
        Object.keys(filters).forEach((key) => {
            // Remark: Use match mode as between for date column.
            if (key.toLowerCase().includes('date')) {
                const field = filters[key];
                // Ensure the field exists and has a truthy value before converting
                if (field?.value) {
                    field.value = Array.isArray(field.value)
                        ? field.value.map((date) => (date ? new Date(date) : null))
                        : new Date(field.value);
                }
            }
        });
    }
    buildDefaultFilters() {
        // Remark: Use match mode as between for date column.
        return this.tableColumns
            .filter((col) => col.field)
            .reduce((acc, col) => {
            acc[col.field] = {
                value: null,
                matchMode: this.initFilterMatchMode(col?.filterType),
            };
            return acc;
        }, {});
    }
    initFilterMatchMode(filterType) {
        if (filterType === 'date') {
            return FilterMatchMode.BETWEEN;
        }
        else if (filterType === 'multi-select') {
            return FilterMatchMode.IN;
        }
        else {
            return FilterMatchMode.STARTS_WITH;
        }
    }
    // Remark: Only For LazyLoad is true.
    onChangeTableFilters(event) {
        // Remark: First and current page is essential For payload.
        this.tableConfig.first = event?.first || 0;
        this.rows = event?.rows || DEFAULT_ROW_PER_PAGE;
        const currentPage = this.tableConfig.first / this.rows + 1;
        // Remark: Create Payload section.
        const selectedColumnFilter = this.transformFilterValue(this.appliedFilters).filter((item) => !(item.operator === 'IN' && item.value === ''));
        const newPayload = {
            rowPerPage: this.rows,
            pageNumber: currentPage || 1,
            sortBy: event.sortField,
            sortType: this.getSortOrder(event.sortOrder, event.sortField),
            searchParams: { columns: selectedColumnFilter },
        };
        this.onChangeTableFiltersEmit.emit(newPayload);
    }
    getSortOrder(sortOrder, sortField) {
        if (sortField === undefined) {
            return 'DESC';
        }
        return sortOrder === 1 ? 'ASC' : 'DESC';
    }
    transformFilterValue(input) {
        const filters = Object.entries(input)
            .filter(([_, filter]) => filter?.value !== null && filter?.value !== undefined)
            .map(([key, filter]) => {
            // Check if the key ends with or contains '_date' (case-insensitive)
            const isDateKey = key.toLowerCase().endsWith('_date');
            if (isDateKey) {
                // Cast filter.value as string array for the date range logic
                const dateArray = filter?.value;
                // Handle cases where dateArray might be empty or missing
                const startDate = dateArray?.[0];
                const endDate = dateArray?.[1] ?? startDate;
                const expected = [startDate, endDate];
                const formatDateValue = this.formatDate(expected);
                return {
                    fieldName: key,
                    operator: 'between',
                    value: formatDateValue,
                };
            }
            else {
                return {
                    fieldName: key,
                    operator: this.getOperator(filter?.matchMode),
                    value: String(filter?.value),
                };
            }
        });
        return filters;
    }
    formatDate = (dateInput) => {
        const pad = (n) => n.toString().padStart(2, '0');
        const format = (dateString) => {
            const fullDate = new Date(dateString);
            const date = `${pad(fullDate.getDate())}`;
            const month = `${pad(fullDate.getMonth() + 1)}`;
            const year = `${fullDate.getFullYear()}`;
            return `${year}-${month}-${date}`;
        };
        if (Array.isArray(dateInput)) {
            const result = [];
            for (const element of dateInput) {
                result.push(format(element));
            }
            // For between use string instead of array string 'from date, to date' -> '2025-06-12,2025-06-21'
            return result.join(',');
        }
        return format(dateInput);
    };
    getOperator(operatorString) {
        let operator;
        switch (operatorString?.toLowerCase()) {
            // Remark: Can use FilterMatchMode from primeNG version 19 but this switch case base on OPERATOR that handle in client-gio.
            // Can change or add more case later.
            case 'startswith':
                operator = OPERATOR.STARTS_WITH;
                break;
            case 'contains':
                operator = OPERATOR.LIKE;
                break;
            case 'endswith':
                operator = OPERATOR.ENDS_WITH;
                break;
            case 'equals':
                operator = OPERATOR.EQUAL;
                break;
            case 'notequals':
                operator = OPERATOR.NOT_EQUAL;
                break;
            case 'in':
                operator = OPERATOR.IN;
                break;
            default:
                operator = OPERATOR.STARTS_WITH;
                break;
        }
        return operator;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableComponent, deps: [{ token: i2$2.FilterService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PlaTableComponent, isStandalone: true, selector: "pla-table", inputs: { tableLoading: "tableLoading", tableData: "tableData", tableColumns: "tableColumns", tableConfig: "tableConfig", appliedFilters: "appliedFilters", applicationStorageName: "applicationStorageName", tableName: "tableName", operatorOptions: "operatorOptions" }, outputs: { onChangeTableFiltersEmit: "onChangeTableFiltersEmit", rowSelect: "rowSelect" }, viewQueries: [{ propertyName: "table", first: true, predicate: ["dt"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<p-table\n  #dt\n  [rows]=\"tableConfig.rows\"\n  [value]=\"tableLoading ? skeletonTable : tableData\"\n  [totalRecords]=\"\n    tableConfig.tableLazyLoadConfig.islazyLoad\n      ? tableConfig.tableLazyLoadConfig.totalRecord\n      : 0\n  \"\n  [lazy]=\"tableConfig.tableLazyLoadConfig.islazyLoad\"\n  (onLazyLoad)=\"\n    tableConfig.tableLazyLoadConfig.islazyLoad\n      ? onChangeTableFilters($event)\n      : null\n  \"\n  [customSort]=\"true\"\n  [filters]=\"appliedFilters\"\n  (onFilter)=\"onChangeFilter($event)\"\n  (sortFunction)=\"customSort($event)\"\n  [paginator]=\"tableConfig.tablePaginatorConfig.isShowPagination\"\n  [rowsPerPageOptions]=\"paginatorConfig.rowsPerPageOptions\"\n  [showCurrentPageReport]=\"paginatorConfig.showCurrentPageReport\"\n  [paginatorDropdownAppendTo]=\"paginatorConfig.paginatorDropdownAppendTo\"\n  [currentPageReportTemplate]=\"paginatorConfig.currentPageReportTemplate\"\n  columnResizeMode=\"fit\"\n  [scrollable]=\"true\"\n  [resizableColumns]=\"true\"\n  [(first)]=\"tableConfig.first\"\n  [selectionMode]=\"tableConfig.selectionMode\"\n  [(selection)]=\"selectedRow\"\n  [metaKeySelection]=\"metaKey\"\n  (onRowSelect)=\"onRowSelect($event)\"\n>\n  <ng-template pTemplate=\"header\">\n    <tr pla-table-header [tableColumns]=\"tableColumns\"></tr>\n    <!-- Remark: Allow show filter as default -->\n    @if (tableConfig.isShowFilter ?? true) {\n      <tr\n        pla-table-filter\n        [tableColumns]=\"tableColumns\"\n        [appliedFilters]=\"appliedFilters\"\n        [operatorOptions]=\"operatorOptions\"\n      ></tr>\n    }\n  </ng-template>\n\n  <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\n    @if (!tableLoading) {\n      <tr\n        pla-table-body\n        [applicationStorageName]=\"applicationStorageName\"\n        [tableColumns]=\"tableColumns\"\n        [rowData]=\"rowData\"\n        [rowIndex]=\"rowIndex\"\n        [pSelectableRow]=\"\n          tableConfig.selectionMode !== undefined ? rowData : null\n        \"\n      ></tr>\n    }\n  </ng-template>\n</p-table>\n", styles: [".p-datatable-filter-constraint-selected{color:var(--color-white)!important}.p-datatable-filter>p-columnfilterformelement{width:100%!important}.p-datatable-filter>p-columnfilterformelement p-datepicker,.p-datatable-filter>p-columnfilterformelement .p-datepicker,.p-datatable-filter>p-columnfilterformelement .p-inputtext{width:100%!important;max-width:none!important}.p-datatable{border:1px solid #eaeaea;border-radius:1.25rem;overflow:hidden}.p-datatable .p-datatable-thead>tr th{background-color:var(--table-header);font-weight:500}.p-datatable .p-datatable-thead>tr:first-child th:first-child{border-top-left-radius:var(--border-radius-table)}.p-datatable .p-datatable-thead>tr:first-child th:last-child{border-top-right-radius:var(--border-radius-table)}.p-datatable .p-datatable-thead>tr>th.p-datatable-column-sorted{background-color:transparent!important;color:inherit!important}.p-datatable .p-datatable-thead>tr>th{height:3.4375rem!important;padding:0rem .625rem!important}.p-datatable .p-datatable-thead>tr>th .p-datepicker-input{width:14.6875rem}.p-datatable .p-datatable-thead>tr>th .p-button-secondary{border:0rem}.p-datatable .p-datatable-thead>tr>th .p-button-secondary:hover{background-color:var(--color-white)!important;box-shadow:none}.p-datatable .p-datatable-header{padding:0rem!important}.p-datatable .p-datatable-thead{z-index:5!important}.p-datatable .p-datatable-thead .p-inputtext{height:2.125rem}.p-datatable .p-datatable-thead .p-select{height:2.125rem!important}.p-datatable .p-datatable-tbody>tr>td[pfrozencolumn]{padding:0}.p-datatable .p-datatable-tbody>tr.p-datatable-row-selected{color:var(--color-white)}.p-datatable table .p-multiselect{min-height:unset!important;height:2.125rem!important}.p-datatable table .p-multiselect .p-multiselect-label-container{align-items:center!important}.p-datatable table .p-multiselect .p-multiselect-label{padding-top:0!important;padding-bottom:0!important}.p-datatable table .p-multiselect .p-multiselect-label.p-placeholder{color:gray!important}.p-datatable table .p-multiselect .p-multiselect-dropdown{padding:0!important;align-items:center!important}.p-datatable .p-button-text:not(:disabled):not(:hover){color:#757575!important}.p-datatable .p-datatable-column-filter-button{display:flex;align-items:center;border:none!important;background-color:transparent!important;padding:.75rem!important;width:1rem!important;max-height:1rem!important}.p-datatable .p-datatable-column-filter-button:hover{box-shadow:none!important;background-color:transparent!important}.p-datatable .p-datatable-filter-add-rule-button,.p-datatable .p-datatable-filter-operator{display:none!important}.p-datatable .p-datepicker{position:relative!important}.p-datatable .p-datepicker .p-icon{cursor:pointer;margin-left:-3.125rem}.p-datatable .p-datepicker .p-inputwrapper{position:relative!important}.p-datatable .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover{background-color:transparent!important;color:inherit!important}.p-datatable .pi{cursor:pointer;padding:0}.p-datatable .pi .pi-filter-fill{color:var(--color-primary-2)!important}.p-datatable .p-paginator{padding:.9375rem 1.25rem .9375rem 1.5rem;border-bottom:1px solid #eaeaea!important;border-bottom-left-radius:1.25rem!important;border-bottom-right-radius:1.25rem!important}.p-datatable .p-paginator .p-paginator-page,.p-datatable .p-paginator .p-paginator-next,.p-datatable .p-paginator .p-paginator-last,.p-datatable .p-paginator .p-paginator-first,.p-datatable .p-paginator .p-paginator-prev{color:#333!important;font-size:1rem;height:1.875rem!important;min-width:1.875rem!important;display:flex;align-items:center;justify-content:center;font-family:var(--font-family);font-weight:400}.p-datatable .p-paginator .p-paginator-page.p-paginator-page-selected{background-color:transparent!important;color:var(--color-primary-1)!important;border-color:var(--color-primary-1)!important;border-width:.0625rem!important;border-style:solid!important;font-family:var(--font-family);font-weight:400}.p-datatable .p-paginator .p-paginator-current{order:-1;margin-right:auto}.p-datatable .p-paginator-rpp-dropdown{height:2.5rem!important}.filter-select.p-select-overlay{max-width:15.625rem!important}.filter-select.p-select-overlay li{text-wrap:auto}.filter-select.p-multiselect-overlay{max-width:15.625rem!important}.filter-select.p-multiselect-overlay li{text-wrap:auto}.p-datatable-tbody>tr>td.p-cell-editing{padding:.25rem}.p-datatable-tbody>tr>td.p-cell-editing .p-inputtext,.p-datatable-tbody>tr>td.p-cell-editing .p-select{height:2.25rem!important;padding:0 .25rem;width:auto;max-width:100%}.p-datatable-tbody>tr>td.p-cell-editing .p-inputtext input,.p-datatable-tbody>tr>td.p-cell-editing .p-select input{max-width:100%}.p-datatable-tbody>tr>td.p-cell-editing .p-select>span{padding-top:0!important;padding-bottom:0!important}.p-datatable-tbody>tr>td.p-cell-editing .p-floatlabel-in>label{display:none!important}.p-datatable-tbody>tr.editable-column-submitted-invalid td:first-child{background-color:#fceaea!important}.p-datatable-tbody>tr.editable-column-submitted-invalid td.p-datatable-frozen-column{background-color:#fceaea!important}.p-datatable-tbody>tr.editable-column-submitted-invalid td:has(.ng-invalid.ng-dirty){background-color:#fceaea!important}.p-datatable-tbody>tr td.invalid-input-cell{background-color:#fceaea!important}.p-datatable-tbody td.disabled-editable-cell{background-color:#f5f5f5!important}.p-datatable-tbody>tr>td>p-cellEditor{word-break:break-all;text-wrap:auto}\n"], dependencies: [{ kind: "ngmodule", type: TableModule }, { kind: "component", type: i1$5.Table, selector: "p-table", inputs: ["frozenColumns", "frozenValue", "style", "styleClass", "tableStyle", "tableStyleClass", "paginator", "pageLinks", "rowsPerPageOptions", "alwaysShowPaginator", "paginatorPosition", "paginatorStyleClass", "paginatorDropdownAppendTo", "paginatorDropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showFirstLastIcon", "showPageLinks", "defaultSortOrder", "sortMode", "resetPageOnSort", "selectionMode", "selectionPageOnly", "contextMenuSelection", "contextMenuSelectionMode", "dataKey", "metaKeySelection", "rowSelectable", "rowTrackBy", "lazy", "lazyLoadOnInit", "compareSelectionBy", "csvSeparator", "exportFilename", "filters", "globalFilterFields", "filterDelay", "filterLocale", "expandedRowKeys", "editingRowKeys", "rowExpandMode", "scrollable", "scrollDirection", "rowGroupMode", "scrollHeight", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "virtualScrollDelay", "frozenWidth", "responsive", "contextMenu", "resizableColumns", "columnResizeMode", "reorderableColumns", "loading", "loadingIcon", "showLoader", "rowHover", "customSort", "showInitialSortBadge", "autoLayout", "exportFunction", "exportHeader", "stateKey", "stateStorage", "editMode", "groupRowsBy", "size", "showGridlines", "stripedRows", "groupRowsByOrder", "responsiveLayout", "breakpoint", "paginatorLocale", "value", "columns", "first", "rows", "totalRecords", "sortField", "sortOrder", "multiSortMeta", "selection", "virtualRowHeight", "selectAll"], outputs: ["contextMenuSelectionChange", "selectAllChange", "selectionChange", "onRowSelect", "onRowUnselect", "onPage", "onSort", "onFilter", "onLazyLoad", "onRowExpand", "onRowCollapse", "onContextMenuSelect", "onColResize", "onColReorder", "onRowReorder", "onEditInit", "onEditComplete", "onEditCancel", "onHeaderCheckboxToggle", "sortFunction", "firstChange", "rowsChange", "onStateSave", "onStateRestore"] }, { kind: "directive", type: i2$2.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i1$5.SelectableRow, selector: "[pSelectableRow]", inputs: ["pSelectableRow", "pSelectableRowIndex", "pSelectableRowDisabled"] }, { kind: "ngmodule", type: CommonModule }, { kind: "component", type: PlaTableHeaderComponent, selector: "tr[pla-table-header]", inputs: ["tableColumns"] }, { kind: "component", type: PlaTableFilterComponent, selector: "tr[pla-table-filter]", inputs: ["tableColumns", "appliedFilters", "operatorOptions"] }, { kind: "component", type: PlaTableBodyComponent, selector: "tr[pla-table-body]", inputs: ["applicationStorageName", "tableColumns", "rowData", "rowIndex"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlaTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pla-table', standalone: true, imports: [
                        TableModule,
                        CommonModule,
                        PlaTableHeaderComponent,
                        PlaTableFilterComponent,
                        PlaTableBodyComponent,
                    ], template: "<p-table\n  #dt\n  [rows]=\"tableConfig.rows\"\n  [value]=\"tableLoading ? skeletonTable : tableData\"\n  [totalRecords]=\"\n    tableConfig.tableLazyLoadConfig.islazyLoad\n      ? tableConfig.tableLazyLoadConfig.totalRecord\n      : 0\n  \"\n  [lazy]=\"tableConfig.tableLazyLoadConfig.islazyLoad\"\n  (onLazyLoad)=\"\n    tableConfig.tableLazyLoadConfig.islazyLoad\n      ? onChangeTableFilters($event)\n      : null\n  \"\n  [customSort]=\"true\"\n  [filters]=\"appliedFilters\"\n  (onFilter)=\"onChangeFilter($event)\"\n  (sortFunction)=\"customSort($event)\"\n  [paginator]=\"tableConfig.tablePaginatorConfig.isShowPagination\"\n  [rowsPerPageOptions]=\"paginatorConfig.rowsPerPageOptions\"\n  [showCurrentPageReport]=\"paginatorConfig.showCurrentPageReport\"\n  [paginatorDropdownAppendTo]=\"paginatorConfig.paginatorDropdownAppendTo\"\n  [currentPageReportTemplate]=\"paginatorConfig.currentPageReportTemplate\"\n  columnResizeMode=\"fit\"\n  [scrollable]=\"true\"\n  [resizableColumns]=\"true\"\n  [(first)]=\"tableConfig.first\"\n  [selectionMode]=\"tableConfig.selectionMode\"\n  [(selection)]=\"selectedRow\"\n  [metaKeySelection]=\"metaKey\"\n  (onRowSelect)=\"onRowSelect($event)\"\n>\n  <ng-template pTemplate=\"header\">\n    <tr pla-table-header [tableColumns]=\"tableColumns\"></tr>\n    <!-- Remark: Allow show filter as default -->\n    @if (tableConfig.isShowFilter ?? true) {\n      <tr\n        pla-table-filter\n        [tableColumns]=\"tableColumns\"\n        [appliedFilters]=\"appliedFilters\"\n        [operatorOptions]=\"operatorOptions\"\n      ></tr>\n    }\n  </ng-template>\n\n  <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\n    @if (!tableLoading) {\n      <tr\n        pla-table-body\n        [applicationStorageName]=\"applicationStorageName\"\n        [tableColumns]=\"tableColumns\"\n        [rowData]=\"rowData\"\n        [rowIndex]=\"rowIndex\"\n        [pSelectableRow]=\"\n          tableConfig.selectionMode !== undefined ? rowData : null\n        \"\n      ></tr>\n    }\n  </ng-template>\n</p-table>\n", styles: [".p-datatable-filter-constraint-selected{color:var(--color-white)!important}.p-datatable-filter>p-columnfilterformelement{width:100%!important}.p-datatable-filter>p-columnfilterformelement p-datepicker,.p-datatable-filter>p-columnfilterformelement .p-datepicker,.p-datatable-filter>p-columnfilterformelement .p-inputtext{width:100%!important;max-width:none!important}.p-datatable{border:1px solid #eaeaea;border-radius:1.25rem;overflow:hidden}.p-datatable .p-datatable-thead>tr th{background-color:var(--table-header);font-weight:500}.p-datatable .p-datatable-thead>tr:first-child th:first-child{border-top-left-radius:var(--border-radius-table)}.p-datatable .p-datatable-thead>tr:first-child th:last-child{border-top-right-radius:var(--border-radius-table)}.p-datatable .p-datatable-thead>tr>th.p-datatable-column-sorted{background-color:transparent!important;color:inherit!important}.p-datatable .p-datatable-thead>tr>th{height:3.4375rem!important;padding:0rem .625rem!important}.p-datatable .p-datatable-thead>tr>th .p-datepicker-input{width:14.6875rem}.p-datatable .p-datatable-thead>tr>th .p-button-secondary{border:0rem}.p-datatable .p-datatable-thead>tr>th .p-button-secondary:hover{background-color:var(--color-white)!important;box-shadow:none}.p-datatable .p-datatable-header{padding:0rem!important}.p-datatable .p-datatable-thead{z-index:5!important}.p-datatable .p-datatable-thead .p-inputtext{height:2.125rem}.p-datatable .p-datatable-thead .p-select{height:2.125rem!important}.p-datatable .p-datatable-tbody>tr>td[pfrozencolumn]{padding:0}.p-datatable .p-datatable-tbody>tr.p-datatable-row-selected{color:var(--color-white)}.p-datatable table .p-multiselect{min-height:unset!important;height:2.125rem!important}.p-datatable table .p-multiselect .p-multiselect-label-container{align-items:center!important}.p-datatable table .p-multiselect .p-multiselect-label{padding-top:0!important;padding-bottom:0!important}.p-datatable table .p-multiselect .p-multiselect-label.p-placeholder{color:gray!important}.p-datatable table .p-multiselect .p-multiselect-dropdown{padding:0!important;align-items:center!important}.p-datatable .p-button-text:not(:disabled):not(:hover){color:#757575!important}.p-datatable .p-datatable-column-filter-button{display:flex;align-items:center;border:none!important;background-color:transparent!important;padding:.75rem!important;width:1rem!important;max-height:1rem!important}.p-datatable .p-datatable-column-filter-button:hover{box-shadow:none!important;background-color:transparent!important}.p-datatable .p-datatable-filter-add-rule-button,.p-datatable .p-datatable-filter-operator{display:none!important}.p-datatable .p-datepicker{position:relative!important}.p-datatable .p-datepicker .p-icon{cursor:pointer;margin-left:-3.125rem}.p-datatable .p-datepicker .p-inputwrapper{position:relative!important}.p-datatable .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover{background-color:transparent!important;color:inherit!important}.p-datatable .pi{cursor:pointer;padding:0}.p-datatable .pi .pi-filter-fill{color:var(--color-primary-2)!important}.p-datatable .p-paginator{padding:.9375rem 1.25rem .9375rem 1.5rem;border-bottom:1px solid #eaeaea!important;border-bottom-left-radius:1.25rem!important;border-bottom-right-radius:1.25rem!important}.p-datatable .p-paginator .p-paginator-page,.p-datatable .p-paginator .p-paginator-next,.p-datatable .p-paginator .p-paginator-last,.p-datatable .p-paginator .p-paginator-first,.p-datatable .p-paginator .p-paginator-prev{color:#333!important;font-size:1rem;height:1.875rem!important;min-width:1.875rem!important;display:flex;align-items:center;justify-content:center;font-family:var(--font-family);font-weight:400}.p-datatable .p-paginator .p-paginator-page.p-paginator-page-selected{background-color:transparent!important;color:var(--color-primary-1)!important;border-color:var(--color-primary-1)!important;border-width:.0625rem!important;border-style:solid!important;font-family:var(--font-family);font-weight:400}.p-datatable .p-paginator .p-paginator-current{order:-1;margin-right:auto}.p-datatable .p-paginator-rpp-dropdown{height:2.5rem!important}.filter-select.p-select-overlay{max-width:15.625rem!important}.filter-select.p-select-overlay li{text-wrap:auto}.filter-select.p-multiselect-overlay{max-width:15.625rem!important}.filter-select.p-multiselect-overlay li{text-wrap:auto}.p-datatable-tbody>tr>td.p-cell-editing{padding:.25rem}.p-datatable-tbody>tr>td.p-cell-editing .p-inputtext,.p-datatable-tbody>tr>td.p-cell-editing .p-select{height:2.25rem!important;padding:0 .25rem;width:auto;max-width:100%}.p-datatable-tbody>tr>td.p-cell-editing .p-inputtext input,.p-datatable-tbody>tr>td.p-cell-editing .p-select input{max-width:100%}.p-datatable-tbody>tr>td.p-cell-editing .p-select>span{padding-top:0!important;padding-bottom:0!important}.p-datatable-tbody>tr>td.p-cell-editing .p-floatlabel-in>label{display:none!important}.p-datatable-tbody>tr.editable-column-submitted-invalid td:first-child{background-color:#fceaea!important}.p-datatable-tbody>tr.editable-column-submitted-invalid td.p-datatable-frozen-column{background-color:#fceaea!important}.p-datatable-tbody>tr.editable-column-submitted-invalid td:has(.ng-invalid.ng-dirty){background-color:#fceaea!important}.p-datatable-tbody>tr td.invalid-input-cell{background-color:#fceaea!important}.p-datatable-tbody td.disabled-editable-cell{background-color:#f5f5f5!important}.p-datatable-tbody>tr>td>p-cellEditor{word-break:break-all;text-wrap:auto}\n"] }]
        }], ctorParameters: () => [{ type: i2$2.FilterService }], propDecorators: { table: [{
                type: ViewChild,
                args: ['dt']
            }], tableLoading: [{
                type: Input,
                args: [{ required: true }]
            }], tableData: [{
                type: Input,
                args: [{ required: true }]
            }], tableColumns: [{
                type: Input,
                args: [{ required: true }]
            }], tableConfig: [{
                type: Input,
                args: [{ required: true }]
            }], appliedFilters: [{
                type: Input
            }], applicationStorageName: [{
                type: Input,
                args: [{ required: true }]
            }], tableName: [{
                type: Input,
                args: [{ required: true }]
            }], operatorOptions: [{
                type: Input,
                args: [{ required: false }]
            }], onChangeTableFiltersEmit: [{
                type: Output
            }], rowSelect: [{
                type: Output
            }] } });

class BuddhistDatePipe {
    locale = inject(LOCALE_ID);
    transform(value, format = 'dd/MM/yyyy') {
        if (value === null || value === undefined || value === '')
            return '-';
        const date = value instanceof Date ? value : new Date(value);
        if (isNaN(date.getTime()))
            return '-';
        // Step 1: format using Angular DatePipe so all tokens (MMM, MMMM, etc.) work
        const formatted = new DatePipe(this.locale).transform(date, format) ?? '-';
        // Step 2: get CE year and Buddhist year (via Intl — no manual +543)
        const ceYear = date.getFullYear().toString();
        const buddhistYear = new Intl.DateTimeFormat('en-u-ca-buddhist-nu-latn', {
            year: 'numeric',
        }).formatToParts(date).find(p => p.type === 'year')?.value ?? '';
        return formatted.replace(ceYear, buddhistYear);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: BuddhistDatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: BuddhistDatePipe, isStandalone: true, name: "buddhistDate" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: BuddhistDatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'buddhistDate',
                    standalone: true,
                }]
        }] });

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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaDialogComponent, isStandalone: true, selector: "pla-dialog", inputs: { visible: "visible", title: "title", message: "message", icon: "icon", actionLabel: "actionLabel", width: "width", height: "height" }, outputs: { visibleChange: "visibleChange", confirm: "confirm", cancel: "cancel" }, ngImport: i0, template: "<p-dialog [modal]=\"true\" [(visible)]=\"visible\" [style]=\"{ width: width, height: height }\">\n\n  <div class=\"flex flex-column items-center gap-4 mb-4\">\n    <img *ngIf=\"icon\" [src]=\"icon\" alt=\"dialog-icon\" style=\"width: 100px; height: 100px;\" />\n    <h2 *ngIf=\"title\">{{ title }}</h2>\n    <p *ngIf=\"message\">{{ message }}</p>\n  </div>\n\n  <ng-content></ng-content>\n\n  <div class=\"flex flex-row justify-content-center gap-2\">\n    <pla-button-outlined [style]=\"{ width: '150px', height: '50px' }\" label=\"Cancel\"\n      (click)=\"onCancel()\"></pla-button-outlined>\n\n    <pla-button-primary-icon [style]=\"{ width: '150px', height: '50px' }\" [label]=\"actionLabel\"\n      (click)=\"onConfirm()\"></pla-button-primary-icon>\n  </div>\n</p-dialog>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: DialogModule }, { kind: "component", type: i1$3.Dialog, selector: "p-dialog", inputs: ["header", "draggable", "resizable", "positionLeft", "positionTop", "contentStyle", "contentStyleClass", "modal", "closeOnEscape", "dismissableMask", "rtl", "closable", "responsive", "appendTo", "breakpoints", "styleClass", "maskStyleClass", "maskStyle", "showHeader", "breakpoint", "blockScroll", "autoZIndex", "baseZIndex", "minX", "minY", "focusOnShow", "maximizable", "keepInViewport", "focusTrap", "transitionOptions", "closeIcon", "closeAriaLabel", "closeTabindex", "minimizeIcon", "maximizeIcon", "closeButtonProps", "maximizeButtonProps", "visible", "style", "position", "role", "content", "contentTemplate", "footerTemplate", "closeIconTemplate", "maximizeIconTemplate", "minimizeIconTemplate", "headlessTemplate"], outputs: ["onShow", "onHide", "visibleChange", "onResizeInit", "onResizeEnd", "onDragEnd", "onMaximize"] }, { kind: "component", type: PlaButtonOutlinedComponent, selector: "pla-button-outlined", inputs: ["disabled", "label", "icon", "styleClass", "style", "iconPos"], outputs: ["onClick"] }, { kind: "component", type: PlaButtonPrimaryIconComponent, selector: "pla-button-primary-icon", inputs: ["styleClass", "style", "disabled", "label", "icon", "iconPos"], outputs: ["onClick"] }] });
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlaStepperComponent, isStandalone: true, selector: "pla-stepper", inputs: { activeStep: "activeStep", activeIndex: "activeIndex", stepItems: "stepItems", formValid: "formValid", showValidationErrors: "showValidationErrors" }, outputs: { activeIndexChange: "activeIndexChange" }, ngImport: i0, template: "<p-stepper [(value)]=\"activeStep\" class=\"basis-[50rem]\">\n  <p-step-list>\n    <ng-container *ngFor=\"let item of stepItems; index as i\">\n      <p-step [value]=\"i + 1\" *ngIf=\"item['active']\">\n        <ng-template\n          #content\n          let-activateCallback=\"activateCallback\"\n          let-active=\"active\"\n        >\n          <div class=\"flex align-items-center flex-col items-center gap-2\">\n            <button\n              style=\"width: 3.125rem; height: 3.125rem; border-radius: 3.125rem\"\n              type=\"button\"\n              class=\"flex align-items-center justify-content-center border-none cursor-pointer\"\n              [ngClass]=\"{\n                'button-step-error': isStepInvalid(item.id || ''),\n                'button-step-selected': i === activeIndex,\n                'button-step-active': i <= activeIndex,\n                'button-step-default': i > activeIndex,\n              }\"\n              (click)=\"onStepClick(activateCallback, i)\"\n            >\n              <svg-icon\n                [src]=\"item.icon\"\n                [svgStyle]=\"{\n                        'height.rem': 1.75,\n                        'width.rem': 1.75,\n                      }\"\n              >\n              </svg-icon>\n            </button>\n            <span\n              class=\"p-stepper-title text-sm text-color-secondary text-center cursor-pointer\"\n              [ngClass]=\"{\n                'steps-title-error': isStepInvalid(item.id || ''),\n                'selected-step-title': !isStepInvalid(item.id || '') && i === activeIndex,\n                'steps-title-default': !isStepInvalid(item.id || '') && i !== activeIndex,\n              }\"\n              (click)=\"onStepClick(activateCallback, i)\"\n            >\n              {{ item.label }}\n            </span>\n          </div>\n        </ng-template>\n      </p-step>\n    </ng-container>\n  </p-step-list>\n</p-stepper>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: StepperModule }, { kind: "component", type: i2$5.Stepper, selector: "p-stepper", inputs: ["value", "linear", "transitionOptions"], outputs: ["valueChange"] }, { kind: "component", type: i2$5.StepList, selector: "p-step-list" }, { kind: "component", type: i2$5.Step, selector: "p-step", inputs: ["value", "disabled"], outputs: ["valueChange"] }, { kind: "ngmodule", type: StepsModule }, { kind: "ngmodule", type: AngularSvgIconModule }, { kind: "component", type: i2$1.SvgIconComponent, selector: "svg-icon", inputs: ["src", "name", "stretch", "applyClass", "svgClass", "class", "viewBox", "svgAriaLabel", "onSVGLoaded", "svgStyle"] }] });
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

const clientLabels = {
    client_Number: 'Client Number',
    address: 'Address',
    personal_Information: 'Personal Information',
    gender: 'Gender',
    marital_Status: 'Marital Status',
    identity_Type: 'Identity Type',
    identity_No: 'ID Card Number / Passport Number',
    religion: 'Religion',
    organization_Information: 'Organization Information',
    registration_Number: 'Registration Number',
    registration_Date: 'Registration Date',
    business_Type: 'Business Type',
    tax_Id: 'Tax ID',
    contact_Person: 'Contact Person',
    contact_Person_Position_Title: 'Position Title',
    contact_Person_Department_Name: 'Department Name',
    contact_Person_Line_Id: 'Line ID',
    contact_Person_Other_Contact: 'Other Contact',
    contact_Person_Mobile_Number: 'Mobile Number',
    contact_Person_Phone_Number: 'Phone Number',
    contact_Person_Email: 'Email',
    nationality: 'Nationality',
    place_Of_Birth: 'Country of Birth',
    date_Of_Birth: 'Date of Birth',
    identity_Expiry_Date: 'ID Card / Passport Expiry Date',
    contact: 'Contact',
    mobile_Number: 'Mobile Number',
    business_Number: 'Business Number',
    email: 'Email',
    home_Phone_Number: 'Home Phone Number',
    years: 'Years',
    employment: 'Employment',
    primary_Occupation: 'Primary Occupation',
    primary_Business: 'Business',
    primary_Position: 'Position',
    primary_Occupation_Group: 'Occupation Group',
    primary_Occupation_Class: 'Occupation Class',
    primary_Workplace_Name: 'Workplace Name',
    primary_Income_Per_Year: 'Annual Income (THB)',
    primary_Employee_Number: 'Employee Number',
    secondary_Occupation: 'Secondary Occupation',
    secondary_Business: 'Business',
    secondary_Position: 'Position',
    secondary_Occupation_Group: 'Occupation Group',
    secondary_Occupation_Class: 'Occupation Class',
    secondary_Workplace_Name: 'Workplace Name',
    secondary_Income_Per_Year: 'Annual Income (THB)',
    secondary_Employee_Number: 'Employee Number',
    consent: 'Consent',
    consent_Start_Date: 'Consent Start Date',
    consent_Expiry_Date: 'Consent End Date',
    consent_Revoked_Date: 'Consent Revoked Date',
    consent_Status: 'Consent Status',
    consent_Revoked_Reason: 'Revoked Reason',
    no_Address: 'No addresses found.',
    no_Consent: 'No consent found.',
    no_Contact_Person: 'No contact person found.',
};

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
    validateSession() {
        this.sessionInvalidated$.next(false);
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

class LoginService {
    http;
    authState;
    isLoggedInSubject = new BehaviorSubject(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();
    constructor(http, authState) {
        this.http = http;
        this.authState = authState;
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
            this.authState.validateSession();
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: LoginService, deps: [{ token: i1$6.HttpClient }, { token: AuthStateService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: LoginService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: LoginService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$6.HttpClient }, { type: AuthStateService }] });

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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: UserProfileService, deps: [{ token: i1$6.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: UserProfileService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: UserProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$6.HttpClient }] });

class AccessMenuGuard {
    menuService = inject(MenuService);
    router = inject(Router);
    async canActivate(route, state) {
        const currentUrl = state.url;
        const storage = route.data['storage'];
        const fallbackUrl = route.data['fallbackUrl'];
        try {
            const groupMenu = await this.menuService.getGroupMenu(currentUrl, storage);
            if (!groupMenu || !groupMenu.targetMenu) {
                return await this.handleAccessDenied(fallbackUrl, currentUrl, storage, route);
            }
            const targetMenuUrl = groupMenu.targetMenu.menuURL;
            // Check if targetMenuUrl exists in the current URL
            // This handles cases with parameters e.g. /product-general/123 contains /product-general
            if (targetMenuUrl && currentUrl.includes(targetMenuUrl.toLowerCase())) {
                return true;
            }
            return await this.handleAccessDenied(fallbackUrl, currentUrl, storage, route);
        }
        catch {
            // console.error('AccessMenuGuard Error:', error);
            return await this.handleAccessDenied(fallbackUrl, currentUrl, storage, route);
        }
    }
    async handleAccessDenied(fallbackUrl, currentUrl, storage, route) {
        if (fallbackUrl) {
            // 1. Prevent infinite redirect loop to the same URL
            if (fallbackUrl === currentUrl || currentUrl.includes(fallbackUrl)) {
                console.warn('AccessMenuGuard: Prevented redirect loop to same URL', fallbackUrl);
                return false;
            }
            // 2. Prevent Circular Redirects (A -> B -> A)
            // Check if we have already been redirected by this guard
            const isRedirected = route?.queryParams['authRedirect'];
            if (isRedirected) {
                console.warn('AccessMenuGuard: Prevented circular redirect loop', fallbackUrl);
                return false;
            }
            // 3. Smart Redirect
            try {
                // Check if user has explicit permission for fallbackUrl
                const fallbackMenu = await this.menuService.getGroupMenu(fallbackUrl, storage);
                if (fallbackMenu && fallbackMenu.targetMenu) {
                    // User definitely has permission. Redirect cleanly.
                    return this.router.createUrlTree([fallbackUrl]);
                }
            }
            catch {
                // Ignore error, proceed to fallback attempt
            }
            // If we don't find it in menu, it might be:
            // a) A public page (Safe to redirect)
            // b) A forbidden page (Target guard will block it)
            // We redirect with a flag so if the target guard blocks it and tries to bounce back,
            // we catch it in step #2.
            return this.router.createUrlTree([fallbackUrl], {
                queryParams: { authRedirect: true },
                queryParamsHandling: 'merge',
            });
        }
        else {
            const menus = await this.menuService.getMenus(storage);
            const firstMenu = menus?.[0];
            const firstMenuUrl = firstMenu?.menuURL?.toLowerCase();
            if (firstMenuUrl) {
                return this.router.createUrlTree([firstMenuUrl]);
            }
            return false;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AccessMenuGuard, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AccessMenuGuard, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AccessMenuGuard, decorators: [{
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
    showSessionExpired(uamLoginURL, applilcationStorageKey, envName) {
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
            allowOutsideClick: false,
            allowEscapeKey: false,
            buttonsStyling: false,
            customClass: {
                popup: 'custom-swal-popup',
                confirmButton: 'p-button btn-small btn-primary-linear-gradient',
                actions: 'custom-actions-container hide-background',
            },
            preConfirm: () => this.createDelay(1000),
        }).then((result) => {
            if (result.isConfirmed) {
                this.handleLogout(uamLoginURL, applilcationStorageKey, envName);
            }
        });
    }
    showError(message) {
        Swal.fire({
            title: MSG_MODAL.TITLE_WARN,
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
    handleLogout(uamLoginURL, applilcationStorageKey, envName) {
        // Trigger cross-tab logout event
        localStorage.setItem('logout-event', Date.now().toString());
        this.cleanupAndRedirect(uamLoginURL, applilcationStorageKey, envName);
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
    cleanupAndRedirect(uamLoginURL, applilcationStorageKey, envName) {
        localStorage.removeItem(`${envName}_session_id`);
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
    AUTH_ERROR_CODE["CLIENT_ID_NOT_MATCHED"] = "CLIENT_ID_NOT_MATCHED";
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
        AUTH_ERROR_CODE.CLIENT_ID_NOT_MATCHED,
    ]);
    processError(error) {
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
    handleProcessedError(processedError, uamLoginURL, applilcationStorageKey, envName) {
        if (processedError.requiresReauth) {
            this.errorModal.showSessionExpired(uamLoginURL, applilcationStorageKey, envName);
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
    refreshAndRetry(req, next, urlConfig, clientId, applilcationStorageKey, envName) {
        if (this.authState.isRefreshing) {
            // Wait for ongoing refresh to complete, then retry request
            return this.authState.waitForRefresh().pipe(switchMap(() => next(req)), catchError$1((err) => {
                this.errorModal.showSessionExpired(urlConfig.uamLoginURL, applilcationStorageKey, envName);
                return throwError(() => err);
            }));
        }
        // Start new refresh process
        return this.performRefresh(req, next, urlConfig, clientId, applilcationStorageKey, envName);
    }
    performRefresh(req, next, urlConfig, clientId, applilcationStorageKey, envName) {
        this.authState.startRefresh();
        return this.loginService
            .refreshToken(urlConfig.uamBaseApiUrl, clientId)
            .pipe(switchMap((response) => {
            this.authState.completeRefresh(response);
            return next(req);
        }), catchError$1((err) => {
            this.authState.failRefresh();
            this.errorModal.showSessionExpired(urlConfig.uamLoginURL, applilcationStorageKey, envName);
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
function isWhitelistedEndpoint(url, whiteListEndpoint) {
    // Remark: Whitelist is for endpoint that no need to add custom headers
    const whitelistedEndpoints = [
        '/login',
        '/api/auth/logout',
        '/api/logout',
        ...whiteListEndpoint,
    ];
    return whitelistedEndpoints.some((endpoint) => url.includes(endpoint));
}
function authInterceptor(config) {
    return (req, next) => {
        const authHeaderService = inject(AuthHeaderService);
        const httpErrorHandler = inject(HttpErrorHandler);
        const tokenRefreshService = inject(TokenRefreshService);
        const authState = inject(AuthStateService);
        // Whitelisted endpoints pass through without custom headers or retry logic
        if (isWhitelistedEndpoint(req.url, config.whiteListEndpoint ?? [])) {
            return next(req);
        }
        // Stop request if session has been invalidated
        if (authState.isSessionInvalidated) {
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
                }, config.urlConfig.uamLoginURL, config.currentAppStorageKey, config.envName);
                return throwError(() => error);
            }
            // Process the error
            const processedError = httpErrorHandler.processError(error);
            // If token expired, attempt refresh and retry
            if (processedError.shouldRetry) {
                return tokenRefreshService.refreshAndRetry(authReq, next, config.urlConfig, config.clientId, config.currentAppStorageKey, config.envName);
            }
            // Handle other errors (show modal if needed, invalidate session if reauth required)
            httpErrorHandler.handleProcessedError(processedError, config.urlConfig.uamLoginURL, config.currentAppStorageKey, config.envName);
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

export { AUTH_INTERCEPTOR_PROVIDER, AccessMenuGuard, AuthStateService, BuddhistDatePipe, CharCountDirective, ErrorModalService, FILTER_TYPE, HasMenuUAMDirective, HasPermissionDirective, IdentityNoPipe, LoginService, MSG_MODAL, MenuService, NumberDecimalPipe, OPERATOR, OverlayTextDirective, PermissionService, PhoneNoPipe, PlaButtonOutlinedComponent, PlaButtonPrimaryComponent, PlaButtonPrimaryIconComponent, PlaButtonSaveComponent, PlaButtonSecondaryComponent, PlaClientDetailComponent, PlaClientHeaderComponent, PlaConfirmModalComponent, PlaContainerLayoutComponent, PlaContentContainerComponent, PlaDialogComponent, PlaDynamicForm, PlaFormDatePickerComponent, PlaFormInputArrayComponent, PlaFormInputGroupComponent, PlaFormInputNumberComponent, PlaFormInputTextComponent, PlaFormSelectComponent, PlaFormSelectObsComponent, PlaFormTextAreaComponent, PlaFormToggleSwitchComponent, PlaInputSelect, PlaInputText, PlaMessageMappingPipe, PlaSharedLibComponent, PlaSharedLibService, PlaStepperComponent, PlaTableComponent, PlaToastComponent, PlaToastService, PlaTopbar, TYPE, UserProfileService, authInterceptor, clientLabels, messageModels };
//# sourceMappingURL=pla-shared-lib.mjs.map
