import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomFowardParser implements IMessageParser {
    private _roomId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
}
