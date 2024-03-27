import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { QuestionAnsweredParser } from '../../parser';
export declare class QuestionAnsweredEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): QuestionAnsweredParser;
}
