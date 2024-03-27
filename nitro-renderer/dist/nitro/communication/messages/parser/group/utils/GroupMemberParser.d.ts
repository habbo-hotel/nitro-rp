import { IMessageDataWrapper } from '../../../../../../api';
export declare class GroupRank {
    static readonly OWNER: number;
    static readonly ADMIN: number;
    static readonly MEMBER: number;
    static readonly REQUESTED: number;
    static readonly DELETED: number;
}
export declare class GroupMemberParser {
    private _rank;
    private _id;
    private _name;
    private _figure;
    private _joinedAt;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get id(): number;
    get name(): string;
    get figure(): string;
    get rank(): number;
    get joinedAt(): string;
}
