import { IAnimation, IAnimationLayerData, IAnimationManager, IAssetAnimation } from '../../../api';
import { AvatarStructure } from '../AvatarStructure';
import { Animation } from './Animation';
export declare class AnimationManager implements IAnimationManager {
    private _animations;
    constructor();
    registerAnimation(structure: AvatarStructure, _arg_2: {
        [index: string]: IAssetAnimation;
    }): boolean;
    getAnimation(animation: string): Animation;
    getLayerData(animation: string, frameCount: number, spriteId: string): IAnimationLayerData;
    get animations(): Map<string, IAnimation>;
}
