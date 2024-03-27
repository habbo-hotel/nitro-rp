import { Resource, Texture } from '@pixi/core';
import { Container } from '@pixi/display';
import { Point, Rectangle } from '@pixi/math';
export declare class ImageData {
    private _texture;
    private _container;
    private _rect;
    private _regPoint;
    private _flipH;
    private _colorTransform;
    constructor(texture: Texture<Resource>, rectangle: Rectangle, _arg_3: Point, flipH: boolean, color: number, container?: Container);
    dispose(): void;
    get texture(): Texture<Resource>;
    get container(): Container;
    get rect(): Rectangle;
    get regPoint(): Point;
    get flipH(): boolean;
    get colorTransform(): number;
    get offsetRect(): Rectangle;
}
