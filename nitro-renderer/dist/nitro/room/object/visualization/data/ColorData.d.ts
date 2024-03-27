export declare class ColorData {
    static DEFAULT_COLOR: number;
    private _colors;
    constructor(layerCount: number);
    private createColors;
    dispose(): void;
    getLayerColor(layerId: number): number;
    setColorLayer(layerId: number, color: number): void;
}
