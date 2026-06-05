import { EventEmitter } from '@angular/core';
import { ClientDetail } from '../../models/client.interface';
import * as i0 from "@angular/core";
export declare class PlaClientHeaderComponent {
    clientDetail: ClientDetail;
    isMaskingPersonal: boolean;
    viewPersonal: EventEmitter<boolean>;
    onClickBack: EventEmitter<void>;
    onViewPersonal(): void;
    clickBack(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaClientHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaClientHeaderComponent, "pla-client-header", never, { "clientDetail": { "alias": "clientDetail"; "required": true; }; "isMaskingPersonal": { "alias": "isMaskingPersonal"; "required": true; }; }, { "viewPersonal": "viewPersonal"; "onClickBack": "onClickBack"; }, never, never, true, never>;
}
