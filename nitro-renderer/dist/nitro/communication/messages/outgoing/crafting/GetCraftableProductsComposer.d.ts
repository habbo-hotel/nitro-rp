import { IMessageComposer } from '../../../../../api';
export declare class GetCraftableProductsComposer implements IMessageComposer<ConstructorParameters<typeof GetCraftableProductsComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
