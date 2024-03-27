import { IEffectAssetDownloadLibrary } from '../../api';
import { NitroEvent } from '../core';
export declare class AvatarRenderEffectLibraryEvent extends NitroEvent {
    static DOWNLOAD_COMPLETE: string;
    private _library;
    constructor(type: string, library: IEffectAssetDownloadLibrary);
    get library(): IEffectAssetDownloadLibrary;
}
