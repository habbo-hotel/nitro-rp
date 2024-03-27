import { FurnitureAnimatedVisualization } from '../furniture';
export declare class TileCursorVisualization extends FurnitureAnimatedVisualization {
    private _tileHeight;
    constructor();
    protected getLayerYOffset(scale: number, direction: number, layerId: number): number;
}
