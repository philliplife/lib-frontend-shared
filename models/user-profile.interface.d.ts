export interface IUserProfile {
    userName: string;
    fullName: string;
    firstName: string;
    lastName: string;
    position: string;
    department: string;
    phoneNo: string;
    manager: Manager[];
    role: string;
    groupMenus: GroupMenu[];
    email?: string;
}
export interface Manager {
    userName: string;
    name: string;
}
export interface GroupMenu {
    roleId: number;
    roleMenuId: number;
    parentId: null;
    menuId: number | null;
    screenName: string | null;
    functional: string | null;
    groupName: string;
    sortOrder: number;
    permission: string | null;
    imageGroupId: number;
    imageData: string;
    menuURL: string | null;
    groupMenus: GroupMenu[];
}
