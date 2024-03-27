import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { QuestionFinishedParser } from '../../parser';
export declare class QuestionFinishedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): QuestionFinishedParser;
}
