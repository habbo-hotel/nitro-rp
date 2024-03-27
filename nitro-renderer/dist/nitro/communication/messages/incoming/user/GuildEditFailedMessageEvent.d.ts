import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuildEditFailedMessageParser } from '../../parser';
export declare class GuildEditFailedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuildEditFailedMessageParser;
}
