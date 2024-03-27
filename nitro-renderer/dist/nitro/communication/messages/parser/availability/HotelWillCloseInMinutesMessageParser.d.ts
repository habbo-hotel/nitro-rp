import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class HotelWillCloseInMinutesMessageParser implements IMessageParser {
    private _minutes;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get openMinute(): number;
}
