import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { UserGameAchievementsMessageParser } from '../../../parser';
export declare class UserGameAchievementsMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserGameAchievementsMessageParser;
}
