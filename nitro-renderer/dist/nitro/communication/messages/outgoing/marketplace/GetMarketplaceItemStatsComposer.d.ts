import { IMessageComposer } from '../../../../../api';
export declare class GetMarketplaceItemStatsComposer implements IMessageComposer<ConstructorParameters<typeof GetMarketplaceItemStatsComposer>> {
    private _data;
    constructor(unknown: number, itemId: number);
    getMessageArray(): [unknown: number, itemId: number];
    dispose(): void;
}
