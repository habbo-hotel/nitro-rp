import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class InterstitialMessageParser implements IMessageParser {
    private _canShowInterstitial;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get canShowInterstitial(): boolean;
}
