import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { AchievementNotificationMessageParser } from '../../parser';
export declare class AchievementNotificationMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AchievementNotificationMessageParser;
}
