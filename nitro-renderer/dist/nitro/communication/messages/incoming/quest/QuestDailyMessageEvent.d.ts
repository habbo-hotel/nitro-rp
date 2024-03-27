import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { QuestDailyMessageParser } from '../../parser';
export declare class QuestDailyMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): QuestDailyMessageParser;
}
