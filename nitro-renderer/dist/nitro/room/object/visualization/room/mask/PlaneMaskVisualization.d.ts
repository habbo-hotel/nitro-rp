import { IGraphicAsset, IVector3D } from '../../../../../../api';
export declare class PlaneMaskVisualization {
    static MIN_NORMAL_COORDINATE_VALUE: number;
    static MAX_NORMAL_COORDINATE_VALUE: number;
    private _bitmaps;
    constructor();
    dispose(): void;
    addBitmap(k: IGraphicAsset, _arg_2?: number, _arg_3?: number, _arg_4?: number, _arg_5?: number): void;
    getAsset(k: IVector3D): IGraphicAsset;
}
