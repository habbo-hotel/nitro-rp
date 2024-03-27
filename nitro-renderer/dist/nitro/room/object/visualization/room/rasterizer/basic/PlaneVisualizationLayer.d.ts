import { RenderTexture } from '@pixi/core';
import { IVector3D } from '../../../../../../../api';
import { PlaneTextureCache } from '../../../../../../../pixi-proxy';
import { PlaneMaterial } from './PlaneMaterial';
export declare class PlaneVisualizationLayer {
    static DEFAULT_OFFSET: number;
    static ALIGN_TOP: number;
    static ALIGN_BOTTOM: number;
    static ALIGN_DEFAULT: number;
    private _material;
    private _color;
    private _offset;
    private _align;
    private _isDisposed;
    constructor(material: PlaneMaterial, color: number, align: number, offset?: number);
    get offset(): number;
    get align(): number;
    get disposed(): boolean;
    dispose(): void;
    clearCache(): void;
    render(planeId: string, textureCache: PlaneTextureCache, canvas: RenderTexture, width: number, height: number, normal: IVector3D, useTexture: boolean, offsetX: number, offsetY: number): RenderTexture;
    getMaterial(): PlaneMaterial;
    getColor(): number;
}
