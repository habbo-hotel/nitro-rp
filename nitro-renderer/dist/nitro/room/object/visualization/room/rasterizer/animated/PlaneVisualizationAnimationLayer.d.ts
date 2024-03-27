import { RenderTexture } from '@pixi/core';
import { IDisposable, IGraphicAssetCollection, IVector3D } from '../../../../../../../api';
import { PlaneTextureCache } from '../../../../../../../pixi-proxy';
export declare class PlaneVisualizationAnimationLayer implements IDisposable {
    private _color;
    private _isDisposed;
    private _items;
    constructor(k: any, assets: IGraphicAssetCollection);
    get disposed(): boolean;
    dispose(): void;
    clearCache(): void;
    render(textureCache: PlaneTextureCache, canvas: RenderTexture, width: number, height: number, normal: IVector3D, offsetX: number, offsetY: number, maxX: number, maxY: number, dimensionX: number, dimensionY: number, timeSinceStartMs: number): RenderTexture;
}
