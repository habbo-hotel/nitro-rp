import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { WeeklyGameRewardWinnersParser } from '../../../parser';
export declare class WeeklyGameRewardWinnersEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): WeeklyGameRewardWinnersParser;
}
