import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class Game2AccountGameStatusMessageParser implements IMessageParser {
    private _gameTypeId;
    private _freeGamesLeft;
    private _gamesPlayedTotal;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get gameTypeId(): number;
    get freeGamesLeft(): number;
    get gamesPlayedTotal(): number;
    get hasUnlimitedGames(): boolean;
}
