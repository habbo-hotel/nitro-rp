import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GroupConfirmMemberRemoveParser } from '../../parser';
export declare class GroupConfirmMemberRemoveEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GroupConfirmMemberRemoveParser;
}
