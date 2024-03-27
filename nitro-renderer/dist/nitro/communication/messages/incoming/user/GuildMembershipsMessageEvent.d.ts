import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuildMembershipsMessageParser } from '../../parser';
export declare class GuildMembershipsMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuildMembershipsMessageParser;
}
