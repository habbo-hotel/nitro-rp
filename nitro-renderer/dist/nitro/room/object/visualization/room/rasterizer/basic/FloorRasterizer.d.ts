import { RenderTexture } from '@pixi/core';
import { IVector3D } from '../../../../../../../api';
import { PlaneTextureCache } from '../../../../../../../pixi-proxy';
import { PlaneBitmapData } from '../../utils';
import { PlaneRasterizer } from './PlaneRasterizer';
export declare class FloorRasterizer extends PlaneRasterizer {
    protected initializePlanes(): void;
    private parseFloors;
    render(planeId: string, textureCache: PlaneTextureCache, canvas: RenderTexture, id: string, width: number, height: number, scale: number, normal: IVector3D, useTexture: boolean, offsetX?: number, offsetY?: number, maxX?: number, maxY?: number, timeSinceStartMs?: number): PlaneBitmapData;
}
