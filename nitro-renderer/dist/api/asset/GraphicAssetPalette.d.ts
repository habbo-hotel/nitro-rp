import { Resource, Texture } from '@pixi/core';
export declare class GraphicAssetPalette {
    private _palette;
    private _primaryColor;
    private _secondaryColor;
    constructor(palette: [number, number, number][], primaryColor: number, secondaryColor: number);
    dispose(): void;
    applyPalette(texture: Texture<Resource>): Texture<Resource>;
    get primaryColor(): number;
    get secondaryColor(): number;
}
