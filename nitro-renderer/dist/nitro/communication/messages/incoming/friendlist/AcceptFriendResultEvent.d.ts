import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { AcceptFriendResultParser } from '../../parser';
export declare class AcceptFriendResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AcceptFriendResultParser;
}
