export interface IResRefreshToken {
    isValid: boolean;
    userName: string;
    userType: string;
}
export interface IWebapiInterceptor {
    clientId: string;
    urlConfig: IUrlConfig;
    currentAppStorageKey: string;
}
export interface IUrlConfig {
    uamLoginURL: string;
    uamBaseApiUrl: string;
}
