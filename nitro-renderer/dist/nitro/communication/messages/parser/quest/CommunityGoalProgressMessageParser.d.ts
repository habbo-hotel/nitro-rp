import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CommunityGoalData } from './CommunityGoalData';
export declare class CommunityGoalProgressMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): CommunityGoalData;
}
