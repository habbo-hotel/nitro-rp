import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { AchievementResolutionCompletedMessageParser } from '../../../parser';
export declare class AchievementResolutionCompletedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AchievementResolutionCompletedMessageParser;
}
