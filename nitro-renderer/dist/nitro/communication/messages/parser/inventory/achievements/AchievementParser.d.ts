import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { AchievementData } from './AchievementData';
export declare class AchievementParser implements IMessageParser {
    private _achievement;
    flush(): boolean;
    parse(k: IMessageDataWrapper): boolean;
    get achievement(): AchievementData;
}
