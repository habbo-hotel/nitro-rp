import { IAssetManager, IAvatarAssetDownloadLibrary } from '../../api';
import { EventDispatcher } from '../../core';
export declare class AvatarAssetDownloadLibrary extends EventDispatcher implements IAvatarAssetDownloadLibrary {
    static DOWNLOAD_COMPLETE: string;
    private static NOT_LOADED;
    private static LOADING;
    private static LOADED;
    private _state;
    private _libraryName;
    private _revision;
    private _downloadUrl;
    private _assets;
    constructor(id: string, revision: string, assets: IAssetManager, assetUrl: string);
    downloadAsset(): Promise<void>;
    get libraryName(): string;
    get isLoaded(): boolean;
}
