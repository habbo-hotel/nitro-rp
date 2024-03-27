import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { AchievementData } from './AchievementData';
export declare class AchievementsParser implements IMessageParser {
    private _achievements;
    private _defaultCategory;
    flush(): boolean;
    parse(k: IMessageDataWrapper): boolean;
    get achievements(): AchievementData[];
    get defaultCategory(): string;
}
