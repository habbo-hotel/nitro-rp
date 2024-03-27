import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class FurnitureVoteMajorityVisualization extends FurnitureAnimatedVisualization {
    private static ONES_SPRITE;
    private static TENS_SPRITE;
    private static HUNDREDS_SPRITE;
    private static HIDE_RESULTS_STATES;
    private static HIDE_RESULTS_VALUE;
    protected getFrameNumber(scale: number, layerId: number): number;
    protected getLayerAlpha(scale: number, direction: number, layerId: number): number;
}
