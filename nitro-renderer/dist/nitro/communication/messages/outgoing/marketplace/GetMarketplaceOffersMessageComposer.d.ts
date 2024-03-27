import { IMessageComposer } from '../../../../../api';
export declare class GetMarketplaceOffersMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetMarketplaceOffersMessageComposer>> {
    private _data;
    constructor(min: number, max: number, query: string, type: number);
    getMessageArray(): [min: number, max: number, query: string, type: number];
    dispose(): void;
}
