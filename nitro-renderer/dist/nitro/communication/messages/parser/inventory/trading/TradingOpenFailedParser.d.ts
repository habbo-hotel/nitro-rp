import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class TradingOpenFailedParser implements IMessageParser {
    static REASON_YOU_ARE_ALREADY_TRADING: number;
    static REASON_OTHER_USER_ALREADY_TRADING: number;
    private _reason;
    private _otherUserName;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get reason(): number;
    get otherUserName(): string;
}
