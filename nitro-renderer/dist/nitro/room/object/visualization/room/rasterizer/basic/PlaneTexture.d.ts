import { Resource, Texture } from '@pixi/core';
import { IVector3D } from '../../../../../../../api';
import { PlaneTextureBitmap } from './PlaneTextureBitmap';
export declare class PlaneTexture {
    static MIN_NORMAL_COORDINATE_VALUE: number;
    static MAX_NORMAL_COORDINATE_VALUE: number;
    private _bitmaps;
    constructor();
    dispose(): void;
    addBitmap(bitmap: Texture<Resource>, normalMinX?: number, normalMaxX?: number, normalMinY?: number, normalMaxY?: number, assetName?: string): void;
    getBitmap(k: IVector3D): Texture<Resource>;
    getPlaneTextureBitmap(k: IVector3D): PlaneTextureBitmap;
    getAssetName(k: IVector3D): string;
}
