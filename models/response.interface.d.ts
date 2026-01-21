export interface ResponseStatus<T> {
    status: string;
    statusCode: string;
    message: string;
    messageType: string;
    data: {
        result: T;
        totalAmount: number;
    };
}
export interface ResponseStatusArray<T> {
    status: string;
    statusCode: string;
    message: string;
    messageType: string;
    data: T[];
}
export interface ResponseStatusPagination<T> {
    status: string;
    statusCode: string;
    message: string;
    messageType: string;
    data: {
        result: T[];
        totalAmount: number;
    };
}
export interface ResponseStatusObject<T> {
    status: string;
    statusCode: string;
    message: string;
    messageType: string;
    data: {
        result: T;
    };
}
export interface ResponseObjectType<T> {
    data: T;
    message: string;
    status: string;
    statusCode: string;
}
