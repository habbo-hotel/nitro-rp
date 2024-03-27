import { LayerData } from './LayerData';
export declare class DirectionData {
    static USE_DEFAULT_DIRECTION: number;
    private _layers;
    constructor(layerCount: number);
    private createLayers;
    dispose(): void;
    setFromDirection(directionData: DirectionData): void;
    getLayer(layerId: number): LayerData;
    getLayerTag(layerId: number): string;
    setLayerTag(layerId: number, tag: string): void;
    getLayerInk(layerId: number): number;
    setLayerInk(layerId: number, ink: number): void;
    getLayerAlpha(layerId: number): number;
    setLayerAlpha(layerId: number, alpha: number): void;
    getLayerIgnoreMouse(layerId: number): boolean;
    setLayerIgnoreMouse(layerId: number, flag: boolean): void;
    getLayerXOffset(layerId: number): number;
    setLayerXOffset(layerId: number, offset: number): void;
    getLayerYOffset(layerId: number): number;
    setLayerYOffset(layerId: number, offset: number): void;
    getLayerZOffset(layerId: number): number;
    setLayerZOffset(layerId: number, offset: number): void;
    get layerCount(): number;
}
