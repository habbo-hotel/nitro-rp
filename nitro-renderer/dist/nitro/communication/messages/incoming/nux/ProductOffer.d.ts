import { IMessageDataWrapper } from '../../../../../api';
export declare class ProductOffer {
    private _itemName;
    private _extraInfo;
    constructor(wrapper: IMessageDataWrapper);
    get itemName(): string;
    get extraInfo(): string;
}
