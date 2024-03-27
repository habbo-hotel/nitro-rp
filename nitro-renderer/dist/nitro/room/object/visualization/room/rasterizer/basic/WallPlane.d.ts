import { RenderTexture } from '@pixi/core';
import { IVector3D } from '../../../../../../../api';
import { PlaneTextureCache } from '../../../../../../../pixi-proxy';
import { Plane } from './Plane';
export declare class WallPlane extends Plane {
    static DEFAULT_COLOR: number;
    static HORIZONTAL_ANGLE_DEFAULT: number;
    static VERTICAL_ANGLE_DEFAULT: number;
    render(planeId: string, textureCache: PlaneTextureCache, canvas: RenderTexture, width: number, height: number, size: number, normal: IVector3D, useTexture: boolean): RenderTexture;
}
