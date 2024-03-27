import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GroupMembersParser } from '../../parser';
export declare class GroupMembersEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GroupMembersParser;
}
