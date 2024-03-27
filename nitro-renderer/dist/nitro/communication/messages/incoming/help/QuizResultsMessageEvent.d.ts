import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { QuizResultsMessageParser } from '../../parser';
export declare class QuizResultsMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): QuizResultsMessageParser;
}
