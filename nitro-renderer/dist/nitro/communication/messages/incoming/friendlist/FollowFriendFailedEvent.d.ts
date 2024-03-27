import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FollowFriendFailedParser } from '../../parser';
export declare class FollowFriendFailedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FollowFriendFailedParser;
}
