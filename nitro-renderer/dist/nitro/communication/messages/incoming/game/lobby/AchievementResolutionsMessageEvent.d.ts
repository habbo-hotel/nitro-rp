import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { AchievementResolutionsMessageParser } from '../../../parser';
export declare class AchievementResolutionsMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AchievementResolutionsMessageParser;
}
