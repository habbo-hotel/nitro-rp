import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { QuestMessageData } from './QuestMessageData';
export declare class QuestMessageParser implements IMessageParser {
    private _quest;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get quest(): QuestMessageData;
}
