import { AbstractRenderer, Renderer, RenderTexture, Resource, Texture } from '@pixi/core';
import { DisplayObject } from '@pixi/display';
import { Extract } from '@pixi/extract';
import { Matrix, Rectangle } from '@pixi/math';
export declare class TextureUtils {
    static generateTexture(displayObject: DisplayObject, region?: Rectangle, scaleMode?: number, resolution?: number): RenderTexture;
    static generateTextureFromImage(image: HTMLImageElement): Texture<Resource>;
    static generateImage(target: DisplayObject | RenderTexture): HTMLImageElement;
    static generateImageUrl(target: DisplayObject | RenderTexture): string;
    static generateCanvas(target: DisplayObject | RenderTexture): HTMLCanvasElement;
    static clearRenderTexture(renderTexture: RenderTexture): RenderTexture;
    static createRenderTexture(width: number, height: number): RenderTexture;
    static createAndFillRenderTexture(width: number, height: number, color?: number): RenderTexture;
    static createAndWriteRenderTexture(width: number, height: number, displayObject: DisplayObject, transform?: Matrix): RenderTexture;
    static clearAndFillRenderTexture(renderTexture: RenderTexture, color?: number): RenderTexture;
    static writeToRenderTexture(displayObject: DisplayObject, renderTexture: RenderTexture, clear?: boolean, transform?: Matrix): RenderTexture;
    static getPixels(displayObject: DisplayObject | RenderTexture, frame?: Rectangle): Uint8Array;
    static getRenderer(): Renderer | AbstractRenderer;
    static getExtractor(): Extract;
}
