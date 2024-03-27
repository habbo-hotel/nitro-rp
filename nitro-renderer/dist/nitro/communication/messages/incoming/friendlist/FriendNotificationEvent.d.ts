import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FriendNotificationParser } from '../../parser';
export declare class FriendNotificationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FriendNotificationParser;
}
