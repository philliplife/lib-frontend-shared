import { FilterMetadata } from 'primeng/api';
import { ICommonData, TagSeverity } from '../public-api';
export type AlignType = 'center' | 'left' | 'right';
export type ColumnType = 'text' | 'date' | 'decimal' | 'tag' | 'action';
export type FilterType = 'input-text' | 'multi-select' | 'date';
export interface IOperatorOptions {
    label: string;
    value: string;
}
export interface IAppliedFilters {
    [key: string]: FilterMetadata;
}
export interface ITablePaginator {
    isShowPagination: boolean;
    paginatorProperties: IPaginatorProperties;
}
export interface IPaginatorProperties {
    rowsPerPageOptions: number[];
    showCurrentPageReport: boolean;
    currentPageReportTemplate: string;
    paginatorDropdownAppendTo: 'body' | 'self';
}
export interface ITableLazyLoad {
    islazyLoad: boolean;
    totalRecord: number;
}
export interface ITableConfig {
    rows: number;
    tableLazyLoadConfig: ITableLazyLoad;
    tablePaginatorConfig: ITablePaginator;
}
export interface ITableColumn<T> {
    minWidth?: string;
    maxWidth?: string;
    field: string;
    title: string;
    columnType: ColumnType;
    headerAlign?: AlignType;
    isDisableSort?: boolean;
    isHidePlaceholder?: boolean;
    filterWidth?: string;
    isDisplayFilter?: boolean;
    filterType?: FilterType;
    options?: ICommonData[];
    searchField?: string;
    searchFunction?: (query: IFilteredOptions) => void;
    loading?: boolean;
    textAlign?: AlignType;
    decimalDigit?: string;
    emptyValueText?: string;
    dateFormat?: string;
    severity?: TagSeverity;
    action_Disable?: Record<string, string>;
    action_Buttons?: IActionButton<T>[];
    frozenColumn?: boolean;
    alignFrozen?: AlignType;
}
export interface IFilteredOptions<T = string> {
    originalEvent: Event;
    filter: T;
}
export interface IActionButton<T> {
    label: string;
    icon?: string;
    svg?: string;
    onActionClick: (row: T) => void;
    separator?: boolean;
    items?: IActionButton<T>[];
    disabled?: boolean;
    permission?: string;
}
export declare enum FILTER_TYPE {
    INPUT_TEXT = "INPUT_TEXT",
    DATE = "DATE",
    SELECT = "SELECT",
    MULTI_SELECT = "MULTI_SELECT",
    CUSTOM_SELECT = "CUSTOM_SELECT"
}
