import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class HotelClosesAndWillOpenAtMessageParser implements IMessageParser {
    private _openHour;
    private _openMinute;
    private _userThrownOutAtClose;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get openHour(): number;
    get openMinute(): number;
    get userThrowOutAtClose(): boolean;
}
