import { IAssetVisualizationData } from '../../../../../api';
import { SizeData } from '../data';
import { FurnitureAnimatedVisualizationData } from '../furniture';
export declare class PetVisualizationData extends FurnitureAnimatedVisualizationData {
    private _isAllowedToTurnHead;
    constructor();
    protected createSizeData(scale: number, layerCount: number, angle: number): SizeData;
    protected defineVisualizations(visualizations: IAssetVisualizationData[]): boolean;
    protected processVisualElement(sizeData: SizeData, key: string, data: any): boolean;
    postureToAnimation(scale: number, posture: string): number;
    getGestureDisabled(scale: number, posture: string): boolean;
    gestureToAnimation(scale: number, gesture: string): number;
    animationToPosture(scale: number, index: number, useDefault: boolean): string;
    animationToGesture(scale: number, index: number): string;
    getGestureForAnimationId(scale: number, _arg_2: number): string;
    totalPostures(scale: number): number;
    totalGestures(scale: number): number;
    get isAllowedToTurnHead(): boolean;
}
