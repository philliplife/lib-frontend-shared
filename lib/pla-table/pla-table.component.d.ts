import { OnChanges, OnInit } from '@angular/core';
import { Table, TableFilterEvent } from 'primeng/table';
import { SortEvent } from 'primeng/api';
import { IAppliedFilters, IPaginatorProperties, ITableColumn, ITableConfig } from '../../models/table.interface';
import * as i0 from "@angular/core";
export declare class PlaTableComponent<T = unknown> implements OnInit, OnChanges {
    table: Table;
    tableLoading: boolean;
    tableData: T[];
    tableColumns: ITableColumn<T>[];
    tableConfig: ITableConfig;
    appliedFilters: IAppliedFilters;
    applicationStorageName: string;
    tableName: string;
    skeletonTable: number[];
    ngOnInit(): void;
    ngOnChanges(): void;
    get paginatorConfig(): IPaginatorProperties;
    customSort(event: SortEvent): void;
    onChangeFilter(event: TableFilterEvent): void;
    private isDate;
    onGetFilterFromLocalStorage(): void;
    private normalizeDateFilters;
    private buildDefaultFilters;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaTableComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaTableComponent<any>, "pla-table", never, { "tableLoading": { "alias": "tableLoading"; "required": true; }; "tableData": { "alias": "tableData"; "required": true; }; "tableColumns": { "alias": "tableColumns"; "required": true; }; "tableConfig": { "alias": "tableConfig"; "required": true; }; "appliedFilters": { "alias": "appliedFilters"; "required": false; }; "applicationStorageName": { "alias": "applicationStorageName"; "required": true; }; "tableName": { "alias": "tableName"; "required": true; }; }, {}, never, never, true, never>;
}
