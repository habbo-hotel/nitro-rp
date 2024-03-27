import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuildMemberMgmtFailedMessageParser } from '../../parser';
export declare class GuildMemberMgmtFailedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuildMemberMgmtFailedMessageParser;
}
