import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { CommunityVoteReceivedParser } from '../../../parser';
export declare class CommunityGoalVoteMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CommunityVoteReceivedParser;
}
