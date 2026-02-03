import * as i0 from "@angular/core";
/**
 * Handles error modal display and session management
 */
export declare class ErrorModalService {
    private sessionExpiredShown;
    private readonly authState;
    showSessionExpired(uamLoginURL: string, applilcationStorageKey: string): void;
    showError(message: string): void;
    private buildModalHtml;
    private createDelay;
    private handleLogout;
    private getUsernameFromStorage;
    private cleanupAndRedirect;
    resetSessionExpiredFlag(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorModalService>;
}
