import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ChatReviewSessionStartedMessageParser } from '../../parser';
export declare class ChatReviewSessionStartedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ChatReviewSessionStartedMessageParser;
}
