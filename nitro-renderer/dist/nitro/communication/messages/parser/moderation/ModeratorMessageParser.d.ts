import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ModeratorMessageParser implements IMessageParser {
    private _message;
    private _url;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get message(): string;
    get url(): string;
}
