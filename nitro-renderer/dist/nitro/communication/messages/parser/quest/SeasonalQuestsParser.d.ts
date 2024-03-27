import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { QuestMessageData } from './QuestMessageData';
export declare class SeasonalQuestsParser implements IMessageParser {
    private _quests;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get quests(): QuestMessageData[];
}
