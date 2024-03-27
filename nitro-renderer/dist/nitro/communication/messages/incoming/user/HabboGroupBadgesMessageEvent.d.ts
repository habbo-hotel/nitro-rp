import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HabboGroupBadgesMessageParser } from '../../parser';
export declare class HabboGroupBadgesMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HabboGroupBadgesMessageParser;
}
