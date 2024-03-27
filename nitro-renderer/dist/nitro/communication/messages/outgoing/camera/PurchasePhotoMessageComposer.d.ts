import { IMessageComposer } from '../../../../../api';
export declare class PurchasePhotoMessageComposer implements IMessageComposer<ConstructorParameters<typeof PurchasePhotoMessageComposer>> {
    private _data;
    constructor(photoId: string);
    getMessageArray(): [photoId: string];
    dispose(): void;
}
