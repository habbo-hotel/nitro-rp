import { RenderTexture } from '@pixi/core';
import { IVector3D } from '../../../../../../../api';
import { PlaneTextureCache } from '../../../../../../../pixi-proxy';
import { Plane } from './Plane';
export declare class FloorPlane extends Plane {
    static DEFAULT_COLOR: number;
    static HORIZONTAL_ANGLE_DEFAULT: number;
    static VERTICAL_ANGLE_DEFAULT: number;
    render(planeId: string, textureCache: PlaneTextureCache, canvas: RenderTexture, width: number, height: number, scale: number, normal: IVector3D, useTexture: boolean, offsetX: number, offsetY: number): RenderTexture;
}
