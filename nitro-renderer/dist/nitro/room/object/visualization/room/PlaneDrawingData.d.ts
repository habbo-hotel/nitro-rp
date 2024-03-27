import { Point } from '@pixi/math';
import { IPlaneDrawingData } from '../../../../../api';
export declare class PlaneDrawingData implements IPlaneDrawingData {
    private _z;
    private _points;
    private _color;
    private _maskAssetNames;
    private _maskAssetLocations;
    private _maskAssetFlipHs;
    private _maskAssetFlipVs;
    private _alignBottom;
    private _assetNames;
    constructor(k?: PlaneDrawingData, _arg_2?: number, _arg_3?: boolean);
    addMask(k: string, _arg_2: Point, _arg_3: boolean, _arg_4: boolean): void;
    addAssetColumn(k: string[]): void;
    set z(k: number);
    get z(): number;
    set cornerPoints(k: Point[]);
    get cornerPoints(): Point[];
    get color(): number;
    get maskAssetNames(): string[];
    get maskAssetLocations(): Point[];
    get maskAssetFlipHs(): boolean[];
    get maskAssetFlipVs(): boolean[];
    isBottomAligned(): boolean;
    get assetNameColumns(): string[][];
}
