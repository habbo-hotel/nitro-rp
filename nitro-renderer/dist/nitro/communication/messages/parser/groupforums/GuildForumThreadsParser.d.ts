import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { GuildForumThread } from './GuildForumThread';
export declare class GuildForumThreadsParser implements IMessageParser {
    private _groupId;
    private _startIndex;
    private _amount;
    private _threads;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get groupId(): number;
    get startIndex(): number;
    get amount(): number;
    get threads(): GuildForumThread[];
}
