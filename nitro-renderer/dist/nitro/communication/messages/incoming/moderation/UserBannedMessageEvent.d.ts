import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { UserBannedMessageParser } from '../../parser';
export declare class UserBannedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserBannedMessageParser;
}
