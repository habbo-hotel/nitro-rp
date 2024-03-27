import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CompetitionVotingInfoMessageParser } from '../../parser';
export declare class CompetitionVotingInfoMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CompetitionVotingInfoMessageParser;
}
