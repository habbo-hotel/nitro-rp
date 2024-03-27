import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { AcceptFriendFailerData } from './AcceptFriendFailureData';
export declare class AcceptFriendResultParser implements IMessageParser {
    private _failuers;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get failures(): AcceptFriendFailerData[];
}
