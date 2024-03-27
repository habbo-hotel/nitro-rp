import { Resource, Texture } from '@pixi/core';
import { IGraphicAsset, IRoomObjectSprite } from '../../../../../api';
import { IsometricImageFurniVisualization } from './IsometricImageFurniVisualization';
export declare class FurnitureGuildIsometricBadgeVisualization extends IsometricImageFurniVisualization {
    static PRIMARY_COLOUR_SPRITE_TAG: string;
    static SECONDARY_COLOUR_SPRITE_TAG: string;
    static DEFAULT_COLOR_1: number;
    static DEFAULT_COLOR_2: number;
    private _color1;
    private _color2;
    protected updateModel(scale: number): boolean;
    protected generateTransformedThumbnail(texture: Texture<Resource>, asset: IGraphicAsset): Texture<Resource>;
    protected getLayerColor(scale: number, layerId: number, colorId: number): number;
    protected getLibraryAssetNameForSprite(asset: IGraphicAsset, sprite: IRoomObjectSprite): string;
    private getBitmapAsset;
}
