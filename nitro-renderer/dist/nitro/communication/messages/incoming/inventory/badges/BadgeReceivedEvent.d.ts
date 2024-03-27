import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { BadgeReceivedParser } from '../../../parser';
export declare class BadgeReceivedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BadgeReceivedParser;
}
