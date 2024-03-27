import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FriendRequestsParser } from '../../parser';
export declare class FriendRequestsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FriendRequestsParser;
}
