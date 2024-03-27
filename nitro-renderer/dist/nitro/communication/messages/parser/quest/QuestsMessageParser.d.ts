import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { QuestMessageData } from './QuestMessageData';
export declare class QuestsMessageParser implements IMessageParser {
    private _quests;
    private _openWindow;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get quests(): QuestMessageData[];
    get openWindow(): boolean;
}
