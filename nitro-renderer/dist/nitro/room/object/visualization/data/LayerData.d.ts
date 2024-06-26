export declare class LayerData {
    static DEFAULT_COUNT: number;
    static DEFAULT_DIRECTION: number;
    static DEFAULT_TAG: string;
    static DEFAULT_INK: number;
    static DEFAULT_ALPHA: number;
    static DEFAULT_IGNORE_MOUSE: boolean;
    static DEFAULT_XOFFSET: number;
    static DEFAULT_YOFFSET: number;
    static DEFAULT_ZOFFSET: number;
    private _tag;
    private _ink;
    private _alpha;
    private _ignoreMouse;
    private _xOffset;
    private _yOffset;
    private _zOffset;
    constructor();
    setFromLayer(layer: LayerData): void;
    get tag(): string;
    set tag(tag: string);
    get ink(): number;
    set ink(ink: number);
    get alpha(): number;
    set alpha(alpha: number);
    get ignoreMouse(): boolean;
    set ignoreMouse(flag: boolean);
    get xOffset(): number;
    set xOffset(offset: number);
    get yOffset(): number;
    set yOffset(offset: number);
    get zOffset(): number;
    set zOffset(offset: number);
}
