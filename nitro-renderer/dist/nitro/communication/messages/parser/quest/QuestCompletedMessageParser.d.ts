import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { QuestMessageData } from './QuestMessageData';
export declare class QuestCompletedMessageParser implements IMessageParser {
    private _questData;
    private _showDialog;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get questData(): QuestMessageData;
    get showDialog(): boolean;
}
