import { IAssetVisualAnimation } from '../../../../../api';
import { AnimationData } from './AnimationData';
import { AnimationFrame } from './AnimationFrame';
import { SizeData } from './SizeData';
export declare class AnimationSizeData extends SizeData {
    private _animations;
    private _animationIds;
    constructor(layerCount: number, angle: number);
    dispose(): void;
    defineAnimations(animations: {
        [index: string]: IAssetVisualAnimation;
    }): boolean;
    protected createAnimationData(): AnimationData;
    hasAnimation(animationId: number): boolean;
    getAnimationCount(): number;
    getAnimationId(animationId: number): number;
    isImmediateChange(animationId: number, _arg_2: number): boolean;
    getStartFrame(animationId: number, direction: number): number;
    getFrame(animationId: number, direction: number, layerId: number, frameCount: number): AnimationFrame;
    getFrameFromSequence(animationId: number, direction: number, layerId: number, sequenceId: number, offset: number, frameCount: number): AnimationFrame;
}
