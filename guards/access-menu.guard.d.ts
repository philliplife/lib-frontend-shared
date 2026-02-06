import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import * as i0 from "@angular/core";
export declare class AccessMenuGuard {
    private menuService;
    private router;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree>;
    private handleAccessDenied;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccessMenuGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccessMenuGuard>;
}
