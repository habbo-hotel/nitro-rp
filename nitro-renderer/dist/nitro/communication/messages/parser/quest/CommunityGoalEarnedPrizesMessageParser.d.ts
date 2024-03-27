import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PrizeData } from './PrizeData';
export declare class CommunityGoalEarnedPrizesMessageParser implements IMessageParser {
    private _prizes;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get prizes(): PrizeData[];
}
