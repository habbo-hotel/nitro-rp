import { Resource, Texture } from '@pixi/core';
export declare class PlaneTextureBitmap {
    static MIN_NORMAL_COORDINATE_VALUE: number;
    static MAX_NORMAL_COORDINATE_VALUE: number;
    private _bitmap;
    private _normalMinX;
    private _normalMaxX;
    private _normalMinY;
    private _normalMaxY;
    private _assetName;
    constructor(bitmap: Texture<Resource>, normalMinX?: number, normalMaxX?: number, normalMinY?: number, normalMaxY?: number, assetName?: string);
    get bitmap(): Texture<Resource>;
    get normalMinX(): number;
    get normalMaxX(): number;
    get normalMinY(): number;
    get normalMaxY(): number;
    get assetName(): string;
    dispose(): void;
}
