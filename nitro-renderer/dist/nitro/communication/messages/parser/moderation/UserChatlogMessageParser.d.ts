import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { UserChatlogData } from './UserChatlogData';
export declare class UserChatlogMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): UserChatlogData;
}
