import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { AchievementLevelUpData } from './AchievementLevelUpData';
export declare class AchievementNotificationMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): AchievementLevelUpData;
}
