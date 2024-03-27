import { IGraphicAsset, IRoomObjectSprite } from '../../../../../api';
import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class FurnitureGuildCustomizedVisualization extends FurnitureAnimatedVisualization {
    static PRIMARY_COLOUR_SPRITE_TAG: string;
    static SECONDARY_COLOUR_SPRITE_TAG: string;
    static BADGE: string;
    static DEFAULT_COLOR_1: number;
    static DEFAULT_COLOR_2: number;
    private _color1;
    private _color2;
    private _badgeAssetNameNormalScale;
    private _badgeAssetNameSmallScale;
    constructor();
    protected updateModel(scale: number): boolean;
    protected getLayerColor(scale: number, layerId: number, colorId: number): number;
    getSpriteAssetName(scale: number, layerId: number): string;
    protected getLibraryAssetNameForSprite(asset: IGraphicAsset, sprite: IRoomObjectSprite): string;
}
