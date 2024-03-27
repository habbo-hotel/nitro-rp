import { IAssetGesture, IAssetPosture } from '../../../../../api';
import { AnimationSizeData } from './AnimationSizeData';
export declare class PetSizeData extends AnimationSizeData {
    static DEFAULT: number;
    private _posturesToAnimations;
    private _gesturesToAnimations;
    private _defaultPosture;
    constructor(layerCount: number, angle: number);
    processPostures(postures: {
        defaultPosture?: string;
        postures: IAssetPosture[];
    }): boolean;
    processGestures(gestures: IAssetGesture[]): boolean;
    postureToAnimation(posture: string): number;
    getGestureDisabled(k: string): boolean;
    gestureToAnimation(gesture: string): number;
    animationToPosture(k: number, _arg_2: boolean): string;
    animationToGesture(index: number): string;
    getGestureForAnimationId(k: number): string;
    get totalPostures(): number;
    get totalGestures(): number;
}
