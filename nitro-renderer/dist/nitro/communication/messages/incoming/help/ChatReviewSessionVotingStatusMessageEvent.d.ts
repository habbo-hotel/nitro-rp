import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ChatReviewSessionVotingStatusMessageParser } from '../../parser';
export declare class ChatReviewSessionVotingStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ChatReviewSessionVotingStatusMessageParser;
}
