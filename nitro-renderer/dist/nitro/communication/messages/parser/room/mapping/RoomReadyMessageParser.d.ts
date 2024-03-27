import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomReadyMessageParser implements IMessageParser {
    private _name;
    private _roomId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get name(): string;
    get roomId(): number;
}
