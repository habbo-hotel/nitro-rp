import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { AchievementResolutionProgressMessageParser } from '../../../parser';
export declare class AchievementResolutionProgressMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AchievementResolutionProgressMessageParser;
}
