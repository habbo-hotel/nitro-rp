import { NitroPoint, NitroTexture } from '../../../pixi-proxy';
export declare class GroupBadgePart {
    static BASE: string;
    static SYMBOL: string;
    static SYMBOL_ALT: string;
    static BASE_PART: number;
    static LAYER_PART: number;
    static IMAGE_WIDTH: number;
    static IMAGE_HEIGHT: number;
    static CELL_WIDTH: number;
    static CELL_HEIGHT: number;
    type: string;
    key: number;
    color: number;
    position: number;
    constructor(type: string, key?: number, color?: number, position?: number);
    get code(): string;
    static getCode(type: string, key: number, color: number, position: number): string;
    calculatePosition(asset: NitroTexture): NitroPoint;
    private calculateGridPos;
}
