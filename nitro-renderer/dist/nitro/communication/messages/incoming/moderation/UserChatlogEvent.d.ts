import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { UserChatlogMessageParser } from '../../parser';
export declare class UserChatlogEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserChatlogMessageParser;
}
