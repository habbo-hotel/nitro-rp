import { IMessageComposer } from '../../../../../../api';
export declare class ExtendRentOrBuyoutStripItemMessageComposer implements IMessageComposer<ConstructorParameters<typeof ExtendRentOrBuyoutStripItemMessageComposer>> {
    private _data;
    constructor(stripId: number, isBuyout: boolean);
    getMessageArray(): [stripId: number, isBuyout: boolean];
    dispose(): void;
}
