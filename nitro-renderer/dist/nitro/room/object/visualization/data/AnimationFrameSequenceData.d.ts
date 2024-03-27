import { AnimationFrameData } from './AnimationFrameData';
import { DirectionalOffsetData } from './DirectionalOffsetData';
export declare class AnimationFrameSequenceData {
    private _frames;
    private _frameIndexes;
    private _frameRepeats;
    private _isRandom;
    private _loopCount;
    constructor(loopCount: number, isRandom: boolean);
    get isRandom(): boolean;
    get frameCount(): number;
    dispose(): void;
    initialize(): void;
    addFrame(id: number, x: number, y: number, randomX: number, randomY: number, directionalOffset: DirectionalOffsetData): void;
    getFrame(frameCount: number): AnimationFrameData;
    getFrameIndex(frameCount: number): number;
    getRepeats(frameCount: number): number;
}
