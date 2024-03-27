import { IAssetAnimationAvatar, IAvatarDataContainer } from '../../../api';
import { AdjustmentFilter } from '../../../pixi-proxy';
export declare class AvatarDataContainer implements IAvatarDataContainer {
    private _ink;
    private _foreGround;
    private _backGround;
    private _colorTransform;
    private _rgb;
    private _r;
    private _g;
    private _b;
    private _redMultiplier;
    private _greenMultiplier;
    private _blueMultiplier;
    private _alphaMultiplier;
    private _colorMap;
    private _paletteIsGrayscale;
    constructor(k: IAssetAnimationAvatar);
    get ink(): number;
    get colorTransform(): AdjustmentFilter;
    get reds(): number[];
    get greens(): number[];
    get blues(): number[];
    get alphas(): number[];
    get paletteIsGrayscale(): boolean;
    private generatePaletteMapForGrayscale;
}
