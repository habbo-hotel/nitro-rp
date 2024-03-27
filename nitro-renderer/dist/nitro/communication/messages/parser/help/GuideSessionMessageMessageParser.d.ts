import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideSessionMessageMessageParser implements IMessageParser {
    private _chatMessage;
    private _senderId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get chatMessage(): string;
    get senderId(): number;
}
