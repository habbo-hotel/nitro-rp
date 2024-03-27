import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GroupMembershipRequestedMessageParser } from '../../parser';
export declare class GroupMembershipRequestedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GroupMembershipRequestedMessageParser;
}
