import { IGraphicAsset } from '../../../../../../api';
export declare class PlaneMaskBitmap {
    static MIN_NORMAL_COORDINATE_VALUE: number;
    static MAX_NORMAL_COORDINATE_VALUE: number;
    private _asset;
    private _normalMinX;
    private _normalMaxX;
    private _normalMinY;
    private _normalMaxY;
    constructor(k: IGraphicAsset, _arg_2?: number, _arg_3?: number, _arg_4?: number, _arg_5?: number);
    get asset(): IGraphicAsset;
    get normalMinX(): number;
    get normalMaxX(): number;
    get normalMinY(): number;
    get normalMaxY(): number;
    dispose(): void;
}
