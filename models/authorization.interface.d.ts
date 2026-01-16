export interface IResRefreshToken {
    isValid: boolean;
    userName: string;
    userType: string;
}
export interface IWebapiInterceptor {
    clientId: string;
    urlConfig: IUrlConfig;
    localStorageKey: string;
}
export interface IUrlConfig {
    uamLoginURL: string;
    uamBaseApiUrl: string;
}
