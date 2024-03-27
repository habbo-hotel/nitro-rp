import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomHeightMapUpdateParser implements IMessageParser {
    private _wrapper;
    private _count;
    private _x;
    private _y;
    private _value;
    flush(): boolean;
    tileHeight(): number;
    isStackingBlocked(): boolean;
    isRoomTile(): boolean;
    next(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get x(): number;
    get y(): number;
    get height(): number;
}
