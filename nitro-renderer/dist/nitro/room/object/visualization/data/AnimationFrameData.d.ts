export declare class AnimationFrameData {
    private _id;
    private _x;
    private _y;
    private _randomX;
    private _randomY;
    private _repeats;
    constructor(id: number, x: number, y: number, randomX: number, randomY: number, repeats: number);
    get id(): number;
    hasDirectionalOffsets(): boolean;
    getX(k: number): number;
    getY(k: number): number;
    get x(): number;
    get y(): number;
    get randomX(): number;
    get randomY(): number;
    get repeats(): number;
}
