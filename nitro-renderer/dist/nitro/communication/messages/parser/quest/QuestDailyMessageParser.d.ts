import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { QuestMessageData } from './QuestMessageData';
export declare class QuestDailyMessageParser implements IMessageParser {
    private _quest;
    private _easyQuestCount;
    private _hardQuestCount;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get quest(): QuestMessageData;
    get easyQuestCount(): number;
    get hardQuestCount(): number;
}
