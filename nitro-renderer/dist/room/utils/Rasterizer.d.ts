import { Resource, Texture } from '@pixi/core';
export declare class Rasterizer {
    static getFlipHBitmapData(k: Texture<Resource>): Texture<Resource>;
    static getFlipVBitmapData(k: Texture<Resource>): Texture<Resource>;
    static getFlipHVBitmapData(k: Texture<Resource>): Texture<Resource>;
}
