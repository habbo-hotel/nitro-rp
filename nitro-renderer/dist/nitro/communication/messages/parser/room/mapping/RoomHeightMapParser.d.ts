import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomHeightMapParser implements IMessageParser {
    private _width;
    private _height;
    private _heights;
    static decodeTileHeight(height: number): number;
    static decodeIsStackingBlocked(height: number): boolean;
    static decodeIsRoomTile(height: number): boolean;
    getTileHeight(x: number, y: number): number;
    getStackingBlocked(x: number, y: number): boolean;
    isRoomTile(x: number, y: number): boolean;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get width(): number;
    get height(): number;
    get heights(): number[];
}
