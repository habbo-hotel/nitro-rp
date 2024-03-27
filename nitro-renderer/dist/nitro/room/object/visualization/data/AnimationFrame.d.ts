export declare class AnimationFrame {
    static FRAME_REPEAT_FOREVER: number;
    static SEQUENCE_NOT_DEFINED: number;
    private static POOL_SIZE_LIMIT;
    private static POOL;
    private _id;
    private _x;
    private _y;
    private _repeats;
    private _frameRepeats;
    private _remainingFrameRepeats;
    private _activeSequence;
    private _activeSequenceOffset;
    private _isLastFrame;
    private _isRecycled;
    static allocate(id: number, x: number, y: number, repeats: number, frameRepeats: number, isLastFrame: boolean, activeSequence?: number, sequenceOffset?: number): AnimationFrame;
    get id(): number;
    get x(): number;
    get y(): number;
    get repeats(): number;
    get frameRepeats(): number;
    get isLastFrame(): boolean;
    get remainingFrameRepeats(): number;
    set remainingFrameRepeats(k: number);
    get activeSequence(): number;
    get activeSequenceOffset(): number;
    recycle(): void;
}
