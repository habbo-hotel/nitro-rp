import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class AchievementsScoreParser implements IMessageParser {
    private _score;
    flush(): boolean;
    parse(k: IMessageDataWrapper): boolean;
    get score(): number;
}
