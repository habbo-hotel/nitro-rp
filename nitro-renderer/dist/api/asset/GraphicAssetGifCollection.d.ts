import { Resource, Texture } from '@pixi/core';
export declare class GraphicAssetGifCollection {
    name: string;
    textures: Texture<Resource>[];
    durations: number[];
    constructor(name: string, textures: Texture<Resource>[], durations: number[]);
}
