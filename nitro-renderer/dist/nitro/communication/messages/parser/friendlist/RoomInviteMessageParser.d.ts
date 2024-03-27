import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RoomInviteParser implements IMessageParser {
    private _senderId;
    private _messageText;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get senderId(): number;
    get messageText(): string;
}
