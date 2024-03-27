import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ChatReviewSessionDetachedMessageParser } from '../../parser';
export declare class ChatReviewSessionDetachedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ChatReviewSessionDetachedMessageParser;
}
