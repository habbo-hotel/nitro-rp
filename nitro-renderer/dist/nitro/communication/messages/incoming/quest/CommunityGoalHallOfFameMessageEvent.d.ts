import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CommunityGoalHallOfFameMessageParser } from '../../parser';
export declare class CommunityGoalHallOfFameMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CommunityGoalHallOfFameMessageParser;
}
