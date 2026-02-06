import { IMenu } from '../models/user-profile.interface';
import * as i0 from "@angular/core";
export declare class MenuService {
    getGroupMenu(targetPath: string, storage: string): Promise<IMenu | null>;
    fetchData(storage: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MenuService>;
}
