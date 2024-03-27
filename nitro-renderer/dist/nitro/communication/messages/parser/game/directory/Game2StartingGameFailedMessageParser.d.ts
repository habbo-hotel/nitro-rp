import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class Game2StartingGameFailedMessageParser implements IMessageParser {
    static readonly NOT_ENOUGH_PLAYERS: number;
    static readonly GAME_HAS_NO_OWNER: number;
    private _reason;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get reason(): number;
}
