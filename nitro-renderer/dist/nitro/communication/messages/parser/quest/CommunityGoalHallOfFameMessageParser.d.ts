import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CommunityGoalHallOfFameData } from './CommunityGoalHallOfFameData';
export declare class CommunityGoalHallOfFameMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): CommunityGoalHallOfFameData;
}
