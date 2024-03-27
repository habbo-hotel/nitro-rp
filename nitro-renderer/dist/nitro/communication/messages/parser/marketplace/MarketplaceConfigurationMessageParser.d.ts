import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MarketplaceConfigurationMessageParser implements IMessageParser {
    private _enabled;
    private _commission;
    private _credits;
    private _advertisements;
    private _maximumPrice;
    private _minimumPrice;
    private _offerTime;
    private _displayTime;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get enabled(): boolean;
    get commission(): number;
    get credits(): number;
    get advertisements(): number;
    get minimumPrice(): number;
    get maximumPrice(): number;
    get offerTime(): number;
    get displayTime(): number;
}
