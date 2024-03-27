import { IAnimation, IAssetAnimation } from '../../../api';
import { AvatarStructure } from '../AvatarStructure';
import { AddDataContainer } from './AddDataContainer';
import { AvatarAnimationLayerData } from './AvatarAnimationLayerData';
import { AvatarDataContainer } from './AvatarDataContainer';
import { DirectionDataContainer } from './DirectionDataContainer';
import { SpriteDataContainer } from './SpriteDataContainer';
export declare class Animation implements IAnimation {
    private static EMPTY_ARRAY;
    private _id;
    private _description;
    private _frames;
    private _spriteData;
    private _avatarData;
    private _directionData;
    private _removeData;
    private _addData;
    private _overriddenActions;
    private _overrideFrames;
    private _resetOnToggle;
    constructor(k: AvatarStructure, _arg_2: IAssetAnimation);
    private parseFrames;
    frameCount(k?: string): number;
    hasOverriddenActions(): boolean;
    overriddenActionNames(): string[];
    overridingAction(k: string): string;
    private getFrame;
    getAnimatedBodyPartIds(k: number, _arg_2?: string): string[];
    getLayerData(frameCount: number, spriteId: string, _arg_3?: string): AvatarAnimationLayerData;
    hasAvatarData(): boolean;
    hasDirectionData(): boolean;
    hasAddData(): boolean;
    getAddData(k: string): AddDataContainer;
    get id(): string;
    get spriteData(): SpriteDataContainer[];
    get avatarData(): AvatarDataContainer;
    get directionData(): DirectionDataContainer;
    get removeData(): string[];
    get addData(): AddDataContainer[];
    toString(): string;
    get resetOnToggle(): boolean;
}