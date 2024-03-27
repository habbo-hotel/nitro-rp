import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CommunityGoalEarnedPrizesMessageParser } from '../../parser';
export declare class CommunityGoalEarnedPrizesMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CommunityGoalEarnedPrizesMessageParser;
}
