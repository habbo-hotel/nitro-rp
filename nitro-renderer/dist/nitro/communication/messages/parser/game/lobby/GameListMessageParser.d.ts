import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { GameConfigurationData } from './GameConfigurationData';
export declare class GameListMessageParser implements IMessageParser {
    private _games;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get games(): GameConfigurationData[];
}
