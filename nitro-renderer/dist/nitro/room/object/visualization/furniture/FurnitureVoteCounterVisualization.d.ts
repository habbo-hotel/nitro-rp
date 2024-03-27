import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class FurnitureVoteCounterVisualization extends FurnitureAnimatedVisualization {
    private static ONES_SPRITE;
    private static TENS_SPRITE;
    private static HUNDREDS_SPRITE;
    private static HIDE_COUNTER_SCORE;
    protected updateObject(scale: number, direction: number): boolean;
    protected getFrameNumber(scale: number, layerId: number): number;
    protected getLayerAlpha(scale: number, direction: number, layerId: number): number;
}
