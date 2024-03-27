import { AbstractRenderer, Renderer, RenderTexture } from '@pixi/core';
import { DisplayObject } from '@pixi/display';
import { Extract } from '@pixi/extract';
import { Matrix, Rectangle } from '@pixi/math';
export declare class PlaneTextureCache {
    private static DEFAULT_PLANE_ID;
    RENDER_TEXTURE_POOL: Map<string, RenderTexture>;
    RENDER_TEXTURE_CACHE: RenderTexture[];
    clearCache(): void;
    clearRenderTexture(renderTexture: RenderTexture): RenderTexture;
    private getTextureIdentifier;
    createRenderTexture(width: number, height: number, planeId?: string): RenderTexture;
    createAndFillRenderTexture(width: number, height: number, planeId?: any, color?: number): RenderTexture;
    createAndWriteRenderTexture(width: number, height: number, displayObject: DisplayObject, planeId?: string, transform?: Matrix): RenderTexture;
    clearAndFillRenderTexture(renderTexture: RenderTexture, color?: number): RenderTexture;
    writeToRenderTexture(displayObject: DisplayObject, renderTexture: RenderTexture, clear?: boolean, transform?: Matrix): RenderTexture;
    getPixels(displayObject: DisplayObject | RenderTexture, frame?: Rectangle): Uint8Array;
    getRenderer(): Renderer | AbstractRenderer;
    getExtractor(): Extract;
}
