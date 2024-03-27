import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RentableSpaceRentOkMessageParser implements IMessageParser {
    private _expiryTime;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get expiryTime(): number;
}
