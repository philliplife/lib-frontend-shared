export interface IResAppToken {
    isValid: boolean;
    sessionId: string;
    userName: string;
}
export interface IReqRefreshToken {
    SystemId: string;
}
export interface IResRefreshToken {
    isValid: boolean;
    userName: string;
    userType: string;
}
export interface IWebapiInterceptor {
    clientId: string;
    urlConfig: IUrlConfig;
    environment: IEnvironment;
    currentAppStorageKey: string;
}
export interface IEnvironment {
    authorizationType: string;
    clientId: string;
    envName: string;
}
export interface IUrlConfig {
    uamLoginURL: string;
    uamBaseApiUrl: string;
}
