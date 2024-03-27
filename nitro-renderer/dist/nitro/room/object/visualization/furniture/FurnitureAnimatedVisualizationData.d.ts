import { AnimationFrame, SizeData } from '../data';
import { FurnitureVisualizationData } from './FurnitureVisualizationData';
export declare class FurnitureAnimatedVisualizationData extends FurnitureVisualizationData {
    protected createSizeData(scale: number, layerCount: number, angle: number): SizeData;
    protected processVisualElement(sizeData: SizeData, key: string, data: any): boolean;
    hasAnimation(scale: number, animationId: number): boolean;
    getAnimationCount(scale: number): number;
    getAnimationId(scale: number, animationId: number): number;
    isImmediateChange(scale: number, animationId: number, _arg_3: number): boolean;
    getStartFrame(scale: number, animationId: number, direction: number): number;
    getFrame(scale: number, animationId: number, direction: number, layerId: number, frameCount: number): AnimationFrame;
    getFrameFromSequence(scale: number, animationId: number, direction: number, layerId: number, sequenceId: number, offset: number, frameCount: number): AnimationFrame;
}
