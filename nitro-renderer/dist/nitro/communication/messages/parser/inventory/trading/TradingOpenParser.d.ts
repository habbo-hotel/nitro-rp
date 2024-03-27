import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class TradingOpenParser implements IMessageParser {
    private _userId;
    private _userCanTrade;
    private _otherUserId;
    private _otherUserCanTrade;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userID(): number;
    get userCanTrade(): boolean;
    get otherUserID(): number;
    get otherUserCanTrade(): boolean;
}
