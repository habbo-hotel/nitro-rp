import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { GameAchievementsMessageParser } from '../../../parser';
export declare class GameAchievementsMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GameAchievementsMessageParser;
}
