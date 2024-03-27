import { AnimationFrameData } from './AnimationFrameData';
import { DirectionalOffsetData } from './DirectionalOffsetData';
export declare class AnimationFrameDirectionalData extends AnimationFrameData {
    private _directionalOffsets;
    constructor(id: number, x: number, y: number, randomX: number, randomY: number, offsets: DirectionalOffsetData, repeats: number);
    hasDirectionalOffsets(): boolean;
    getX(direction: number): number;
    getY(direction: number): number;
}
