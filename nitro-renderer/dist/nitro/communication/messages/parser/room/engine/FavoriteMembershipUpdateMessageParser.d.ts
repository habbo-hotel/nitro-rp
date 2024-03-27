import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class FavoriteMembershipUpdateMessageParser implements IMessageParser {
    private _roomIndex;
    private _groupId;
    private _status;
    private _groupName;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomIndex(): number;
    get groupId(): number;
    get status(): number;
    get groupName(): string;
}
