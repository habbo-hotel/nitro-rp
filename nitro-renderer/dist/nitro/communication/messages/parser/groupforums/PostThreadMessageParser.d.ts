import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { GuildForumThread } from './GuildForumThread';
export declare class PostThreadMessageParser implements IMessageParser {
    private _groupId;
    private _thread;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get groupId(): number;
    get thread(): GuildForumThread;
}
