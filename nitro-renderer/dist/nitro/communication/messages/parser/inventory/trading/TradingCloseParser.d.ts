import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class TradingCloseParser implements IMessageParser {
    static ERROR_WHILE_COMMIT: number;
    private _userId;
    private _reason;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userID(): number;
    get reason(): number;
}
