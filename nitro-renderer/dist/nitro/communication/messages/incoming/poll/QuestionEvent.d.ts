import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { QuestionParser } from '../../parser';
export declare class QuestionEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): QuestionParser;
}
