import { AvatarImageBodyPartContainer } from '../AvatarImageBodyPartContainer';
import { AvatarImagePartContainer } from '../AvatarImagePartContainer';
export declare class AvatarImageDirectionCache {
    private _partList;
    private _images;
    constructor(k: AvatarImagePartContainer[]);
    dispose(): void;
    getPartList(): AvatarImagePartContainer[];
    getImageContainer(k: number): AvatarImageBodyPartContainer;
    updateImageContainer(k: AvatarImageBodyPartContainer, _arg_2: number): void;
    private getCacheKey;
    private debugInfo;
}
