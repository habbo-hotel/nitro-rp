import { IAssetData, IGraphicAssetCollection, IObjectVisualizationData } from '../../../../../api';
import { Disposable } from '../../../../../core';
import { PlaneMaskManager } from './mask';
import { FloorRasterizer, LandscapeRasterizer, WallRasterizer } from './rasterizer';
export declare class RoomVisualizationData extends Disposable implements IObjectVisualizationData {
    private _wallRasterizer;
    private _floorRasterizer;
    private _landscapeRasterizer;
    private _maskManager;
    private _initialized;
    constructor();
    initialize(asset: IAssetData): boolean;
    protected onDispose(): void;
    setGraphicAssetCollection(collection: IGraphicAssetCollection): void;
    clearCache(): void;
    get wallRasterizer(): WallRasterizer;
    get floorRasterizer(): FloorRasterizer;
    get landscapeRasterizer(): LandscapeRasterizer;
    get maskManager(): PlaneMaskManager;
}
