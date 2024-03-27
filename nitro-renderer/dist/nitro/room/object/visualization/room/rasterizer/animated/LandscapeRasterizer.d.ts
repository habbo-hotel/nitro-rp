import { RenderTexture } from '@pixi/core';
import { IVector3D } from '../../../../../../../api';
import { PlaneTextureCache } from '../../../../../../../pixi-proxy';
import { PlaneBitmapData } from '../../utils';
import { PlaneRasterizer } from '../basic';
export declare class LandscapeRasterizer extends PlaneRasterizer {
    static LANDSCAPES_ENABLED: boolean;
    static LANDSCAPE_DEFAULT_COLOR: number;
    private static UPDATE_INTERVAL;
    private _landscapeWidth;
    private _landscapeHeight;
    private _cachedBitmap;
    initializeDimensions(k: number, _arg_2: number): boolean;
    protected initializePlanes(): void;
    private parseLandscapes;
    private getCoordinateValue;
    render(planeId: string, textureCache: PlaneTextureCache, canvas: RenderTexture, id: string, width: number, height: number, scale: number, normal: IVector3D, useTexture: boolean, offsetX?: number, offsetY?: number, maxX?: number, maxY?: number, timeSinceStartMs?: number): PlaneBitmapData;
    getTextureIdentifier(k: number, _arg_2: IVector3D): string;
}
