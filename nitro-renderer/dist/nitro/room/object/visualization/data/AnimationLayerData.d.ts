import { AnimationFrame } from './AnimationFrame';
import { AnimationFrameSequenceData } from './AnimationFrameSequenceData';
export declare class AnimationLayerData {
    private _frameSequences;
    private _frameCount;
    private _loopCount;
    private _frameRepeat;
    private _isRandom;
    constructor(loopCount: number, frameRepeat: number, isRandom: boolean);
    get frameCount(): number;
    dispose(): void;
    addFrameSequence(loopCount: number, isRandom: boolean): AnimationFrameSequenceData;
    calculateLength(): void;
    getFrame(direction: number, frameCount: number): AnimationFrame;
    getFrameFromSequence(direction: number, sequenceId: number, offset: number, frameCount: number): AnimationFrame;
    private getFrameFromSpecificSequence;
}
