import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuildForumThreadsParser } from '../../parser';
export declare class GuildForumThreadsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuildForumThreadsParser;
}
