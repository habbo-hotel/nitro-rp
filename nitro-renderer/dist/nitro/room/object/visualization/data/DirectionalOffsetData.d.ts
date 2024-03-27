export declare class DirectionalOffsetData {
    private _offsetX;
    private _offsetY;
    constructor();
    getXOffset(direction: number, defaultX: number): number;
    getYOffset(direction: number, defaultY: number): number;
    setDirection(direction: number, offsetX: number, offsetY: number): void;
}
