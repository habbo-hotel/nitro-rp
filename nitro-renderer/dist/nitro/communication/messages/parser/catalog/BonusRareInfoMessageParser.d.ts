import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class BonusRareInfoMessageParser implements IMessageParser {
    private _productType;
    private _productClassId;
    private _totalCoinsForBonus;
    private _coinsStillRequiredToBuy;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get totalCoinsForBonus(): number;
    get coinsStillRequiredToBuy(): number;
    get productType(): string;
    get productClassId(): number;
}
