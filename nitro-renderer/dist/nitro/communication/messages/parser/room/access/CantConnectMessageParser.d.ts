import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class CantConnectMessageParser implements IMessageParser {
    static REASON_FULL: number;
    static REASON_CLOSED: number;
    static REASON_QUEUE_ERROR: number;
    static REASON_BANNED: number;
    private _reason;
    private _parameter;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get reason(): number;
    get parameter(): string;
}
