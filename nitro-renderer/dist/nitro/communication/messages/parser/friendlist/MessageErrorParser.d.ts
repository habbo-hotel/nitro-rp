import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MessageErrorParser implements IMessageParser {
    private _clientMessageId;
    private _errorCode;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get clientMessageId(): number;
    get errorCode(): number;
}
