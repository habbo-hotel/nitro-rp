import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class RoomUnitChatParser implements IMessageParser {
    private _roomIndex;
    private _message;
    private _gesture;
    private _bubble;
    private _urls;
    private _messageLength;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    private parseUrls;
    get roomIndex(): number;
    get message(): string;
    get gesture(): number;
    get bubble(): number;
    get urls(): string[];
    get messageLength(): number;
}
