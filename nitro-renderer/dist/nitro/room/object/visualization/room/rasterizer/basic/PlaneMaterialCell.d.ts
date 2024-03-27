import { Point } from '@pixi/math';
import { Sprite } from '@pixi/sprite';
import { IGraphicAsset, IVector3D } from '../../../../../../../api';
import { PlaneTexture } from './PlaneTexture';
export declare class PlaneMaterialCell {
    private _texture;
    private _extraItemOffsets;
    private _extraItemAssets;
    private _extraItemCount;
    constructor(texture: PlaneTexture, assets?: IGraphicAsset[], offsetPoints?: Point[], limit?: number);
    get isStatic(): boolean;
    dispose(): void;
    clearCache(): void;
    getHeight(normal: IVector3D): number;
    render(normal: IVector3D, textureOffsetX: number, textureOffsetY: number): Sprite;
    getAssetName(normal: IVector3D): string;
}
