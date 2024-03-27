import { Point } from '@pixi/math';
import { IGraphicAsset } from '../../../../../../../api';
export declare class AnimationItem {
    private _x;
    private _y;
    private _speedX;
    private _speedY;
    private _asset;
    constructor(x: number, y: number, speedX: number, speedY: number, asset: IGraphicAsset);
    get bitmapData(): IGraphicAsset;
    dispose(): void;
    getPosition(maxX: number, maxY: number, dimensionX: number, dimensionY: number, timeSinceStartMs: number): Point;
}
