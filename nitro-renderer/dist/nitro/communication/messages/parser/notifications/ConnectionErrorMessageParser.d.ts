import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ConnectionErrorMessageParser implements IMessageParser {
    private _errorCode;
    private _messageId;
    private _timestamp;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get errorCode(): number;
    get messageId(): number;
    get timestamp(): string;
}
