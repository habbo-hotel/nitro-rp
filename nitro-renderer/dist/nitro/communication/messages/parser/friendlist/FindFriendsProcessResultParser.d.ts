import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class FindFriendsProcessResultParser implements IMessageParser {
    private _success;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get success(): boolean;
}
