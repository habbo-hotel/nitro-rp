import { IAvatarAssetDownloadLibrary } from '../../api';
import { NitroEvent } from '../core';
export declare class AvatarRenderLibraryEvent extends NitroEvent {
    static DOWNLOAD_COMPLETE: string;
    private _library;
    constructor(type: string, library: IAvatarAssetDownloadLibrary);
    get library(): IAvatarAssetDownloadLibrary;
}
