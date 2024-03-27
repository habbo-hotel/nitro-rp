import { RenderTexture } from '@pixi/core';
import { IVector3D } from '../../../../../../../api';
import { PlaneTextureCache } from '../../../../../../../pixi-proxy';
import { PlaneMaterialCellMatrix } from './PlaneMaterialCellMatrix';
export declare class PlaneMaterial {
    static MIN_NORMAL_COORDINATE_VALUE: number;
    static MAX_NORMAL_COORDINATE_VALUE: number;
    private _planeMaterialItems;
    private _isCached;
    constructor();
    dispose(): void;
    clearCache(): void;
    addMaterialCellMatrix(totalColumns: number, repeatMode: number, align: number, normalMinX?: number, normalMaxX?: number, normalMinY?: number, normalMaxY?: number): PlaneMaterialCellMatrix;
    getMaterialCellMatrix(normal: IVector3D): PlaneMaterialCellMatrix;
    render(planeId: string, textureCache: PlaneTextureCache, canvas: RenderTexture, width: number, height: number, normal: IVector3D, useTexture: boolean, offsetX: number, offsetY: number, topAlign: boolean): RenderTexture;
}
