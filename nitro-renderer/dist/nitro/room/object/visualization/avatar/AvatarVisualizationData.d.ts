import { Resource, Texture } from '@pixi/core';
import { IAssetData, IAvatarEffectListener, IAvatarImage, IAvatarImageListener, IAvatarRenderManager, IObjectVisualizationData } from '../../../../../api';
import { Disposable } from '../../../../../core';
export declare class AvatarVisualizationData extends Disposable implements IObjectVisualizationData {
    private _avatarRenderer;
    constructor();
    initialize(asset: IAssetData): boolean;
    onDispose(): void;
    createAvatarImage(figure: string, size: number, gender?: string, avatarListener?: IAvatarImageListener, effectListener?: IAvatarEffectListener): IAvatarImage;
    getAvatarRendererAsset(name: string): Texture<Resource>;
    get avatarManager(): IAvatarRenderManager;
    set avatarManager(renderer: IAvatarRenderManager);
    get layerCount(): number;
}
