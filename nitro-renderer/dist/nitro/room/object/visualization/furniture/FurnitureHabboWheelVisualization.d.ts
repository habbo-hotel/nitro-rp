import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class FurnitureHabboWheelVisualization extends FurnitureAnimatedVisualization {
    private static ANIMATION_ID_OFFSET_SLOW1;
    private static ANIMATION_ID_OFFSET_SLOW2;
    private static ANIMATION_ID_START_ROLL;
    private static ANIMATION_ID_ROLL;
    private _stateQueue;
    private _running;
    constructor();
    protected setAnimation(animationId: number): void;
    protected updateAnimation(scale: number): number;
}
