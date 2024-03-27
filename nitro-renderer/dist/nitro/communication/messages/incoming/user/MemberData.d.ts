import { IMessageDataWrapper } from '../../../../../api';
export declare class MemberData {
    private static readonly TYPE_OWNER;
    private static readonly TYPE_ADMIN;
    private static readonly TYPE_PENDING;
    private static readonly TYPE_MEMBER;
    private static readonly TYPE_BLOCKED;
    private _type;
    private _userId;
    private _userName;
    private _figure;
    private _memberSince;
    constructor(wrapper: IMessageDataWrapper);
    get userId(): number;
    get userName(): string;
    get admin(): boolean;
    get owner(): boolean;
    get pending(): boolean;
    get member(): boolean;
    get blocked(): boolean;
    get figure(): string;
    get memberSince(): string;
}
