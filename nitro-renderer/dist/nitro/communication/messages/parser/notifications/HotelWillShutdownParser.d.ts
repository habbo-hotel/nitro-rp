import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class HotelWillShutdownParser implements IMessageParser {
    private _minutes;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get minutes(): number;
}
