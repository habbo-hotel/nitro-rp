import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class FurnitureCounterClockVisualization extends FurnitureAnimatedVisualization {
    private static SECONDS_SPRITE;
    private static TEN_SECONDS_SPRITE;
    private static MINUTES_SPRITE;
    private static TEN_MINUTES_SPRITE;
    protected getFrameNumber(scale: number, layerId: number): number;
    get animationId(): number;
}
