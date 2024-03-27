import { IAssetAnimation, IAssetManager, IEffectAssetDownloadLibrary } from '../../api';
import { EventDispatcher } from '../../core';
export declare class EffectAssetDownloadLibrary extends EventDispatcher implements IEffectAssetDownloadLibrary {
    static DOWNLOAD_COMPLETE: string;
    private static NOT_LOADED;
    private static LOADING;
    private static LOADED;
    private _state;
    private _libraryName;
    private _revision;
    private _downloadUrl;
    private _assets;
    private _animation;
    constructor(id: string, revision: string, assets: IAssetManager, assetUrl: string);
    downloadAsset(): Promise<void>;
    get libraryName(): string;
    get animation(): {
        [index: string]: IAssetAnimation;
    };
    get isLoaded(): boolean;
}
