import { IActionDefinition, IPartColor } from '../../api';
import { AvatarAnimationFrame } from './structure';
export declare class AvatarImagePartContainer {
    private _bodyPartId;
    private _partType;
    private _flippedPartType;
    private _partId;
    private _color;
    private _frames;
    private _action;
    private _isColorable;
    private _isBlendable;
    private _blendTransform;
    private _paletteMapId;
    constructor(bodyPartId: string, partType: string, partId: string, partColor: IPartColor, frames: AvatarAnimationFrame[], action: IActionDefinition, isColorable: boolean, paletteMapId: number, flippedPartType?: string, isBlendable?: boolean, _arg_11?: number);
    getFrameIndex(k: number): number;
    getFrameDefinition(k: number): AvatarAnimationFrame;
    getCacheableKey(k: number): string;
    get bodyPartId(): string;
    get partType(): string;
    get partId(): string;
    get color(): IPartColor;
    get action(): IActionDefinition;
    get isColorable(): boolean;
    set isColorable(k: boolean);
    get paletteMapId(): number;
    get flippedPartType(): string;
    get isBlendable(): boolean;
    toString(): string;
}
