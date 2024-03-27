import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ChatReviewSessionOfferedToGuideMessageParser } from '../../parser';
export declare class ChatReviewSessionOfferedToGuideMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ChatReviewSessionOfferedToGuideMessageParser;
}
