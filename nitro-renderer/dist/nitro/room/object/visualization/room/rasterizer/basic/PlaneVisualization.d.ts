import { RenderTexture } from '@pixi/core';
import { IGraphicAssetCollection, IRoomGeometry, IVector3D } from '../../../../../../../api';
import { PlaneTextureCache } from '../../../../../../../pixi-proxy';
import { PlaneMaterial } from './PlaneMaterial';
import { PlaneVisualizationLayer } from './PlaneVisualizationLayer';
export declare class PlaneVisualization {
    private _layers;
    private _geometry;
    private _cachedBitmapNormal;
    private _isCached;
    private _hasAnimationLayers;
    constructor(size: number, totalLayers: number, geometry: IRoomGeometry);
    get geometry(): IRoomGeometry;
    get hasAnimationLayers(): boolean;
    dispose(): void;
    clearCache(): void;
    setLayer(layerId: number, material: PlaneMaterial, color: number, align: number, offset?: number): boolean;
    setAnimationLayer(layerId: number, animationItems: any, collection: IGraphicAssetCollection): boolean;
    getLayers(): PlaneVisualizationLayer[];
    render(planeId: string, textureCache: PlaneTextureCache, canvas: RenderTexture, width: number, height: number, normal: IVector3D, useTexture: boolean, offsetX?: number, offsetY?: number, maxX?: number, maxY?: number, dimensionX?: number, dimensionY?: number, timeSinceStartMs?: number): RenderTexture;
}
