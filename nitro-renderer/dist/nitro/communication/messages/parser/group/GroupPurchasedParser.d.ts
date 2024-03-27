import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GroupPurchasedParser implements IMessageParser {
    private _roomId;
    private _groupId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get guildId(): number;
}
