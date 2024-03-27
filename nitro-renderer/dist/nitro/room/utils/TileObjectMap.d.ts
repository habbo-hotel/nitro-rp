import { IRoomObject, ITileObjectMap } from '../../../api';
export declare class TileObjectMap implements ITileObjectMap {
    private _tileObjectMap;
    private _width;
    private _height;
    constructor(k: number, _arg_2: number);
    clear(): void;
    populate(k: IRoomObject[]): void;
    dispose(): void;
    getObjectIntTile(k: number, _arg_2: number): IRoomObject;
    setObjectInTile(k: number, _arg_2: number, _arg_3: IRoomObject): void;
    addRoomObject(k: IRoomObject): void;
}
