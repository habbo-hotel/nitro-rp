import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { WeeklyGameRewardParser } from '../../../parser';
export declare class WeeklyGameRewardEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): WeeklyGameRewardParser;
}
