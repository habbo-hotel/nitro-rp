import { IAssetVisualAnimation } from '../../../../../api';
import { AnimationFrame } from './AnimationFrame';
export declare class AnimationData {
    private static TRANSITION_TO_ANIMATION_OFFSET;
    private static TRANSITION_FROM_ANIMATION_OFFSET;
    static DEFAULT_FRAME_NUMBER: number;
    private _layers;
    private _frameCount;
    private _randomStart;
    private _immediateChanges;
    constructor();
    static getTransitionToAnimationId(animationId: number): number;
    static getTransitionFromAnimationId(animationId: number): number;
    static isTransitionToAnimation(animationId: number): boolean;
    static isTransitionFromAnimation(animationId: number): boolean;
    dispose(): void;
    setImmediateChanges(k: number[]): void;
    isImmediateChange(k: number): boolean;
    getStartFrame(direction: number): number;
    initialize(k: IAssetVisualAnimation): boolean;
    private addLayer;
    private readDirectionalOffsets;
    getFrame(direction: number, layerId: number, frameCount: number): AnimationFrame;
    getFrameFromSequence(direction: number, layerId: number, sequenceId: number, offset: number, frameCount: number): AnimationFrame;
}
