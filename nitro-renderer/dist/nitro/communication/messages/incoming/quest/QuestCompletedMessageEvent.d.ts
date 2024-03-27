import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { QuestCompletedMessageParser } from '../../parser';
export declare class QuestCompletedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): QuestCompletedMessageParser;
}
