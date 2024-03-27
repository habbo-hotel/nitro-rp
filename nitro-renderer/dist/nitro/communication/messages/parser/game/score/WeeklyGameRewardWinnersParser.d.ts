import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { GameRewardWinnerEntry } from './GameRewardWinnerEntry';
export declare class WeeklyGameRewardWinnersParser implements IMessageParser {
    private _gameTypeId;
    private _winners;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get gameTypeId(): number;
    get winners(): GameRewardWinnerEntry[];
}
