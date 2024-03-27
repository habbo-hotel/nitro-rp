import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { GameAchievementData } from './GameAchievementData';
export declare class GameAchievementsMessageParser implements IMessageParser {
    private _achievements;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get achievements(): GameAchievementData[];
}
