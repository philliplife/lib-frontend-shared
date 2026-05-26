import { ProfileDetailConfig } from '../../models/client.interface';
import * as i0 from "@angular/core";
export declare class PlaClientDetailComponent {
    config: ProfileDetailConfig;
    get clientType(): string;
    get mobilePhone(): string;
    get workPlacePhone(): string;
    get email(): string;
    get homePhone(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaClientDetailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaClientDetailComponent, "pla-client-detail", never, { "config": { "alias": "config"; "required": true; }; }, {}, never, never, true, never>;
}
