import { RenderTexture } from '@pixi/core';
import { IAssetPlaneMaskData, IGraphicAssetCollection, IVector3D } from '../../../../../../api';
import { PlaneMask } from './PlaneMask';
export declare class PlaneMaskManager {
    private _assetCollection;
    private _masks;
    private _data;
    constructor();
    get data(): IAssetPlaneMaskData;
    dispose(): void;
    initialize(k: IAssetPlaneMaskData): void;
    initializeAssetCollection(k: IGraphicAssetCollection): void;
    private parseMasks;
    private parseMaskBitmaps;
    updateMask(canvas: RenderTexture, type: string, scale: number, normal: IVector3D, posX: number, posY: number): boolean;
    getMask(k: string): PlaneMask;
}
