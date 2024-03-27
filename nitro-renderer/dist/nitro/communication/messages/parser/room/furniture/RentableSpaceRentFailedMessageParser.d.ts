import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RentableSpaceRentFailedMessageParser implements IMessageParser {
    private _reason;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get reason(): number;
}
