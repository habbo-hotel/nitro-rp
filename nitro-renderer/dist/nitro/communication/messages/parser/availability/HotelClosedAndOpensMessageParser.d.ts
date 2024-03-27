import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class HotelClosedAndOpensMessageParser implements IMessageParser {
    private _openHour;
    private _openMinute;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get openHour(): number;
    get openMinute(): number;
}
