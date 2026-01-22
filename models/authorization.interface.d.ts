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
    authorizationType: string;
    envName: 'dev' | 'uat' | 'preprod' | 'prod';
    currentAppStorageKey: string;
}
export interface IUrlConfig {
    uamLoginURL: string;
    uamBaseApiUrl: string;
}
export interface IFormLogout {
    systemId: string;
}
