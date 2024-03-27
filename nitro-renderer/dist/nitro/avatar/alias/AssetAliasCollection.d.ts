import { IAssetManager, IGraphicAsset } from '../../../api';
import { AvatarRenderManager } from '../AvatarRenderManager';
export declare class AssetAliasCollection {
    private _assets;
    private _aliases;
    private _avatarRenderManager;
    private _missingAssetNames;
    constructor(k: AvatarRenderManager, _arg_2: IAssetManager);
    dispose(): void;
    reset(): void;
    init(): void;
    hasAlias(k: string): boolean;
    getAssetName(k: string): string;
    getAsset(name: string): IGraphicAsset;
}
