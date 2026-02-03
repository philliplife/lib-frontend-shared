export interface IFormLogin {
    username: string;
    password: string;
}
export interface IResSyncLogin {
    displayName: string;
    username: string;
    email: string;
    uamRole: string;
    systemAdmin: boolean;
    department: string;
}
export interface IResUser {
    id: number;
    username: string;
    department: string;
    role: string;
    email: string;
    displayName: string;
    phone: string;
    userId: string;
    firstName: string;
    lastName: string;
    status: string;
    createdDt: string;
    createdBy: string;
    updatedDt: string;
    updatedBy: string;
}
export interface IRefreshToken {
    SystemId: string;
    AccessToken?: string;
    RefreshToken?: string;
    TargetClientId?: string;
}
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
