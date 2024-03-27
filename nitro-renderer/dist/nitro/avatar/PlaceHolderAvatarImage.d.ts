import { AssetAliasCollection } from './alias';
import { AvatarFigureContainer } from './AvatarFigureContainer';
import { AvatarImage } from './AvatarImage';
import { AvatarStructure } from './AvatarStructure';
import { EffectAssetDownloadManager } from './EffectAssetDownloadManager';
export declare class PlaceHolderAvatarImage extends AvatarImage {
    constructor(k: AvatarStructure, _arg_2: AssetAliasCollection, _arg_3: AvatarFigureContainer, _arg_4: string, _arg_5: EffectAssetDownloadManager);
    isPlaceholder(): boolean;
}
