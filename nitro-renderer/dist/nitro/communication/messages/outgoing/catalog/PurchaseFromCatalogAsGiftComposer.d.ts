import { IMessageComposer } from '../../../../../api';
export declare class PurchaseFromCatalogAsGiftComposer implements IMessageComposer<ConstructorParameters<typeof PurchaseFromCatalogAsGiftComposer>> {
    private _data;
    constructor(pageId: number, itemId: number, extraData: string, receivingName: string, giftMessage: string, spriteId: number, boxId: number, ribbonId: number, showMyFace: boolean);
    getMessageArray(): [pageId: number, itemId: number, extraData: string, receivingName: string, giftMessage: string, spriteId: number, boxId: number, ribbonId: number, showMyFace: boolean];
    dispose(): void;
}
