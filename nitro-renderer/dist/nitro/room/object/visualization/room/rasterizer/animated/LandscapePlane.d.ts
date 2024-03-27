import { RenderTexture } from '@pixi/core';
import { IVector3D } from '../../../../../../../api';
import { PlaneTextureCache } from '../../../../../../../pixi-proxy';
import { Plane } from '../basic';
export declare class LandscapePlane extends Plane {
    static DEFAULT_COLOR: number;
    static HORIZONTAL_ANGLE_DEFAULT: number;
    static VERTICAL_ANGLE_DEFAULT: number;
    private _width;
    private _height;
    isStatic(scale: number): boolean;
    initializeDimensions(width: number, height: number): void;
    render(planeId: string, textureCache: PlaneTextureCache, canvas: RenderTexture, width: number, height: number, scale: number, normal: IVector3D, useTexture: boolean, offsetX: number, offsetY: number, maxX: number, maxY: number, timeSinceStartMs: number): RenderTexture;
}
