import { IGraphicAsset, IVector3D } from '../../../../../../api';
import { PlaneMaskVisualization } from './PlaneMaskVisualization';
export declare class PlaneMask {
    private _maskVisualizations;
    private _sizes;
    private _assetNames;
    private _lastMaskVisualization;
    private _lastSize;
    constructor();
    dispose(): void;
    createMaskVisualization(size: number): PlaneMaskVisualization;
    private getSizeIndex;
    protected getMaskVisualization(k: number): PlaneMaskVisualization;
    getGraphicAsset(k: number, _arg_2: IVector3D): IGraphicAsset;
    getAssetName(k: number): string;
    setAssetName(k: number, _arg_2: string): void;
}
