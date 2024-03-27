import { Container } from '@pixi/display';
import { Point } from '@pixi/math';
export declare class AvatarImageBodyPartContainer {
    private _image;
    private _regPoint;
    private _offset;
    private _isCacheable;
    constructor(k: Container, _arg_2: Point, _arg_3: boolean);
    dispose(): void;
    private cleanPoints;
    setRegPoint(k: Point): void;
    get image(): Container;
    set image(k: Container);
    get regPoint(): Point;
    set offset(k: Point);
    get isCacheable(): boolean;
}
