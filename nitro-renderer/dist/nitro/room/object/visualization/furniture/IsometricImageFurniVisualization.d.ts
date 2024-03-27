import { Resource, Texture } from '@pixi/core';
import { IGraphicAsset } from '../../../../../api';
import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class IsometricImageFurniVisualization extends FurnitureAnimatedVisualization {
    protected static THUMBNAIL: string;
    private _thumbnailAssetNameNormal;
    private _thumbnailImageNormal;
    private _thumbnailDirection;
    private _thumbnailChanged;
    protected _hasOutline: boolean;
    constructor();
    get hasThumbnailImage(): boolean;
    setThumbnailImages(k: Texture<Resource>): void;
    protected updateModel(scale: number): boolean;
    private refreshThumbnail;
    private addThumbnailAsset;
    protected generateTransformedThumbnail(texture: Texture<Resource>, asset: IGraphicAsset): Texture<Resource>;
    protected getSpriteAssetName(scale: number, layerId: number): string;
    protected getThumbnailAssetName(scale: number): string;
    protected getFullThumbnailAssetName(k: number, _arg_2: number): string;
}
