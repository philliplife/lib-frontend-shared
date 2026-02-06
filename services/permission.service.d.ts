import { IMenu } from '../models/user-profile.interface';
import * as i0 from "@angular/core";
export declare class PermissionService {
    private readonly menuService;
    private readonly router;
    hasPermission(permission: string, storage: string): Promise<boolean>;
    hasMenuUAM(url: string, storage: string): Promise<IMenu | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PermissionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PermissionService>;
}
