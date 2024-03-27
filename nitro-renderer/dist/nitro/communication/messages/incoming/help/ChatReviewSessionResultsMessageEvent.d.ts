import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ChatReviewSessionResultsMessageParser } from '../../parser';
export declare class ChatReviewSessionResultsMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ChatReviewSessionResultsMessageParser;
}
