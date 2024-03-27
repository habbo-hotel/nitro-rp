import { IAssetColor, IAssetVisualizationDirection, IAssetVisualizationLayer } from '../../../../../api';
import { DirectionData } from './DirectionData';
export declare class SizeData {
    static MAX_LAYERS: number;
    private _layerCount;
    private _angle;
    private _defaultDirection;
    private _directions;
    private _colors;
    private _lastDirectionData;
    private _lastDirection;
    constructor(layerCount: number, angle: number);
    dispose(): void;
    protected reset(): void;
    processLayers(layers: {
        [index: string]: IAssetVisualizationLayer;
    }): boolean;
    processDirections(directions: {
        [index: string]: IAssetVisualizationDirection;
    }): boolean;
    processColors(colors: {
        [index: string]: IAssetColor;
    }): boolean;
    private setDirectionLayers;
    getValidDirection(direction: number): number;
    getDirectionData(direction: number): DirectionData;
    getLayerTag(direction: number, layerId: number): string;
    getLayerInk(direction: number, layerId: number): number;
    getLayerAlpha(direction: number, layerId: number): number;
    getLayerColor(layerId: number, colorId: number): number;
    getLayerIgnoreMouse(direction: number, layerId: number): boolean;
    getLayerXOffset(direction: number, layerId: number): number;
    getLayerYOffset(direction: number, layerId: number): number;
    getLayerZOffset(direction: number, layerId: number): number;
    get layerCount(): number;
}
