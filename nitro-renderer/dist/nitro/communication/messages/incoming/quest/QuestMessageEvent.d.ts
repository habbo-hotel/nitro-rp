import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { QuestMessageParser } from '../../parser';
export declare class QuestMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): QuestMessageParser;
}
