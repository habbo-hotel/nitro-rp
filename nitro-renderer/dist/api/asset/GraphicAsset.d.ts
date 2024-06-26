import { Resource, Texture } from '@pixi/core';
import { Rectangle } from '@pixi/math';
import { IGraphicAsset } from './IGraphicAsset';
export declare class GraphicAsset implements IGraphicAsset {
    private static GRAPHIC_POOL;
    private _name;
    private _source;
    private _texture;
    private _usesPalette;
    private _x;
    private _y;
    private _width;
    private _height;
    private _flipH;
    private _flipV;
    private _rectangle;
    private _initialized;
    static createAsset(name: string, source: string, texture: Texture<Resource>, x: number, y: number, flipH?: boolean, flipV?: boolean, usesPalette?: boolean): GraphicAsset;
    recycle(): void;
    private initialize;
    getImageUrl(): string;
    get name(): string;
    get source(): string;
    get texture(): Texture<Resource>;
    get usesPalette(): boolean;
    get x(): number;
    get y(): number;
    get width(): number;
    get height(): number;
    get offsetX(): number;
    get offsetY(): number;
    get flipH(): boolean;
    get flipV(): boolean;
    get rectangle(): Rectangle;
}
