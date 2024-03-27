import { Point } from '@pixi/math';
import { AnimationActionPart } from './AnimationActionPart';
export declare class AnimationAction {
    static DEFAULT_OFFSET: Point;
    private _id;
    private _actionParts;
    private _bodyPartOffsets;
    private _frameCount;
    private _frameIndexes;
    constructor(data: any);
    getPart(type: string): AnimationActionPart;
    getFrameBodyPartOffset(frameId: number, frameCount: number, partId: string): Point;
    get id(): string;
    get parts(): Map<string, AnimationActionPart>;
    get frameCount(): number;
}
