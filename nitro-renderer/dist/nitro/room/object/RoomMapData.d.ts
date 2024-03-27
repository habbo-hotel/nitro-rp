import { IRoomMapData } from '../../../api';
export declare class RoomMapData implements IRoomMapData {
    private _width;
    private _height;
    private _wallHeight;
    private _fixedWallsHeight;
    private _tileMap;
    private _holeMap;
    private _doors;
    private _dimensions;
    private _restrictsDragging;
    private _restrictsScaling;
    private _restrictedScale;
    constructor();
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    get wallHeight(): number;
    set wallHeight(wallHeight: number);
    get fixedWallsHeight(): number;
    set fixedWallsHeight(fixedWallsHeight: number);
    get tileMap(): {
        height: number;
    }[][];
    get holeMap(): {
        id: number;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    get doors(): {
        x: number;
        y: number;
        z: number;
        dir: number;
    }[];
    get dimensions(): {
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
    };
    get restrictsDragging(): boolean;
    set restrictsDragging(flag: boolean);
    get restrictsScaling(): boolean;
    set restrictsScaling(flag: boolean);
    get restrictedScale(): number;
    set restrictedScale(scale: number);
}
