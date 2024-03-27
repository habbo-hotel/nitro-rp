import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class FriendNotificationParser implements IMessageParser {
    private _typeCode;
    private _avatarId;
    private _message;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get typeCode(): number;
    get avatarId(): number;
    get message(): string;
}
