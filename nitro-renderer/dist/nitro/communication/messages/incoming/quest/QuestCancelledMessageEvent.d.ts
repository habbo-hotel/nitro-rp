import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { QuestCancelledMessageParser } from '../../parser';
export declare class QuestCancelledMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): QuestCancelledMessageParser;
}
