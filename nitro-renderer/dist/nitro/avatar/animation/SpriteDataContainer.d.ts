import { IAnimation, IAssetAnimationSprite, ISpriteDataContainer } from '../../../api';
export declare class SpriteDataContainer implements ISpriteDataContainer {
    private _animation;
    private _id;
    private _ink;
    private _member;
    private _hasDirections;
    private _hasStaticY;
    private _dx;
    private _dy;
    private _dz;
    constructor(k: IAnimation, _arg_2: IAssetAnimationSprite);
    getDirectionOffsetX(k: number): number;
    getDirectionOffsetY(k: number): number;
    getDirectionOffsetZ(k: number): number;
    get animation(): IAnimation;
    get id(): string;
    get ink(): number;
    get member(): string;
    get hasDirections(): boolean;
    get hasStaticY(): boolean;
}
