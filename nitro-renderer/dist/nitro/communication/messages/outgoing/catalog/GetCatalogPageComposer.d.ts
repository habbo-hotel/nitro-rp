import { IMessageComposer } from '../../../../../api';
export declare class GetCatalogPageComposer implements IMessageComposer<ConstructorParameters<typeof GetCatalogPageComposer>> {
    private _data;
    constructor(pageId: number, offerId: number, catalogType: string);
    getMessageArray(): [pageId: number, offerId: number, catalogType: string];
    dispose(): void;
}
