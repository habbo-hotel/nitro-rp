import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GiftWrappingConfigurationParser implements IMessageParser {
    private _isEnabled;
    private _price;
    private _giftWrappers;
    private _boxTypes;
    private _ribbonTypes;
    private _giftFurnis;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get giftWrappers(): number[];
    get ribbonTypes(): number[];
    get giftFurnis(): number[];
    get boxTypes(): number[];
    get isEnabled(): boolean;
    get price(): number;
}
