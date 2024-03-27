import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { AchievementResolutionData } from '../../inventory';
export declare class AchievementResolutionsMessageParser implements IMessageParser {
    private _stuffId;
    private _achievements;
    private _endTime;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get stuffId(): number;
    get achievements(): AchievementResolutionData[];
    get endTime(): number;
}
