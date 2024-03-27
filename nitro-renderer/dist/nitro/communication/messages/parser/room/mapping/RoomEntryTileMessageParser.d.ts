import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomEntryTileMessageParser implements IMessageParser {
    private _x;
    private _y;
    private _direction;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get x(): number;
    get y(): number;
    get direction(): number;
}
