import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureExchangeComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureExchangeComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
