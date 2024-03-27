import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class Game2GameDirectoryStatusMessageParser implements IMessageParser {
    static readonly STATUS_OK: number;
    static readonly STATUS_FAILED_REASON_UNKNOWN: number;
    static readonly STATUS_FAILED_REASON_GAME_DIRECTORY_IS_NOT_AVAILABLE: number;
    static readonly STATUS_FAILED_REASON_HOTEL_IS_CLOSED: number;
    private _status;
    private _blockLength;
    private _gamesPlayed;
    private _freeGamesLeft;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get status(): number;
    get blockLength(): number;
    get gamesPlayed(): number;
    get freeGamesLeft(): number;
    get hasUnlimitedGames(): boolean;
}
