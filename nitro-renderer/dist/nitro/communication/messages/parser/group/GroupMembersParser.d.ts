import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { GroupMemberParser } from './utils';
export declare class GroupMembersParser implements IMessageParser {
    private _groupId;
    private _groupTitle;
    private _roomId;
    private _badge;
    private _totalMembersCount;
    private _result;
    private _admin;
    private _pageSize;
    private _pageIndex;
    private _level;
    private _query;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get groupId(): number;
    get groupTitle(): string;
    get roomId(): number;
    get badge(): string;
    get totalMembersCount(): number;
    get result(): GroupMemberParser[];
    get admin(): boolean;
    get pageSize(): number;
    get pageIndex(): number;
    get level(): number;
    get query(): string;
}
