import * as i0 from "@angular/core";
export declare class PlaPendingFileComponent {
    private readonly config;
    isDefaultUploadButton: boolean;
    fileList: File[];
    removeFileCallback?: (fileToRemove: File) => void;
    uploadCallback?: (fileList: File[]) => void;
    title: string;
    uploadText: string;
    confirmTitle: string;
    confirmDescription: string;
    visibleModalUpload: boolean;
    onRemoveTemplatingFile(file: File): void;
    openModalConfirmUpload(): void;
    onUploadClick(): void;
    formatSize(bytes: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaPendingFileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaPendingFileComponent, "pla-pending-file", never, { "isDefaultUploadButton": { "alias": "isDefaultUploadButton"; "required": true; }; "fileList": { "alias": "fileList"; "required": false; }; "removeFileCallback": { "alias": "removeFileCallback"; "required": false; }; "uploadCallback": { "alias": "uploadCallback"; "required": false; }; "title": { "alias": "title"; "required": false; }; "uploadText": { "alias": "uploadText"; "required": false; }; "confirmTitle": { "alias": "confirmTitle"; "required": false; }; "confirmDescription": { "alias": "confirmDescription"; "required": false; }; }, {}, never, never, true, never>;
}
