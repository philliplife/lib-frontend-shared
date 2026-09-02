import { FileUpload } from 'primeng/fileupload';
import * as i0 from "@angular/core";
export declare class PlaBrowsePanelComponent {
    uploader: FileUpload;
    allowFileTypeDesc: string;
    maxFileSizeDesc: string;
    maxFilesDesc: string;
    /** Illustration path. Empty string falls back to a PrimeNG icon so the lib needs no asset. */
    iconSrc: string;
    isDragOver: boolean;
    private dragDepth;
    onClickChoose(): void;
    onDragEnter(): void;
    onDragLeave(): void;
    onDrop(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaBrowsePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaBrowsePanelComponent, "pla-browse-panel", never, { "uploader": { "alias": "uploader"; "required": true; }; "allowFileTypeDesc": { "alias": "allowFileTypeDesc"; "required": true; }; "maxFileSizeDesc": { "alias": "maxFileSizeDesc"; "required": true; }; "maxFilesDesc": { "alias": "maxFilesDesc"; "required": true; }; "iconSrc": { "alias": "iconSrc"; "required": false; }; }, {}, never, never, true, never>;
}
