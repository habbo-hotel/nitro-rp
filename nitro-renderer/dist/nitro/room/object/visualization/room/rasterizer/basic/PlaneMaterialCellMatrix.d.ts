import { RenderTexture } from '@pixi/core';
import { IVector3D } from '../../../../../../../api';
import { PlaneTextureCache } from '../../../../../../../pixi-proxy';
import { PlaneMaterialCell } from './PlaneMaterialCell';
import { PlaneMaterialCellColumn } from './PlaneMaterialCellColumn';
export declare class PlaneMaterialCellMatrix {
    static REPEAT_MODE_ALL: number;
    static REPEAT_MODE_BORDERS: number;
    static REPEAT_MODE_CENTER: number;
    static REPEAT_MODE_FIRST: number;
    static REPEAT_MODE_LAST: number;
    static REPEAT_MODE_RANDOM: number;
    static REPEAT_MODE_DEFAULT: number;
    static MIN_NORMAL_COORDINATE_VALUE: number;
    static MAX_NORMAL_COORDINATE_VALUE: number;
    static ALIGN_TOP: number;
    static ALIGN_BOTTOM: number;
    static ALIGN_DEFAULT: number;
    private _columns;
    private _repeatMode;
    private _align;
    private _cachedBitmapData;
    private _cachedBitmapNormal;
    private _cachedBitmapHeight;
    private _isCached;
    private _isStatic;
    private _normalMinX;
    private _normalMaxX;
    private _normalMinY;
    private _normalMaxY;
    constructor(totalColumns: number, repeatMode?: number, align?: number, normalMinX?: number, normalMaxX?: number, normalMinY?: number, normalMaxY?: number);
    private static nextRandomColumnIndex;
    get normalMinX(): number;
    get normalMaxX(): number;
    get normalMinY(): number;
    get normalMaxY(): number;
    isBottomAligned(): boolean;
    get isStatic(): boolean;
    dispose(): void;
    clearCache(): void;
    createColumn(index: number, width: number, cells: PlaneMaterialCell[], repeatMode?: number): boolean;
    render(planeId: string, textureCache: PlaneTextureCache, canvas: RenderTexture, width: number, height: number, normal: IVector3D, useTexture: boolean, offsetX: number, offsetY: number, topAlign: boolean): RenderTexture;
    private copyCachedBitmapOnCanvas;
    private getColumnsWidth;
    private renderColumns;
    private renderRepeatAll;
    private renderRepeatRandom;
    getColumns(width: number): PlaneMaterialCellColumn[];
}