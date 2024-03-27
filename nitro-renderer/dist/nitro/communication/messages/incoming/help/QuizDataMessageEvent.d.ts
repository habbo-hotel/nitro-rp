import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { QuizDataMessageParser } from '../../parser';
export declare class QuizDataMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): QuizDataMessageParser;
}
