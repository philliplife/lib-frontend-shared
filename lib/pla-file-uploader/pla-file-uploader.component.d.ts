import { EventEmitter } from '@angular/core';
import { FileUpload, FileSelectEvent } from 'primeng/fileupload';
import * as i0 from "@angular/core";
export type FileValidatorFn = (files: File[]) => Promise<{
    errors: string[];
    invalidFiles?: File[];
}>;
export declare class PlaFileUploaderComponent {
    uploader: FileUpload;
    allowFileType: string[];
    isDefaultUploadButton: boolean;
    uploadCallback: (fileList: File[]) => void;
    /** Extra async validation applied after the built-in type/size/count checks. */
    fileValidator?: FileValidatorFn;
    /** Max size per file, in bytes. Enforced and shown in the browse panel. */
    maxFileSize: number;
    /** Max number of pending files. Enforced and shown in the browse panel. */
    maxFiles: number;
    /** Illustration shown in the browse panel. Pass '' to fall back to a PrimeNG icon. */
    iconSrc: string;
    title: string;
    confirmTitle: string;
    confirmDescription: string;
    validationErrors: EventEmitter<string[]>;
    fileListChange: EventEmitter<File[]>;
    private readonly plaToastService;
    fileList: File[];
    onSelectedFiles(event: FileSelectEvent): Promise<void>;
    removeFile: (fileToRemove: File) => void;
    clearFiles(): void;
    get allowedFileTypes(): string;
    /** maxFileSize in bytes rendered as a "X MB"/"X KB" display string. */
    get maxFileSizeDesc(): string;
    /** maxFiles pluralized into a "1 file"/"N files" display string. */
    get maxFilesDesc(): string;
    private setFileList;
    /** Drops rejected files from both the incoming list and PrimeNG's internal one. */
    private rejectFiles;
    private removeFromUploader;
    private isSameFile;
    private trimTrailingZeros;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaFileUploaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaFileUploaderComponent, "pla-file-uploader", never, { "allowFileType": { "alias": "allowFileType"; "required": true; }; "isDefaultUploadButton": { "alias": "isDefaultUploadButton"; "required": false; }; "uploadCallback": { "alias": "uploadCallback"; "required": true; }; "fileValidator": { "alias": "fileValidator"; "required": false; }; "maxFileSize": { "alias": "maxFileSize"; "required": false; }; "maxFiles": { "alias": "maxFiles"; "required": false; }; "iconSrc": { "alias": "iconSrc"; "required": false; }; "title": { "alias": "title"; "required": false; }; "confirmTitle": { "alias": "confirmTitle"; "required": false; }; "confirmDescription": { "alias": "confirmDescription"; "required": false; }; }, { "validationErrors": "validationErrors"; "fileListChange": "fileListChange"; }, never, never, true, never>;
}
