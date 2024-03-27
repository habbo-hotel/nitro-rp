import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class InstantMessageErrorParser implements IMessageParser {
    private _errorCode;
    private _userId;
    private _message;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get errorCode(): number;
    get userId(): number;
    get message(): string;
}
