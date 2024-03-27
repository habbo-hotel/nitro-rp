import { ILegacyWallGeometry, IVector3D } from '../../../api';
export declare class LegacyWallGeometry implements ILegacyWallGeometry {
    static DEFAULT_SCALE: number;
    private static L;
    private static R;
    private _isDisposed;
    private _scale;
    private _heightMap;
    private _width;
    private _height;
    private _floorHeight;
    constructor();
    get disposed(): boolean;
    get scale(): number;
    set scale(k: number);
    dispose(): void;
    initialize(width: number, height: number, floorHeight: number): void;
    private reset;
    setHeight(x: number, y: number, height: number): boolean;
    getHeight(x: number, y: number): number;
    getLocation(width: number, height: number, localX: number, localY: number, direction: string): IVector3D;
    getLocationOldFormat(k: number, _arg_2: number, _arg_3: string): IVector3D;
    getOldLocation(k: IVector3D, _arg_2: number): [number, number, number, number, string];
    getOldLocationString(k: IVector3D, _arg_2: number): string;
    getDirection(k: string): number;
    getFloorAltitude(k: number, _arg_2: number): number;
    isRoomTile(k: number, _arg_2: number): boolean;
}
