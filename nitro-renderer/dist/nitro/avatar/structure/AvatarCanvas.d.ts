import { Point } from '@pixi/math';
export declare class AvatarCanvas {
    private _id;
    private _width;
    private _height;
    private _offset;
    private _regPoint;
    constructor(k: any, _arg_2: string);
    get width(): number;
    get height(): number;
    get offset(): Point;
    get id(): string;
    get regPoint(): Point;
}
