import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class FurnitureQueueTileVisualization extends FurnitureAnimatedVisualization {
    private static ANIMATION_ID_ROLL;
    private static ANIMATION_ID_ROLL_ONCE;
    private static ANIMATION_ID_NORMAL;
    private static ANIMATION_DURATION;
    private _stateQueue;
    private _animationCounter;
    constructor();
    protected setAnimation(animationId: number): void;
    protected updateAnimation(scale: number): number;
    protected usesAnimationResetting(): boolean;
}
