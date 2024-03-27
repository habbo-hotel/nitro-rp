import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GroupDetailsChangedMessageParser } from '../../parser';
export declare class GroupDetailsChangedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GroupDetailsChangedMessageParser;
}
