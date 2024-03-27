import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class FurnitureBadgeDisplayVisualization extends FurnitureAnimatedVisualization {
    private static BADGE;
    private _badgeId;
    private _badgeAssetNameNormalScale;
    private _badgeAssetNameSmallScale;
    private _badgeVisibleInState;
    constructor();
    protected updateModel(scale: number): boolean;
    protected getSpriteAssetName(scale: number, layerId: number): string;
    protected getLayerXOffset(scale: number, direction: number, layerId: number): number;
    protected getLayerYOffset(scale: number, direction: number, layerId: number): number;
}
