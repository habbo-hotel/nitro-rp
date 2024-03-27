import { Resource, Texture } from '@pixi/core';
import { IGraphicAsset } from '../../../../../api';
import { FurnitureBBVisualization } from './FurnitureBBVisualization';
export declare class FurnitureIsometricBBVisualization extends FurnitureBBVisualization {
    private _needsTransform;
    protected transformGifTextures(asset: IGraphicAsset): void;
    protected generateTransformedImage(texture: Texture<Resource>, asset: IGraphicAsset): void;
    protected checkAndCreateImageForCurrentState(): void;
    protected getSpriteAssetName(scale: number, layerId: number): string;
}
