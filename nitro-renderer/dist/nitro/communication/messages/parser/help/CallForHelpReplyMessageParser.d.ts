import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CallForHelpReplyMessageParser implements IMessageParser {
    private _message;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get message(): string;
}
