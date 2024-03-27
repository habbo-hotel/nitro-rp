import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class DirectSMSClubBuyAvailableMessageParser implements IMessageParser {
    private _available;
    private _pricePointUrl;
    private _market;
    private _lengthInDays;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get available(): boolean;
    get pricePointUrl(): string;
    get market(): string;
    get lengthInDays(): number;
}
