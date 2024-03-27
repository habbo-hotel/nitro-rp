import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { AchievementsParser } from '../../../parser';
export declare class AchievementsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AchievementsParser;
}
