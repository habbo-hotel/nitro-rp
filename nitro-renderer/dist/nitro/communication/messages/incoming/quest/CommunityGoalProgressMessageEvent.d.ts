import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CommunityGoalProgressMessageParser } from '../../parser';
export declare class CommunityGoalProgressMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CommunityGoalProgressMessageParser;
}
