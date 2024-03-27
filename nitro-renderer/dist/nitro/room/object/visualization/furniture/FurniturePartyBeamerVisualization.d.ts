import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class FurniturePartyBeamerVisualization extends FurnitureAnimatedVisualization {
    private static UPDATE_INTERVAL;
    private static AREA_DIAMETER_SMALL;
    private static AREA_DIAMETER_LARGE;
    private static ANIM_SPEED_FAST;
    private static ANIM_SPEED_SLOW;
    private _animPhaseIndex;
    private _animDirectionIndex;
    private _animSpeedIndex;
    private _animFactorIndex;
    private _animOffsetIndex;
    constructor();
    protected updateAnimation(scale: number): number;
    private getNewPoint;
    private initItems;
    protected getLayerXOffset(scale: number, direction: number, layerId: number): number;
    protected getLayerYOffset(scale: number, direction: number, layerId: number): number;
    private getRandomAmplitudeFactor;
}
