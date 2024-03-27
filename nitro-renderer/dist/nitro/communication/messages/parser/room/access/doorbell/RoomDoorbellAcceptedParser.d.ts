import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class RoomDoorbellAcceptedParser implements IMessageParser {
    private _userName;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userName(): string;
}
