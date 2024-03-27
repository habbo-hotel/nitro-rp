import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class TradingAcceptParser implements IMessageParser {
    private _userID;
    private _userAccepts;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userID(): number;
    get userAccepts(): boolean;
}
