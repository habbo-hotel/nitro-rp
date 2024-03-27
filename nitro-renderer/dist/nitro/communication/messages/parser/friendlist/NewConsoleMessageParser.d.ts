import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class NewConsoleMessageParser implements IMessageParser {
    private _senderId;
    private _messageText;
    private _secondsSinceSent;
    private _extraData;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get senderId(): number;
    get messageText(): string;
    get secondsSinceSent(): number;
    get extraData(): string;
}
